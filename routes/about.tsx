import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";

export default define.page(function About(ctx) {
  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar />
    </div>
  );
});
