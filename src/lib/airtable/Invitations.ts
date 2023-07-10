import Airtable, { Table, FieldSet } from 'airtable';

export default class Invitations {
  private static instance: Invitations;

  private client: Airtable;

  private invitations: Table<FieldSet>;

  private constructor() {
    console.debug('instantiating Invitations class');

    this.client = new Airtable({
      apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
    });

    this.invitations = this.client.base(import.meta.env.VITE_AIRTABLE_BASE_ID)(
      'Invitations'
    );
  }

  static getInstance(): Invitations {
    if (!Invitations.instance) {
      Invitations.instance = new Invitations();
    }

    return Invitations.instance;
  }

  async getAllInvitations() {
    const instance = Invitations.getInstance();
    return instance.invitations.select().all();
  }
}
