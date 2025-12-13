export interface UserReviewPros {
  rating: number;
  comment: string;
  exist: boolean;
  logged: boolean;
  product: string;
}

async function postReview(product: string) {
}

async function updateReview(product: string) {
}

async function deleteReview(product: string) {
}

export function UserReview(props: UserReviewPros) {
  if (!props.logged) {
    return <div></div>;
  }

  if (!props.exist) {
    <div class="container">
      <article>
        <header>
          <input type="number" name="rating" min="0" max="5"></input>
        </header>
        <textarea>
        </textarea>
        <footer>
          <div class="grid">
            <div>
              <button type="submit" onClick={() => postReview(props.product)}>
                Submit
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>;
  }

  return (
    <div class="container">
      <article>
        <header>
          {props.rating}
        </header>
        <p>
          {props.comment}
        </p>
        <footer>
          <div class="grid">
            <div>
              <button type="submit" onClick={() => updateReview(props.product)}>
                Update
              </button>
            </div>
            <div>
              <button
                type="submit"
                class="secondary"
                onClick={() => deleteReview(props.product)}
              >
                Delete
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
