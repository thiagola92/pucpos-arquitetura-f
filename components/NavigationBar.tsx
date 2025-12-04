import { VerticalNav } from "@/components/VerticalNav.tsx";
import { HorizontalNav } from "./HorizontalNav.tsx";
import { LoginDialog } from "../islands/LoginDialog.tsx";

export interface NavigationBarPros {
  loginVisible: boolean;
}

export function NavigationBar(props: NavigationBarPros) {
  return (
    <header class="container-fluid">
      <HorizontalNav loginVisible={props.loginVisible} />
      <VerticalNav loginVisible={props.loginVisible} />
      <LoginDialog />
    </header>
  );
}
