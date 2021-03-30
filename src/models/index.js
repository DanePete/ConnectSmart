// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Software } = initSchema(schema);

export {
  Software
};