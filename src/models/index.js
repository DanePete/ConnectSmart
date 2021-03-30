// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Key, Software } = initSchema(schema);

export {
  Key,
  Software
};