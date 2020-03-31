import React, {Component} from 'react'

class ComponenteADesmontar extends Component {
    state = {windowWidth: 0}

    _updateStateWindowWith = () => {
        this.setState({windowWidth: document.body.clientWidth})
    }

    componentDidMount () {
        this._updateStateWindowWith()
        window.addEventListener('resize', this._updateStateWindowWith)
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this._updateStateWindowWith)
    }

    render () {
        return (
            <div>
                <p>Ancho de pagina: {this.state.windowWidth}</p>
            </div>
        )
    }
}

class EjemploDeComponenteWillUnmount extends Component {
    state = {mostrarComponente: true}

    render () {
        if (this.state.mostrarComponente){
            return (
                <div>
                    <h4>Ciclo de desmontaje: componentWillUnmount</h4>
                    <ComponenteADesmontar></ComponenteADesmontar>
                    <button onClick={() => this.setState({mostrarComponente: false})}>Desmontar Componente !</button>
                </div>
            )
        }

        return (<p>Componente Desmontado</p>)
    }
}

export default EjemploDeComponenteWillUnmount