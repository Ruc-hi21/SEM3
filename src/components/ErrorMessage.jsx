function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-box">
      <p>⚠️ {message}</p>
      <button onClick={onRetry}>Try again</button>
    </div>
  )
}

export default ErrorMessage
