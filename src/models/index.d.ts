import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





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