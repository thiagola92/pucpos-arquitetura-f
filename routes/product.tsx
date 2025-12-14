import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";
import { ErrorMsg } from "../components/ErrorMsg.tsx";
import { ProductDetails } from "../components/ProductDetails.tsx";
import { ProductReview } from "../components/ProductReview.tsx";
import { UserReview } from "../islands/UserReview.tsx";

export default define.page(async function Product(ctx) {
  let resp;

  const productId = ctx.url.searchParams.get("id");

  if (productId == null) {
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

  // resp = await fetch(`https://fakestoreapi.com/products/${productId}`);

  // if (resp.status != 200) {
  //   return (
  //     <div>
  //       <Head>
  //         <title>Fresh Store</title>
  //       </Head>
  //       <NavigationBar loginVisible={!ctx.state.logged} searchField="" />
  //       <ErrorMsg message="Failed to obtain product" />
  //     </div>
  //   );
  // }

  // const product = await productResp.json();
  const product = {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: { rate: 3.3, count: 203 },
  };

  resp = await fetch(`http://localhost:8000/review/${productId}`);
  const exist = resp.status == 200;
  const review = resp.status == 200 ? await resp.json() : {};

  resp = await fetch(`http://localhost:8000/reviews/${productId}`);
  const reviews: Array<any> = resp.status == 200 ? await resp.json() : [];

  const filtered: Array<any> = reviews.filter((r) =>
    r.owner_id != (review.owner_id ?? -1)
  );

  const mapped: Array<any> = filtered.map((r) => (
    <ProductReview rating={r.rating} comment={r.comment}></ProductReview>
  ));

  console.log(reviews);

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
        rating={review.ratting ?? 5}
        comment={review.comment ?? ""}
        exist={exist}
        logged={ctx.state.logged}
        product={productId}
      >
      </UserReview>
      <h1 class="container">Reviews</h1>
      {mapped}
    </div>
  );
});
