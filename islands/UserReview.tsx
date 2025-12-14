import { Context } from "fresh";

export interface UserReviewPros {
  rating: number;
  comment: string;
  exist: boolean;
  logged: boolean;
  product: string;
  accessToken: string;
}

async function postReview(props: UserReviewPros) {
  console.log(document.getElementById("rating")?.value);
  const resp = await fetch(`http://localhost:8000/review`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Authorization": `Bearer ${props.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "product_id": props.product,
      "rating": document.getElementById("rating")?.value,
      "comment": document.getElementById("comment")?.value,
    }),
  });

  console.log("review posted - ", await resp.text());

  if (resp.status != 201) {
    return;
  }

  globalThis.location.reload();
}

async function updateReview(props: UserReviewPros) {
  const resp = await fetch(`http://localhost:8000/review/${props.product}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Authorization": `Bearer ${props.accessToken}`,
      "Content-Type": "application/json",
    },
  });

  console.log("review updated - ", await resp.text());

  if (resp.status != 204) {
    return;
  }

  globalThis.location.reload();
}

async function deleteReview(props: UserReviewPros) {
  const resp = await fetch(`http://localhost:8000/review/${props.product}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Authorization": `Bearer ${props.accessToken}`,
    },
  });

  console.log("review deleted - ", await resp.text());

  if (resp.status != 204) {
    return;
  }

  globalThis.location.reload();
}

export function UserReview(props: UserReviewPros) {
  if (!props.logged) {
    return <div></div>;
  }

  console.log(props.exist);
  if (!props.exist) {
    return (
      <div class="container">
        <article>
          <header>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="5"
              value="5"
            >
            </input>
          </header>
          <textarea id="comment">
          </textarea>
          <footer>
            <div class="grid">
              <div>
                <button type="submit" onClick={() => postReview(props)}>
                  Submit
                </button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    );
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
              <button type="submit" onClick={() => updateReview(props)}>
                Update
              </button>
            </div>
            <div>
              <button
                type="submit"
                class="secondary"
                onClick={() => deleteReview(props)}
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
