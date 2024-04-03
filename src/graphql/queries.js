/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
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
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userID
        username
        password
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPosts = /* GraphQL */ `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        datePosted
        caption
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserPhoto = /* GraphQL */ `
  query GetUserPhoto($id: ID!) {
    getUserPhoto(id: $id) {
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
export const listUserPhotos = /* GraphQL */ `
  query ListUserPhotos(
    $filter: ModelUserPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        photo
        createdAt
        updatedAt
        postsPhotosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRestaurantPhotos = /* GraphQL */ `
  query GetRestaurantPhotos($id: ID!) {
    getRestaurantPhotos(id: $id) {
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
export const listRestaurantPhotos = /* GraphQL */ `
  query ListRestaurantPhotos(
    $filter: ModelRestaurantPhotosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurantPhotos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        datePosted
        photo
        createdAt
        updatedAt
        restaurantPhotosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
