import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";

export default define.page(function Home(ctx) {
  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar loginVisible={!ctx.state.logged} />
      <main class="container">
        <h1>Every type of product, just search!</h1>
        <div class="grid home">
          <img src="home/diamond.svg" style="max-width:10rem"></img>
          <img src="home/ring.svg" style="max-width:10rem"></img>
          <img src="home/shirt.svg" style="max-width:10rem"></img>
          <img src="home/keyboard.svg" style="max-width:10rem"></img>
          <img src="home/pencil.svg" style="max-width:10rem"></img>
          <img src="home/tape.svg" style="max-width:10rem"></img>
        </div>
      </main>
    </div>
  );
});
