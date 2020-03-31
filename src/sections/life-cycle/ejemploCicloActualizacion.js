import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    cat: 'https://elpais.com/elpais/imagenes/2018/08/30/mundo_animal/1535610951_523915_1535611384_noticia_grande.jpg',
    dolphin: 'https://animalesmascotas.com/wp-content/uploads/2009/02/delfin.jpg',
    panda: 'https://lh3.googleusercontent.com/kpyFwGZQkSF7SZWYLeEHsEItBaAur4lvW9ECpeVNpS3weKhNEFRvwihtTFHHZAljVshA=s137'
  }
  
class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps')
        console.log(nextProps)
        if  (this.props.animal !== nextProps.animal){
            console.log('setState?')
            this.setState({src: ANIMAL_IMAGES[nextProps.animal] })
        }
    }

    render () {
        console.log('-> render')
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img alt={this.props.animal} src={this.state.src} width='250' />
            </div>
        )
    }
}

AnimalImage.propType = {
    animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
}

AnimalImage.defaultProps = {
    animal: 'panda'
}

class EjemploCicloActualizacion extends Component {
    state = { animal: 'panda' }
    render () {
        return (
            <div>
                <h4>Ciclo de actualizacion, Ejemplo componentWillReceiveProps</h4>
                <button onClick={() => this.setState({ animal: 'panda' })}>
                    Panda
                </button>
                <button onClick={() => this.setState({ animal: 'cat' })}>
                    Cat
                </button>
                <button onClick={() => this.setState({ animal: 'dolphin' })}>
                    Dolphin
                </button>
                <AnimalImage animal={this.state.animal}/>
            </div>
        )
    }
}

export default EjemploCicloActualizacion