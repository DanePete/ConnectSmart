/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTimeEntry = /* GraphQL */ `
  subscription OnCreateTimeEntry {
    onCreateTimeEntry {
      id
      ticketID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimeEntry = /* GraphQL */ `
  subscription OnUpdateTimeEntry {
    onUpdateTimeEntry {
      id
      ticketID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimeEntry = /* GraphQL */ `
  subscription OnDeleteTimeEntry {
    onDeleteTimeEntry {
      id
      ticketID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String) {
    onCreateProject(owner: $owner) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String) {
    onUpdateProject(owner: $owner) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String) {
    onDeleteProject(owner: $owner) {
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
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
      id
      projectID
      is_active
      createdAt
      updatedAt
      TimeEntries {
        nextToken
      }
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
      id
      projectID
      is_active
      createdAt
      updatedAt
      TimeEntries {
        nextToken
      }
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
      id
      projectID
      is_active
      createdAt
      updatedAt
      TimeEntries {
        nextToken
      }
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      name
      is_active
      primary_contact_name
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      name
      is_active
      primary_contact_name
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      name
      is_active
      primary_contact_name
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
export const onCreateKey = /* GraphQL */ `
  subscription OnCreateKey {
    onCreateKey {
      id
      key
      softwareID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateKey = /* GraphQL */ `
  subscription OnUpdateKey {
    onUpdateKey {
      id
      key
      softwareID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteKey = /* GraphQL */ `
  subscription OnDeleteKey {
    onDeleteKey {
      id
      key
      softwareID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSoftware = /* GraphQL */ `
  subscription OnCreateSoftware($owner: String) {
    onCreateSoftware(owner: $owner) {
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
export const onUpdateSoftware = /* GraphQL */ `
  subscription OnUpdateSoftware($owner: String) {
    onUpdateSoftware(owner: $owner) {
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
export const onDeleteSoftware = /* GraphQL */ `
  subscription OnDeleteSoftware($owner: String) {
    onDeleteSoftware(owner: $owner) {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateProfileAdmin = /* GraphQL */ `
  subscription OnCreateProfileAdmin($owner: String) {
    onCreateProfileAdmin(owner: $owner) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProfileAdmin = /* GraphQL */ `
  subscription OnUpdateProfileAdmin($owner: String) {
    onUpdateProfileAdmin(owner: $owner) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProfileAdmin = /* GraphQL */ `
  subscription OnDeleteProfileAdmin($owner: String) {
    onDeleteProfileAdmin(owner: $owner) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
