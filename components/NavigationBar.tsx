import { VerticalNav } from "@/components/VerticalNav.tsx";
import { HorizontalNav } from "./HorizontalNav.tsx";
import { LoginDialog } from "../islands/LoginDialog.tsx";
import { RegisterDialog } from "../islands/RegisterDialog.tsx";

export interface NavigationBarPros {
  loginVisible: boolean;
  searchField: string;
}

export function NavigationBar(props: NavigationBarPros) {
  return (
    <header class="container-fluid">
      <HorizontalNav
        loginVisible={props.loginVisible}
        searchField={props.searchField}
      />
      <VerticalNav
        loginVisible={props.loginVisible}
        searchField={props.searchField}
      />
      <LoginDialog />
      <RegisterDialog />
    </header>
  );
}
