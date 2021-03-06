/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTimeEntry = /* GraphQL */ `
  mutation CreateTimeEntry(
    $input: CreateTimeEntryInput!
    $condition: ModelTimeEntryConditionInput
  ) {
    createTimeEntry(input: $input, condition: $condition) {
      id
      ticketID
      createdAt
      updatedAt
    }
  }
`;
export const updateTimeEntry = /* GraphQL */ `
  mutation UpdateTimeEntry(
    $input: UpdateTimeEntryInput!
    $condition: ModelTimeEntryConditionInput
  ) {
    updateTimeEntry(input: $input, condition: $condition) {
      id
      ticketID
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimeEntry = /* GraphQL */ `
  mutation DeleteTimeEntry(
    $input: DeleteTimeEntryInput!
    $condition: ModelTimeEntryConditionInput
  ) {
    deleteTimeEntry(input: $input, condition: $condition) {
      id
      ticketID
      createdAt
      updatedAt
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createKey = /* GraphQL */ `
  mutation CreateKey(
    $input: CreateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    createKey(input: $input, condition: $condition) {
      id
      key
      softwareID
      createdAt
      updatedAt
    }
  }
`;
export const updateKey = /* GraphQL */ `
  mutation UpdateKey(
    $input: UpdateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    updateKey(input: $input, condition: $condition) {
      id
      key
      softwareID
      createdAt
      updatedAt
    }
  }
`;
export const deleteKey = /* GraphQL */ `
  mutation DeleteKey(
    $input: DeleteKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    deleteKey(input: $input, condition: $condition) {
      id
      key
      softwareID
      createdAt
      updatedAt
    }
  }
`;
export const createSoftware = /* GraphQL */ `
  mutation CreateSoftware(
    $input: CreateSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    createSoftware(input: $input, condition: $condition) {
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
export const updateSoftware = /* GraphQL */ `
  mutation UpdateSoftware(
    $input: UpdateSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    updateSoftware(input: $input, condition: $condition) {
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
export const deleteSoftware = /* GraphQL */ `
  mutation DeleteSoftware(
    $input: DeleteSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    deleteSoftware(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProfileAdmin = /* GraphQL */ `
  mutation CreateProfileAdmin(
    $input: CreateProfileAdminInput!
    $condition: ModelProfileAdminConditionInput
  ) {
    createProfileAdmin(input: $input, condition: $condition) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProfileAdmin = /* GraphQL */ `
  mutation UpdateProfileAdmin(
    $input: UpdateProfileAdminInput!
    $condition: ModelProfileAdminConditionInput
  ) {
    updateProfileAdmin(input: $input, condition: $condition) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProfileAdmin = /* GraphQL */ `
  mutation DeleteProfileAdmin(
    $input: DeleteProfileAdminInput!
    $condition: ModelProfileAdminConditionInput
  ) {
    deleteProfileAdmin(input: $input, condition: $condition) {
      id
      profile_image
      createdAt
      updatedAt
      owner
    }
  }
`;
