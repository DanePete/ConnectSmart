/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimeEntry = /* GraphQL */ `
  query GetTimeEntry($id: ID!) {
    getTimeEntry(id: $id) {
      id
      ticketID
      createdAt
      updatedAt
    }
  }
`;
export const listTimeEntrys = /* GraphQL */ `
  query ListTimeEntrys(
    $filter: ModelTimeEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ticketID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      is_active
      createdAt
      updatedAt
      owner
      Tickets {
        nextToken
      }
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        is_active
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      projectID
      createdAt
      updatedAt
      TimeEntries {
        nextToken
      }
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
        createdAt
        updatedAt
      }
      nextToken
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
      createdAt
      updatedAt
      Contacts {
        nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getKey = /* GraphQL */ `
  query GetKey($id: ID!) {
    getKey(id: $id) {
      id
      key
      softwareID
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSoftware = /* GraphQL */ `
  query GetSoftware($id: ID!) {
    getSoftware(id: $id) {
      id
      title
      initial_purchase_date
      createdAt
      updatedAt
      Keys {
        nextToken
      }
      owner
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profile_image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProfileAdmin = /* GraphQL */ `
  query GetProfileAdmin($id: ID!) {
    getProfileAdmin(id: $id) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProfileAdmins = /* GraphQL */ `
  query ListProfileAdmins(
    $filter: ModelProfileAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profile_image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
