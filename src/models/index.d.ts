import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Software {
  readonly id: string;
  readonly Title?: string;
  constructor(init: ModelInit<Software>);
  static copyOf(source: Software, mutator: (draft: MutableModel<Software>) => MutableModel<Software> | void): Software;
}