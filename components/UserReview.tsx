export interface UserReviewPros {
  rating: number;
  comment: string;
}

export function UserReview(props: UserReviewPros) {
  return (
    <article>
      <header>
        {props.rating}
      </header>
      {props.comment}
    </article>
  );
}
