/**
 * A simple utility component to conditionally show children.
 */
const Show = ({
  when,
  fallback,
  children
}) => {
  return when ? children : fallback;
};

export { Show as S };
