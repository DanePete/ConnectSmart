/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      first_name
      last_name
      is_active
      primary_phone
      secondary_phone
      email
      customerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        is_active
        primary_phone
        secondary_phone
        email
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncContacts = /* GraphQL */ `
  query SyncContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        is_active
        primary_phone
        secondary_phone
        email
        customerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      is_active
      customer_phone
      customer_url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Contacts {
        nextToken
        startedAt
      }
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        is_active
        customer_phone
        customer_url
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        is_active
        customer_phone
        customer_url
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getKey = /* GraphQL */ `
  query GetKey($id: ID!) {
    getKey(id: $id) {
      id
      key
      softwareID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listKeys = /* GraphQL */ `
  query ListKeys(
    $filter: ModelKeyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKeys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        softwareID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncKeys = /* GraphQL */ `
  query SyncKeys(
    $filter: ModelKeyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncKeys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        key
        softwareID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSoftware = /* GraphQL */ `
  query GetSoftware($id: ID!) {
    getSoftware(id: $id) {
      id
      title
      initial_purchase_date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Keys {
        nextToken
        startedAt
      }
    }
  }
`;
export const listSoftwares = /* GraphQL */ `
  query ListSoftwares(
    $filter: ModelSoftwareFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSoftwares(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        initial_purchase_date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSoftware = /* GraphQL */ `
  query SyncSoftware(
    $filter: ModelSoftwareFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSoftware(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        initial_purchase_date
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
