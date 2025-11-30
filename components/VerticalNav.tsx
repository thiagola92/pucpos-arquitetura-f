export interface VerticalNavPros {
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
              <a href="login">
                Login
              </a>
            </li>
            <li>
              <search>
                <form action="/search" role="search">
                  <input type="search" name="q" />
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
