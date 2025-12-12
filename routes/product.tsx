import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";
import { ErrorMsg } from "../components/ErrorMsg.tsx";
import { ProductDetails } from "../components/ProductDetails.tsx";

export default define.page(async function Product(ctx) {
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

  // const resp = await fetch(`https://fakestoreapi.com/products/${productId}`);

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

  // const product = await resp.json();
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

  console.log(product);

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
    </div>
  );
});
