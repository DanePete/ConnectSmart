/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKey = /* GraphQL */ `
  mutation CreateKey(
    $input: CreateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    createKey(input: $input, condition: $condition) {
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
export const updateKey = /* GraphQL */ `
  mutation UpdateKey(
    $input: UpdateKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    updateKey(input: $input, condition: $condition) {
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
export const deleteKey = /* GraphQL */ `
  mutation DeleteKey(
    $input: DeleteKeyInput!
    $condition: ModelKeyConditionInput
  ) {
    deleteKey(input: $input, condition: $condition) {
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
export const createSoftware = /* GraphQL */ `
  mutation CreateSoftware(
    $input: CreateSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    createSoftware(input: $input, condition: $condition) {
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
export const updateSoftware = /* GraphQL */ `
  mutation UpdateSoftware(
    $input: UpdateSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    updateSoftware(input: $input, condition: $condition) {
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
export const deleteSoftware = /* GraphQL */ `
  mutation DeleteSoftware(
    $input: DeleteSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    deleteSoftware(input: $input, condition: $condition) {
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
