import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";
import { ErrorMsg } from "../components/ErrorMsg.tsx";
import { ProductDetails } from "../components/ProductDetails.tsx";
import { ProductReview } from "../components/ProductReview.tsx";
import { UserReview } from "../islands/UserReview.tsx";
import { getCookies } from "@std/http/cookie";
import { BACKEND_URL } from "../config.ts";

function errorPage(ctx: any) {
  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar loginVisible={!ctx.state.logged} searchField="" />
      <ErrorMsg message="Failed to obtain product" />
    </div>
  );
}

async function getProduct(productId: string) {
  const resp = await fetch(`https://fakestoreapi.com/products/${productId}`);
  return resp.status == 200 ? await resp.json() : null;
}

async function getReview(
  productId: string,
  accessToken: string,
): Promise<any | null> {
  const resp = await fetch(`${BACKEND_URL}/review/${productId}`, {
    credentials: "include",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });

  return resp.status == 200 ? await resp.json() : {};
}

async function getReviews(
  productId: string,
): Promise<Array<any>> {
  const resp = await fetch(`${BACKEND_URL}/reviews/${productId}`);
  return resp.status == 200 ? await resp.json() : [];
}

export default define.page(async function Product(ctx) {
  const accessToken = getCookies(ctx.req.headers).access_token ?? "";
  const productId = ctx.url.searchParams.get("id") ?? "";

  if (productId == null) {
    return errorPage(ctx);
  }

  const product = await getProduct(productId);

  if (product == null) {
    return errorPage(ctx);
  }

  const review = await getReview(productId, accessToken);
  let reviews = await getReviews(productId);

  if ("owner_id" in review) {
    reviews = reviews.filter((r) => r.owner_id != (review.owner_id));
  }

  reviews = reviews.map((r) => (
    <ProductReview rating={r.rating} comment={r.comment}></ProductReview>
  ));

  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar loginVisible={!ctx.state.logged} searchField="" />
      <ProductDetails
        title={product.title}
        price={product.price}
        image={product.image}
        description={product.description}
      >
      </ProductDetails>
      <UserReview
        rating={review.rating ?? 5}
        comment={review.comment ?? ""}
        exist={"owner_id" in review}
        logged={ctx.state.logged}
        product={productId}
        accessToken={accessToken}
      >
      </UserReview>
      <h1 class="container">Reviews ({reviews.length})</h1>
      {reviews}
    </div>
  );
});
