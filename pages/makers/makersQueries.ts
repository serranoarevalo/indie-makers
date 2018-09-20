import gql from "graphql-tag";

export const FILTER_MAKERS = gql`
  query filterMakers($status: UserState!, $page: Int!) {
    FilterUsers(status: $status, page: $page) {
      makers {
        id
        profilePhoto
        fullName
        username
        streak
        launchedProductCount
      }
      page
      totalPages
    }
  }
`;
