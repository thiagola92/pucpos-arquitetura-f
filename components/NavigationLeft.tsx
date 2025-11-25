export interface NavigationLeftPros {
}

export function NavigationLeft(props: NavigationLeftPros) {
  return (
    <ul class="columns-2">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  );
}
