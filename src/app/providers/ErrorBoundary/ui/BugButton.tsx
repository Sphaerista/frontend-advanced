import { Button } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";

// component for testing ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError((prev) => !prev);
  };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={onThrow}>throw error</Button>;
};
