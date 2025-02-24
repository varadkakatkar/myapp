const Title = () => {
    console.log('rendering title');
    return (
        <div style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#2c3e50',
            textAlign: 'center',
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
            useCallback Hook
        </div>
    )
}
export default Title;