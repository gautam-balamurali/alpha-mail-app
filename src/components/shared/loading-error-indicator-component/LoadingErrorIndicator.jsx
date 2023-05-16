/* eslint-disable */

const LoadingErrorIndicator = ({
  isLoading,
  loaderMessage = "Loading...",
  errorState,
}) => {
  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader-wrapper">
          <img
            src="https://media.giphy.com/media/pNs1u7jt164td9tquE/giphy.gif"
            alt={loaderMessage}
            className="loader-content"
          ></img>
        </div>
      </div>
    );
  }

  if (errorState) {
    return (
      <div className="error-state">
        <h1>{errorState?.status}</h1>
        <p>{errorState?.message}</p>
      </div>
    );
  }

  return null;
};

export default LoadingErrorIndicator;
