import { VerticalNav } from "@/components/VerticalNav.tsx";
import { HorizontalNav } from "./HorizontalNav.tsx";
import { LoginDialog } from "../islands/LoginDialog.tsx";

export interface NavigationBarPros {
}

export function NavigationBar(props: NavigationBarPros) {
  return (
    <header class="container-fluid">
      <HorizontalNav />
      <VerticalNav />
      <LoginDialog />
    </header>
  );
}
