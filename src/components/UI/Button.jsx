function Button({ children, textOnly, className, ...props }) {
 const cssClasses = textOnly ? `text-button ${className}` : 'button'
 return (
  <button>
   {children}
  </button>
 )
}

export default Button
