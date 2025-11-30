export interface HorizontalNavPros {
}

export function HorizontalNav(props: HorizontalNavPros) {
  return (
    <nav class="nav-horizontal">
      {/* Left */}
      <ul class="container-fluid">
        <li>
          <a href="/">
            <img src="logo.svg" width="50" alt="logo" />
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
          <search>
            <form action="/search" role="search">
              <input type="search" name="q" />
              <input type="submit" value="Search" />
            </form>
          </search>
        </li>
      </ul>
      {/* Right */}
      <ul class="container-fluid nav-right">
        <li>
          <a href="login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
