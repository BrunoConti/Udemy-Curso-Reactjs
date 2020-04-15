import React, { Component } from 'react';

import EjemploDeComponenteWillUnmount from './sections/life-cycle/ejemploComponentWillUnmount';


class Button extends Component {
  render(){
    return(
    <button style={{ borderColor: this.props.borderColor, display: 'block'}}>{this.props.label}</button>
    )
  }
}

Button.defaultProps = { borderColor: '#09f' }

class ButtonDanger extends Component {
  render(){
    return(<Button borderColor='red' label={this.props.label}></Button>)
  }
}

class ButtonWithLegend extends Component {
  render(){
    return(
      <div>
        <Button label={this.props.label} borderColor={this.props.borderColor}></Button>
        <small>{this.props.legend}</small>
      </div>
    )
  }
}

class App extends Component {
  
  render(){
  return (
    <div className="App">
      <EjemploDeComponenteWillUnmount/>
    <br></br>
      <Button label= 'Clickea aqui!'></Button>
    <br></br>
      <ButtonDanger label='Cuidado !!!'></ButtonDanger>
    <br></br>
      <ButtonWithLegend label='Boton con leyenda' borderColor='black' legend='Leyenda'></ButtonWithLegend>
    </div>
  );
}
}
export default App;
