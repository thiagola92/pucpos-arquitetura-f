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
          Access your account
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
            E-mail
            {/* Remove value after testing as much as possible */}
            <input type="email" name="email" value="email@example.com" />
          </label>
          <label>
            Password
            {/* Remove value after testing as much as possible */}
            <input type="password" name="password" value="password" />
          </label>
          <button type="submit">Login</button>
        </form>
        <blockquote>
          This is just an example, you can insert anything to login.
          <footer>
            <cite>— Dev Team</cite>
          </footer>
        </blockquote>
      </article>
    </dialog>
  );
}
