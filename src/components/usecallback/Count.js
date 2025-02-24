const Count = ({text,count}) => {
    console.log('text ',text );
    console.log('count ',count );
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default Count;