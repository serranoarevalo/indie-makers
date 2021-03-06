import Link from "next/link";
import routes from "../../routes";
import styled from "../../typed-components";
import Button from "../button";
import FakeLink from "../fakeLink";
import BigDetailCard from "../bigDetailCard";
import Section from "../section";
import Title from "../title";
import { addedRecently } from "types/api";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
  grid-auto-flow: row;
  @media (max-width: 800px) {
    grid-auto-columns: 300px;
  }
`;

const AddButton = styled(Button)`
  margin-left: 30px;
  @media (max-width: 700px) {
    margin: 0;
  }
`;

interface IProps {
  data?: addedRecently;
}

const NewProductsPresenter: React.SFC<IProps> = ({
  data: { FilterProducts: { products = [] } = {} } = {}
}) =>
  products && products.length !== 0 ? (
    <Section
      titleElements={[
        <Title key={1}>Products added recently</Title>,
        <Link prefetch key={3} href={routes.new}>
          <a>
            <AddButton accent={false} text={"Add yours now"} size={"xs"} />
          </a>
        </Link>,
        <Link prefetch key={2} href={routes.products}>
          <a>
            <FakeLink>See more</FakeLink>
          </a>
        </Link>
      ]}
    >
      <Grid>
        {products &&
          products.map(
            product =>
              product && (
                <BigDetailCard
                  key={product.id}
                  isLink={true}
                  link={routes.productDetail(`${product.slug}`)}
                  linkAs={routes.asProductDetail(`${product.slug}`)}
                  icon={product.logo || ""}
                  authorAvatar={product.maker!.profilePhoto}
                  title={product.name}
                  showSubtitle={true}
                  toDoNumber={`${product.completedGoalCount}/${
                    product.goalCount
                  }`}
                  subtitle={product.description}
                  hasAuthor={true}
                  needsHelp={product.needsHelp}
                  commentNumber={product.commentCount}
                  voteNumber={product.voteCount}
                  isFinished={product.isLaunched}
                />
              )
          )}
      </Grid>
    </Section>
  ) : null;

export default NewProductsPresenter;
