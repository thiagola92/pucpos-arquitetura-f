export interface SearchBarPros {
}

export function SearchBar(props: SearchBarPros) {
  return (
    <search class="border">
      <input placeholder="Search..." />
    </search>
  );
}
