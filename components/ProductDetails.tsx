export interface ProductDetailsPros {
  title: string;
  price: number | string;
  image: string;
  description: string;
}

export function ProductDetails(props: ProductDetailsPros) {
  return (
    <article>
      <header>
        {props.title}
      </header>
      <div class="item">
        <h3>R${props.price}</h3>
        <div class="grid">
          <div>
            <img src={props.image} />
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </article>
  );
}
