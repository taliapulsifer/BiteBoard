/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onCreateRestaurant(filter: $filter) {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onUpdateRestaurant(filter: $filter) {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onDeleteRestaurant(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onCreatePosts(filter: $filter) {
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
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onUpdatePosts(filter: $filter) {
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
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
    onDeletePosts(filter: $filter) {
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
export const onCreateUserPhoto = /* GraphQL */ `
  subscription OnCreateUserPhoto(
    $filter: ModelSubscriptionUserPhotoFilterInput
  ) {
    onCreateUserPhoto(filter: $filter) {
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
export const onUpdateUserPhoto = /* GraphQL */ `
  subscription OnUpdateUserPhoto(
    $filter: ModelSubscriptionUserPhotoFilterInput
  ) {
    onUpdateUserPhoto(filter: $filter) {
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
export const onDeleteUserPhoto = /* GraphQL */ `
  subscription OnDeleteUserPhoto(
    $filter: ModelSubscriptionUserPhotoFilterInput
  ) {
    onDeleteUserPhoto(filter: $filter) {
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
export const onCreateRestaurantPhotos = /* GraphQL */ `
  subscription OnCreateRestaurantPhotos(
    $filter: ModelSubscriptionRestaurantPhotosFilterInput
  ) {
    onCreateRestaurantPhotos(filter: $filter) {
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
export const onUpdateRestaurantPhotos = /* GraphQL */ `
  subscription OnUpdateRestaurantPhotos(
    $filter: ModelSubscriptionRestaurantPhotosFilterInput
  ) {
    onUpdateRestaurantPhotos(filter: $filter) {
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
export const onDeleteRestaurantPhotos = /* GraphQL */ `
  subscription OnDeleteRestaurantPhotos(
    $filter: ModelSubscriptionRestaurantPhotosFilterInput
  ) {
    onDeleteRestaurantPhotos(filter: $filter) {
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
