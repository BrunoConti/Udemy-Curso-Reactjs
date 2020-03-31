import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    panda: 'https://lh3.googleusercontent.com/kpyFwGZQkSF7SZWYLeEHsEItBaAur4lvW9ECpeVNpS3weKhNEFRvwihtTFHHZAljVshA=s137',
    cat: 'https://elpais.com/elpais/imagenes/2018/08/30/mundo_animal/1535610951_523915_1535611384_noticia_grande.jpg',
    dolphin: 'https://animalesmascotas.com/wp-content/uploads/2009/02/delfin.jpg'
  }
  
const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps (nextProps) {
        console.clear()
        console.log('1. componentWillReceiveProps')
        console.log(nextProps)
        if  (this.props.animal !== nextProps.animal){
            console.log('setState?')
            this.setState({src: ANIMAL_IMAGES[nextProps.animal] })
        }
    }

    shouldComponentUpdate (nextProps) {
        console.log('2. shouldComponentUdate')
        console.log('anterior:', this.props.animal)
        console.log('nuevo:', nextProps.animal)
        return this.props.animal !== nextProps.animal
    }

    componentWillUpdate (nextProps, nextState){
        console.log('3. componentWillUpdate', nextProps, nextState);
        const img = document.querySelector('img')
        console.log('from img element', {alt: img.alt});
        img.animate([{
            filter: 'blur(0px)'
        },{
            filter: 'blur(2px)'
        }],{
            duration: 500,
            easing: 'ease'
        })
                
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
    animal: PropTypes.oneOf(ANIMALS)
}

class EjemploCicloActualizacion extends Component {
    state = { animal: 'panda' }
    
    _renderAnimalButton = (animal) => {
        return (        
            <button
            // disabled={this.state.animal === animal} 
            key={animal} 
            onClick={() => this.setState({ animal })}>
                {animal}
            </button>)
    }

    
    render () {
        return (
            <div>
                <h4>Ciclo de actualizacion, Ejemplo componentWillReceiveProps</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>
            </div>
        )
    }
}


export default EjemploCicloActualizacion