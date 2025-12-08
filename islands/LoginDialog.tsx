export interface LoginDialogPros {
}

function closeModal() {
  const dialog = document.getElementById("loginDialog");

  if (dialog instanceof HTMLDialogElement) {
    dialog.close();
  }
}

export function LoginDialog(props: LoginDialogPros) {
  return (
    <dialog id="loginDialog">
      <article>
        <header>
          Access account
          <button
            type="submit"
            aria-label="Close"
            rel="prev"
            onClick={closeModal}
          >
          </button>
        </header>
        <form action="login" method="post">
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
          <button type="submit">Login</button>
        </form>
      </article>
    </dialog>
  );
}
