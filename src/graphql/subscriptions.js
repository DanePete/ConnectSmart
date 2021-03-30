/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
