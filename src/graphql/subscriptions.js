/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateKey = /* GraphQL */ `
  subscription OnCreateKey {
    onCreateKey {
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
export const onUpdateKey = /* GraphQL */ `
  subscription OnUpdateKey {
    onUpdateKey {
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
export const onDeleteKey = /* GraphQL */ `
  subscription OnDeleteKey {
    onDeleteKey {
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
export const onCreateSoftware = /* GraphQL */ `
  subscription OnCreateSoftware {
    onCreateSoftware {
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
export const onUpdateSoftware = /* GraphQL */ `
  subscription OnUpdateSoftware {
    onUpdateSoftware {
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
export const onDeleteSoftware = /* GraphQL */ `
  subscription OnDeleteSoftware {
    onDeleteSoftware {
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
