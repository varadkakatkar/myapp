const Count = ({text,count}) => {
    console.log('text ',text );
    console.log('count ',count );
    return (
        <div style={{
            fontSize: '1.2rem',
            fontWeight: '500',
            color: '#333',
            padding: '10px 20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            minWidth: '200px',
            textAlign: 'center'
        }}>
            {text}: <span style={{color: '#2196F3', fontWeight: '600'}}>{count}</span>
        </div>
    )
}

export default Count;