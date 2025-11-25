import { SearchBar } from "@/components/SearchBar.tsx";
import { NavigationLeft } from "@/components/NavigationLeft.tsx";
import { NavigationRight } from "@/components/NavigationRight.tsx";

export interface NavigationBarPros {
}

export function NavigationBar(props: NavigationBarPros) {
  return (
    <nav>
      <ul class="columns-3">
        <li class="justify-self-start border">
          <NavigationLeft />
        </li>
        <li class="border justify-self-center">
          <SearchBar />
        </li>
        <li class="border justify-self-end">
          <NavigationRight />
        </li>
      </ul>
    </nav>
  );
}
