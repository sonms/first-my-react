function LoginButton({ children, onClick, type = "button", disabled }) {
    return (
      <button 
        type={type} 
        onClick={onClick} 
        disabled={disabled}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {children}
      </button>
    );
  }
  
  export default LoginButton;