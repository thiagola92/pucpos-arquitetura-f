import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";
import { ErrorMsg } from "../components/ErrorMsg.tsx";

function errorPage(ctx: any) {
  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar loginVisible={!ctx.state.logged} searchField="" />
      <ErrorMsg message="Failed to obtain products" />
    </div>
  );
}

async function getProducts(query: string): Promise<Array<any> | null> {
  const resp = await fetch("https://fakestoreapi.com/products");

  if (resp.status != 200) {
    return null;
  }

  let products: Array<any> = await resp.json();
  products = products.filter((p) =>
    p.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
  );
  products = products.map((p) => {
    return (
      <article>
        <header>
          <a href={`/product?id=${p.id}`}>{p.title}</a>
        </header>
        <div>
          <img src={p.image} />
          <p>{p.description}</p>
        </div>
      </article>
    );
  });

  return products;
}

export default define.page(async function Search(ctx) {
  const query = ctx.url.searchParams.get("q") ?? "";
  const products = await getProducts(query);

  if (products == null) {
    return errorPage(ctx);
  }

  if (products.length == 0) {
    products.push(
      <h1>No products found 😢</h1>,
    );
  }

  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar loginVisible={!ctx.state.logged} searchField={query} />
      <div class="container items">
        {products}
      </div>
    </div>
  );
});
