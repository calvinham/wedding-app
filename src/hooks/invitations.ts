import { useGetInvitationsQuery } from '@/state/api';
import { useCallback } from 'react';

export function useAllInvitations() {
  const invitationsQuery = useGetInvitationsQuery({});

  return {
    data: invitationsQuery.data,
    isLoading: invitationsQuery.isLoading,
  } as const;
}

const inviteErrMessages = {
  noInput: 'Name is Required',
  noFirstOrLastName: 'Both First and Last Names are Required',
  notFound:
    "We couldn't find you in our list. Please make sure both first and last names are spelled correctly.",
};

export function useGetIsInvited() {
  const { data: invited } = useAllInvitations();

  const getInvitedUser = useCallback(
    (input: string | undefined) => {
      try {
        console.debug('[useGetIsInvited/getInvitedUser] input: ', input);
        if (!input) {
          throw new Error(inviteErrMessages.noInput);
        }
        const inputSplit = input.split(' ');

        if (inputSplit.length < 2) {
          throw new Error(inviteErrMessages.noFirstOrLastName);
        }

        const firstName = inputSplit[0].trim().toLowerCase();
        const lastName = inputSplit[inputSplit.length - 1].trim().toLowerCase();

        console.debug('[useGetIsInvited/getInvitedUser] split: ', {
          firstName,
          lastName,
        });

        const filteredByLastName =
          invited?.filter((data) => {
            if (data.lastName) {
              return data.lastName.toLowerCase() === lastName;
            }
          }) || [];

        if (!filteredByLastName.length) {
          throw new Error(inviteErrMessages.notFound);
        }

        const invitedUser = filteredByLastName.find((user) => {
          if (!user.firstName) return false;
          if (user.firstName.toLowerCase().includes(firstName)) return true;
          if (user.alias) {
            if (user.alias.toLowerCase() === firstName) return true;
          }
          return false;
        });

        if (!invitedUser) {
          throw new Error(inviteErrMessages.notFound);
        }

        console.debug(
          '[useGetIsInvited/getInvitedUser] invitedUser: ',
          invitedUser
        );
        return invitedUser;
      } catch (e: unknown) {
        throw e as Error;
      }
    },
    [invited]
  );

  return [getInvitedUser] as const;
}
