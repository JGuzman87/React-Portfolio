// import { useRouterError } from 'react-router-dom';

export default function ErrorPage() {
    // const error = useRouterError();
    console.log(error);

    return (
      <div id="error-page">
        <>Oops!</>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statutText || error.message}</i>
        </p>
      </div>
    );
}
