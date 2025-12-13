export interface ProductReviewPros {
  rating: number;
  comment: string;
}

export function ProductReview(props: ProductReviewPros) {
  return (
    <div class="container">
      <article>
        <header>
          ⭐ {props.rating}
        </header>
        {props.comment}
      </article>
    </div>
  );
}
