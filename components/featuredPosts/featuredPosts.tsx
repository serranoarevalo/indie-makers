import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import BlogPost from "../blogPost";
import FakeLink from "../fakeLink";
import Section from "../section";
import Title from "../title";

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr minmax(340px, 1fr);
  grid-gap: 50px;
`;

const GridColumn = styled.div``;

const PostsColumn = styled.div`
  display: grid;
  grid-template-rows: repat(3, 1fr);
  grid-gap: 30px;
`;

const FeaturedPosts = () => (
  <Section
    titleElements={[
      <Title key={1}>Launched Products</Title>,
      <Link key={2} href={routes.blog}>
        <a>
          <FakeLink>See more</FakeLink>
        </a>
      </Link>
    ]}
  >
    <PostGrid>
      <GridColumn>
        <BlogPost href={"#"} featured={true} />
      </GridColumn>
      <PostsColumn>
        <BlogPost href={"#"} />
        <BlogPost href={"#"} />
        <BlogPost href={"#"} />
      </PostsColumn>
    </PostGrid>
  </Section>
);

export default FeaturedPosts;