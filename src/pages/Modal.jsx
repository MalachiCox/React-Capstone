import "./Modal.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;


  const copyContent = async () => {
    let text = document.getElementById('quote').innerHTML;
    console.log(text);
    try {
      await navigator.clipboard.writeText(text).value;
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={onClose} className="close">
        <i className="fa-solid fa-xmark"></i>
        </button>
        <button onClick={() => copyContent()} className="copy">
        <i className="fa-solid fa-copy"></i>
        </button>

        <h2 className="quote">{children}</h2>
      </div>
    </div>
  );
}
