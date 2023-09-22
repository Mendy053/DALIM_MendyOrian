export default function Button(props) {
  return (
    <button className="btn" onClick={props.onGetData}>
      Get {props.children}
    </button>
  );
}
