import { BACKEND_URL } from "../config.ts";

export interface UserReviewPros {
  rating: number;
  comment: string;
  exist: boolean;
  logged: boolean;
  product: string;
  accessToken: string;
}

async function postReview(props: UserReviewPros) {
  const resp = await fetch(`${BACKEND_URL}/review`, {
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

  if (resp.status != 201) {
    return;
  }

  globalThis.location.reload();
}

async function updateReview(props: UserReviewPros) {
  const resp = await fetch(`${BACKEND_URL}/review/${props.product}`, {
    method: "PUT",
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

  if (resp.status != 200) {
    return;
  }

  globalThis.location.reload();
}

async function deleteReview(props: UserReviewPros) {
  const resp = await fetch(`${BACKEND_URL}/review/${props.product}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Authorization": `Bearer ${props.accessToken}`,
    },
  });

  if (resp.status != 200) {
    return;
  }

  globalThis.location.reload();
}

export function UserReview(props: UserReviewPros) {
  if (!props.logged) {
    return <div></div>;
  }

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
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            value={props.rating}
          >
          </input>
        </header>
        <textarea id="comment">
          {props.comment}
        </textarea>
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
