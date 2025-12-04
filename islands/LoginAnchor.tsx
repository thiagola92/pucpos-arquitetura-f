export interface LoginAnchorPros {
  visible: boolean;
}

function openModal() {
  const dialog = document.getElementById("loginDialog");

  if (dialog instanceof HTMLDialogElement) {
    dialog.showModal();
  }
}

export function LoginAnchor(props: LoginAnchorPros) {
  if (props.visible) {
    return (
      <button type="button" onClick={openModal}>
        Login
      </button>
    );
  }

  return (
    <a href="/logout">
      <button type="button">
        Logout
      </button>
    </a>
  );
}
