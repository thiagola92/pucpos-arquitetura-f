import { AuthAnchor } from "../islands/AuthAnchor.tsx";

export interface VerticalNavPros {
  loginVisible: boolean;
  searchField: string;
}

export function VerticalNav(props: VerticalNavPros) {
  return (
    <details class="nav-vertical">
      <summary>
        <a href="/">
          <img src="logo.svg" alt="logo" />
        </a>
      </summary>
      <aside>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <AuthAnchor visible={props.loginVisible} />
            </li>
            <li>
              <search>
                <form action="/search" role="search">
                  <input type="search" name="q" value={props.searchField} />
                  <input type="submit" value="Search" />
                </form>
              </search>
            </li>
          </ul>
        </nav>
      </aside>
    </details>
  );
}
