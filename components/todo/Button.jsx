export default function Button({ onClick, children }) {
  console.debug('render Button');
  return <button onClick={onClick}>{children}</button>
}