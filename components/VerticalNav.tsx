export interface VerticalNavPros {
}

export function VerticalNav(props: VerticalNavPros) {
  return (
    <div>
      {/* Top */}
      <nav class="nav-vertical">
        <ul>
          <li>
            <a href="/">
              <img src="logo.svg" width="50" alt="logo" />
            </a>
          </li>
        </ul>
        <ul>
          <li class="nav-right">
            <img src="bars.svg" width="50" alt="logo" />
          </li>
        </ul>
      </nav>
      {/* Bottom */}
      <aside class="nav-vertical">
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
    </div>
  );
}
