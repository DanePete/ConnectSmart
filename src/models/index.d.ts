import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class TimeEntry {
  readonly id: string;
  readonly ticketID?: string;
  constructor(init: ModelInit<TimeEntry>);
  static copyOf(source: TimeEntry, mutator: (draft: MutableModel<TimeEntry>) => MutableModel<TimeEntry> | void): TimeEntry;
}

export declare class Project {
  readonly id: string;
  readonly Tickets?: (Ticket | null)[];
  constructor(init: ModelInit<Project>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

export declare class Ticket {
  readonly id: string;
  readonly projectID?: string;
  readonly TimeEntries?: (TimeEntry | null)[];
  constructor(init: ModelInit<Ticket>);
  static copyOf(source: Ticket, mutator: (draft: MutableModel<Ticket>) => MutableModel<Ticket> | void): Ticket;
}

export declare class Contact {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly is_active?: boolean;
  readonly primary_phone?: string;
  readonly secondary_phone?: string;
  readonly email?: string;
  readonly customerID?: string;
  constructor(init: ModelInit<Contact>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}

export declare class Customer {
  readonly id: string;
  readonly name?: string;
  readonly is_active?: boolean;
  readonly customer_phone?: string;
  readonly customer_url?: string;
  readonly Contacts?: (Contact | null)[];
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

export declare class Key {
  readonly id: string;
  readonly key?: string;
  readonly softwareID?: string;
  constructor(init: ModelInit<Key>);
  static copyOf(source: Key, mutator: (draft: MutableModel<Key>) => MutableModel<Key> | void): Key;
}

export declare class Software {
  readonly id: string;
  readonly title?: string;
  readonly initial_purchase_date?: string;
  readonly Keys?: (Key | null)[];
  constructor(init: ModelInit<Software>);
  static copyOf(source: Software, mutator: (draft: MutableModel<Software>) => MutableModel<Software> | void): Software;
}