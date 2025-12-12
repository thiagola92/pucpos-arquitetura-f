import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { NavigationBar } from "@/components/NavigationBar.tsx";
import { ErrorMsg } from "../components/ErrorMsg.tsx";

export default define.page(function Error(ctx) {
  const info = ctx.url.searchParams.get("info");
  const json = JSON.parse(info ?? "{}");

  return (
    <div>
      <Head>
        <title>Fresh Store</title>
      </Head>
      <NavigationBar loginVisible={!ctx.state.logged} searchField="" />
      <ErrorMsg message={json.detail ?? ""} />
    </div>
  );
});
