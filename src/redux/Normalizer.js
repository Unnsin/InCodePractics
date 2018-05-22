import { schema } from 'normalizr';

const client = new schema.Entity('client');

export const clientschema = new schema.Object(client);

