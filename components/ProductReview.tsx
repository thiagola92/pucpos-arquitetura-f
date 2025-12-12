export interface ProductReviewPros {
  rating: number;
  comment: string;
}

export function ProductReview(props: ProductReviewPros) {
  return (
    <article>
      <header>
        {props.rating}
      </header>
      {props.comment}
    </article>
  );
}
