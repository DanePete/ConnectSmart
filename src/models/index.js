// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TimeEntry, Project, Ticket, Contact, Customer, Key, Software } = initSchema(schema);

export {
  TimeEntry,
  Project,
  Ticket,
  Contact,
  Customer,
  Key,
  Software
};