import Head from "next/head";
import styled from "styled-components";
import FeaturedPosts from "../components/featuredPosts";
import Hero from "../components/hero";
import NewGoals from "../components/newGoals";
import NewProducts from "../components/newProducts";
import Wrapper from "../components/wrapper";
import "../globalStyles";

const Container = styled.div``;

const IndexColumns = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 50px;
`;

const HeroWrapper = styled.div`
  background-color: white;
  padding: 15vh 0;
  margin-bottom: 10vh;
`;

export default () => (
  <Container>
    <Head>
      <title>Indie Makers | Build products, together.</title>
    </Head>
    <HeroWrapper>
      <Wrapper>
        <Hero />
      </Wrapper>
    </HeroWrapper>
    <Wrapper>
      <FeaturedPosts />
      <IndexColumns>
        <NewProducts />
        <NewGoals />
      </IndexColumns>
    </Wrapper>
  </Container>
);
