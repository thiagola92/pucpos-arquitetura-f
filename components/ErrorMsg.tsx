export interface ErrorMsgPros {
  message: string;
}

export function ErrorMsg(props: ErrorMsgPros) {
  return (
    <div class="container-fluid">
      <h1>Error</h1>
      <p>
        {props.message}
      </p>
    </div>
  );
}
