const Button = ({ handleClieck, children, style }) => {
    console.log('Button children ',children)
    return (

        <button 
            onClick={handleClieck}
            style={{
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#fff',
                backgroundColor: style?.backgroundColor || '#2196F3',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                },
                ...style
            }}
        >
            {children}
        </button>
    )
}

export default Button;