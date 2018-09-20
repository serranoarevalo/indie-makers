import gql from "graphql-tag";

export const FILTER_TODOS = gql`
  query filterToDos($status: GoalStatus!, $page: Int!) {
    FilterGoals(status: $status, page: $page) {
      makers {
        id
        fullName
        profilePhoto
        streak
        launchedProductCount
        username
        goals {
          id
          text
          isCompleted
          product {
            slug
            name
            id
          }
          updatedAt
        }
      }
      page
      totalPages
    }
  }
`;
