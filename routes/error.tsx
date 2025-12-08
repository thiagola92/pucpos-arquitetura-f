import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";
import { ErrorMsg } from "../components/ErrorMsg.tsx";

export default define.page(function Error(ctx) {
  const details = JSON.parse(ctx.params.details);

  console.log(details);

  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar loginVisible={!ctx.state.logged} searchField="" />
      <ErrorMsg message={details.details} />
    </div>
  );
});
