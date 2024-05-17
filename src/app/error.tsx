"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1 className="h1">{error?.message}</h1>
      <button
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
