const Button = ({ children, onButtonClick, disabled }) => {
    return (
        <button onClick={onButtonClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button