import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





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