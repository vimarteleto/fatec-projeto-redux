import './Card.scss'


export default props => {

    const cor = getColor(props)

    return (
        <div className={`Card ${cor}`}>
            <div className='Header'>
                <span className='Title'>{props.title}</span>
            </div>

            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}

function getColor(props) {
    if (props.red) return "Red"
    if (props.green) return "Green"
    if (props.blue) return "Blue"
    if (props.purple) return "Purple"
    if (props.yellow) return "Yellow"
    return "Black"
}