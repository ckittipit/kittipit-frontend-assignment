function Button({item, onClick}) {
    return (
        <button onClick={onClick} style={{margin: "5px"}}>{item.name}</button>
    )
}

export default Button