import Card from "../Card/Card.jsx"
import { connect } from "react-redux"


function Propriedades(props) {
    const { num } = props
    return (
        <Card title={props.titulo} {...props} yellow>
            <div>
                <span> {props.aluno} sua nota é: {num} </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(Propriedades)