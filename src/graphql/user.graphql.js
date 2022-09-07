import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      firstname
      lastname
      email
      birthdate
      address
      image
    }
  }
`;

export const REGISTER = gql`
  mutation addUSer(
    $firstname: String!
    $lastname: String!
    $password: String!
    $email: String!
    $birthDate: String!
    $address: String!
    $image: String!
  ) {
    addUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      birthDate: $birthDate
      address: $address
      image: $image
    ) {
      id
      firstname
      lastname
      email
      password
      birthDate
      address
      image
    }
  }
`;

export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;
