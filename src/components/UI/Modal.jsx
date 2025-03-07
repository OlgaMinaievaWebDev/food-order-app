import { createPortal } from "react-dom"

function Modal({children}) {
 return createPortal (
  <dialog>
   Hi
  </dialog>
 , document.getElementById('modal'))
}

export default Modal
