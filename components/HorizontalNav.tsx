import { LoginAnchor } from "../islands/LoginAnchor.tsx";

export interface HorizontalNavPros {
  loginVisible: boolean;
}

export function HorizontalNav(props: HorizontalNavPros) {
  return (
    <nav class="nav-horizontal">
      {/* Left */}
      <ul>
        <li>
          <a href="/">
            <img src="logo.svg" alt="logo" />
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      {/* Middle */}
      <ul class="container-fluid">
        <li class="container-fluid">
          <search class="container-fluid">
            <form action="/search" role="search">
              <input type="search" name="q" />
              <input type="submit" value="Search" />
            </form>
          </search>
        </li>
      </ul>
      {/* Right */}
      <ul>
        <li>
          <LoginAnchor visible={props.loginVisible} />
        </li>
      </ul>
    </nav>
  );
}
