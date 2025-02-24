const Button = ({ handleClieck, children }) => {
    return (
        <div>
            <button onClick={handleClieck}> {children}</button>
            <br />
        </div>

    )
}

export default Button;