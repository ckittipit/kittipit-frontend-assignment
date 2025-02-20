import Button from './button'

function Column({title, items, onClickItem}) {
    return (
        <div className="column">
            <h2>{title}</h2>
            {items.map(item => (
                <Button key={item.name} item={item} onClick={() => onClickItem(item)}/>
            ))}
        </div>
    )
}

export default Column