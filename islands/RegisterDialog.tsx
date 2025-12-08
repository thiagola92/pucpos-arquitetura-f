export interface RegisterDialogPros {
}

function closeModal() {
  const dialog = document.getElementById("registerDialog");

  if (dialog instanceof HTMLDialogElement) {
    dialog.close();
  }
}

export function RegisterDialog(props: RegisterDialogPros) {
  return (
    <dialog id="registerDialog">
      <article>
        <header>
          Create account
          <button
            type="submit"
            aria-label="Close"
            rel="prev"
            onClick={closeModal}
          >
          </button>
        </header>
        <form action="register" method="post">
          <label>
            Email
            {/* Remove value after testing as much as possible */}
            <input type="email" name="email" value="myemail@example.com" />
          </label>
          <label>
            Username
            {/* Remove value after testing as much as possible */}
            <input type="text" name="username" value="username" />
          </label>
          <label>
            Password
            {/* Remove value after testing as much as possible */}
            <input type="password" name="password" value="password" />
          </label>
          <button type="submit">Register</button>
        </form>
      </article>
    </dialog>
  );
}
