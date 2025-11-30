import { VerticalNav } from "@/components/VerticalNav.tsx";
import { HorizontalNav } from "./HorizontalNav.tsx";

export interface NavigationBarPros {
}

export function NavigationBar(props: NavigationBarPros) {
  return (
    <div class="container-fluid">
      <HorizontalNav />
      <VerticalNav />
    </div>
  );
}
