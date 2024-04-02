/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      address
      cuisineType
      open
      ratings
      reviews
      updatedAt
      photos {
        nextToken
        __typename
      }
      createdAt
      __typename
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
      id
      name
      address
      cuisineType
      open
      ratings
      reviews
      updatedAt
      photos {
        nextToken
        __typename
      }
      createdAt
      __typename
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
      id
      name
      address
      cuisineType
      open
      ratings
      reviews
      updatedAt
      photos {
        nextToken
        __typename
      }
      createdAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      userID
      username
      password
      posts {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      userID
      username
      password
      posts {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      userID
      username
      password
      posts {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPosts = /* GraphQL */ `
  mutation CreatePosts(
    $input: CreatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    createPosts(input: $input, condition: $condition) {
      id
      user {
        userID
        username
        password
        id
        createdAt
        updatedAt
        __typename
      }
      restaurant {
        id
        name
        address
        cuisineType
        open
        ratings
        reviews
        updatedAt
        createdAt
        __typename
      }
      datePosted
      caption
      photos {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
      id
      user {
        userID
        username
        password
        id
        createdAt
        updatedAt
        __typename
      }
      restaurant {
        id
        name
        address
        cuisineType
        open
        ratings
        reviews
        updatedAt
        createdAt
        __typename
      }
      datePosted
      caption
      photos {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const deletePosts = /* GraphQL */ `
  mutation DeletePosts(
    $input: DeletePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    deletePosts(input: $input, condition: $condition) {
      id
      user {
        userID
        username
        password
        id
        createdAt
        updatedAt
        __typename
      }
      restaurant {
        id
        name
        address
        cuisineType
        open
        ratings
        reviews
        updatedAt
        createdAt
        __typename
      }
      datePosted
      caption
      photos {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const createUserPhoto = /* GraphQL */ `
  mutation CreateUserPhoto(
    $input: CreateUserPhotoInput!
    $condition: ModelUserPhotoConditionInput
  ) {
    createUserPhoto(input: $input, condition: $condition) {
      id
      post {
        id
        datePosted
        caption
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      photo
      createdAt
      updatedAt
      postsPhotosId
      __typename
    }
  }
`;
export const updateUserPhoto = /* GraphQL */ `
  mutation UpdateUserPhoto(
    $input: UpdateUserPhotoInput!
    $condition: ModelUserPhotoConditionInput
  ) {
    updateUserPhoto(input: $input, condition: $condition) {
      id
      post {
        id
        datePosted
        caption
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      photo
      createdAt
      updatedAt
      postsPhotosId
      __typename
    }
  }
`;
export const deleteUserPhoto = /* GraphQL */ `
  mutation DeleteUserPhoto(
    $input: DeleteUserPhotoInput!
    $condition: ModelUserPhotoConditionInput
  ) {
    deleteUserPhoto(input: $input, condition: $condition) {
      id
      post {
        id
        datePosted
        caption
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      photo
      createdAt
      updatedAt
      postsPhotosId
      __typename
    }
  }
`;
export const createRestaurantPhotos = /* GraphQL */ `
  mutation CreateRestaurantPhotos(
    $input: CreateRestaurantPhotosInput!
    $condition: ModelRestaurantPhotosConditionInput
  ) {
    createRestaurantPhotos(input: $input, condition: $condition) {
      id
      restaurant {
        id
        name
        address
        cuisineType
        open
        ratings
        reviews
        updatedAt
        createdAt
        __typename
      }
      datePosted
      photo
      createdAt
      updatedAt
      restaurantPhotosId
      __typename
    }
  }
`;
export const updateRestaurantPhotos = /* GraphQL */ `
  mutation UpdateRestaurantPhotos(
    $input: UpdateRestaurantPhotosInput!
    $condition: ModelRestaurantPhotosConditionInput
  ) {
    updateRestaurantPhotos(input: $input, condition: $condition) {
      id
      restaurant {
        id
        name
        address
        cuisineType
        open
        ratings
        reviews
        updatedAt
        createdAt
        __typename
      }
      datePosted
      photo
      createdAt
      updatedAt
      restaurantPhotosId
      __typename
    }
  }
`;
export const deleteRestaurantPhotos = /* GraphQL */ `
  mutation DeleteRestaurantPhotos(
    $input: DeleteRestaurantPhotosInput!
    $condition: ModelRestaurantPhotosConditionInput
  ) {
    deleteRestaurantPhotos(input: $input, condition: $condition) {
      id
      restaurant {
        id
        name
        address
        cuisineType
        open
        ratings
        reviews
        updatedAt
        createdAt
        __typename
      }
      datePosted
      photo
      createdAt
      updatedAt
      restaurantPhotosId
      __typename
    }
  }
`;
