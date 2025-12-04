import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";

export default define.page(function About(ctx) {
  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar loginVisible={!ctx.state.logged} />
      <main class="container about">
        <h1>Fresh Store</h1>
        <p>
          Welcome!
        </p>
        <p>
          Our mission is to give <b>you</b>{" "}
          a great experience by bringing products safely to your house.
        </p>
        <p>
          Feel free to contact us through{" "}
          <a href="mailto:">cosumterservice@fresh.com</a>
        </p>
      </main>
    </div>
  );
});
