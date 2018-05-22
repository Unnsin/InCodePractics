import { schema } from 'normalizr';

const client = new schema.Entity('client', {}, { idAttribute: '_id' });

export const clientsSchema = new schema.Array(client);
export const clientSchema = new schema.Entity('client', {}, { idAttribute: '_id' });
