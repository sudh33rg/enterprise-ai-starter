import { useState, useEffect, useRef } from 'react';

function useBodyRef() {
  const bodyRef = useRef(null);
  useEffect(() => {
    // This will only run on the client side
    bodyRef.current = document.body;
  }, []);
  return bodyRef;
}
function useBody() {
  const [body, setBody] = useState(null);
  useEffect(() => {
    setBody(document.body);
  }, []);
  return body;
}

export { useBody as a, useBodyRef as u };
