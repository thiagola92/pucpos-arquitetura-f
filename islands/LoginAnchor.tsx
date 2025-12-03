export interface LoginAnchorPros {
}

function openModal() {
  const dialog = document.getElementById("loginDialog");

  if (dialog instanceof HTMLDialogElement) {
    dialog.showModal();
  }
}

export function LoginAnchor(props: LoginAnchorPros) {
  return (
    <button type="button" onClick={openModal}>
      Login
    </button>
  );
}
