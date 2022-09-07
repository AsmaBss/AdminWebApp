import { gql } from "@apollo/client";

export const GET_SONEDE = gql`
  query getAllFactures {
    getAllFactures {
      id
      num
      date
      topay
      type
      status
    }
  }
`;
