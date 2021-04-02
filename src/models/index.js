// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, Customer, Key, Software } = initSchema(schema);

export {
  Contact,
  Customer,
  Key,
  Software
};