import Airtable from 'airtable';

const client = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
});

const invitationsTable = client.base(import.meta.env.VITE_AIRTABLE_BASE_ID)(
  'Invitations'
);

export default client;

export const airtable = {
  invitations: invitationsTable,
};
