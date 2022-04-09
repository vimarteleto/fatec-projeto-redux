import Card from "../Card/Card.jsx"
import { connect } from "react-redux"


function Sorteio(props) {
    const { num } = props
    const texto = `Sorteio de Números de 0 à ${num}`
    const random = parseInt(Math.random() * num)

    return (
        <Card title={texto} purple>
            <div>
                <span>
                    <span>Resultado: {random}</span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(Sorteio)