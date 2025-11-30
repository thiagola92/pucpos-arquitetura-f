export interface NavigationBarPros {
}

export function NavigationBar(props: NavigationBarPros) {
  return (
    <div class="container-fluid">
      {/* Navigation Horizontal */}
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
          <li>
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
      {/* Navigation Vertical */}
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
      <aside class="nav-vertical" hidden>
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
