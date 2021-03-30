/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSoftware = /* GraphQL */ `
  mutation CreateSoftware(
    $input: CreateSoftwareInput!
    $condition: ModelSoftwareConditionInput
  ) {
    createSoftware(input: $input, condition: $condition) {
      id
      Title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      Title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      Title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
