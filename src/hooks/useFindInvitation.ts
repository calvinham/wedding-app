import { useCallback } from 'react';
import useAllInvitations from '@/hooks/useAllInvitations';
import { capitalize } from '@/lib/util';

const inviteErrMessages = {
  noInput: 'Name is Required',
  noFirstOrLastName: 'Both First and Last Names are Required',
  notFound:
    "We couldn't find you in our list. Please make sure both first and last names are spelled correctly.",
};

const parseNames = (input: string | undefined) => {
  try {
    if (!input) {
      throw new Error(inviteErrMessages.noInput);
    }
    const inputSplit = input.split(' ');

    if (inputSplit.length < 2) {
      throw new Error(inviteErrMessages.noFirstOrLastName);
    }

    const firstName = inputSplit
      .slice(0, -1)
      .map(capitalize)
      .toString()
      .replace(',', ' ')
      .trim();
    const lastName = capitalize(inputSplit[inputSplit.length - 1].trim());

    return {
      firstName,
      lastName,
    };
  } catch (e) {
    throw e as Error;
  }
};

export function useFindInvitation() {
  const { data: invited } = useAllInvitations();

  const findInvitation = useCallback(
    (input: string | undefined) => {
      try {
        console.debug(
          '[useGetIsInvited/getInvitedUser] parsing input: ',
          input
        );

        const { firstName, lastName } = parseNames(input);

        const _firstName = firstName.toLowerCase();
        const _lastName = lastName.toLowerCase();

        console.debug('[useGetIsInvited/getInvitedUser] names: ', {
          firstName,
          lastName,
        });

        const _invited = invited || [];

        const filteredByLastName = _invited.filter((data) => {
          if (!data.lastName) return false;
          return data.lastName.toLowerCase() === _lastName;
        });

        console.debug(
          '[useGetIsInvited/getInvitedUser] filteredByLastName: ',
          filteredByLastName
        );

        if (!filteredByLastName.length) {
          throw new Error(inviteErrMessages.notFound);
        }

        const invitedUser = filteredByLastName.find((user) => {
          if (!user.firstName) return false;

          return (
            user.firstName.trim().toLowerCase() === _firstName ||
            user.plusOne?.trim().toLowerCase() === _firstName ||
            user.alias?.trim().toLowerCase() === _firstName
          );
        });

        if (!invitedUser) {
          throw new Error(inviteErrMessages.notFound);
        }

        console.debug('[useGetIsInvited/] invitedUser: ', invitedUser);

        return {
          invitedUser,
          firstName,
          lastName,
        };
      } catch (e: unknown) {
        throw e as Error;
      }
    },
    [invited]
  );

  return [findInvitation] as const;
}
