import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";
import { ErrorMsg } from "../components/ErrorMsg.tsx";

export default define.page(async function Search(ctx) {
  const query = ctx.url.searchParams.get("q") ?? "";
  // const resp = await fetch("https://fakestoreapi.com/products");

  // if (resp.status != 200) {
  //   const details = await resp.json();

  //   return (
  //     <div>
  //       <Head>
  //         <title>Fresh Store</title>
  //       </Head>
  //       <NavigationBar loginVisible={!ctx.state.logged} searchField="" />
  //       <ErrorMsg message={details.details} />
  //     </div>
  //   );
  // }

  // const products = await resp.json();

  console.log(query);

  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar loginVisible={!ctx.state.logged} searchField={query} />
    </div>
  );
});
