export interface AuthAnchorPros {
  visible: boolean;
}

function openRegister() {
  const dialog = document.getElementById("registerDialog");

  if (dialog instanceof HTMLDialogElement) {
    dialog.showModal();
  }
}

function openLogin() {
  const dialog = document.getElementById("loginDialog");

  if (dialog instanceof HTMLDialogElement) {
    dialog.showModal();
  }
}

export function AuthAnchor(props: AuthAnchorPros) {
  if (props.visible) {
    return (
      <nav>
        <ul>
          <li>
            <button type="button" onClick={openRegister}>
              Register
            </button>
          </li>
          <li>
            <button type="button" onClick={openLogin}>
              Login
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <a href="/logout">
            <button type="button">
              Logout
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
