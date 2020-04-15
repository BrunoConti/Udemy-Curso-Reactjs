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

// class ButtonDanger extends Component {
//   render(){
//     return(<Button borderColor='red' label={this.props.label}></Button>)
//   }
// }

// class ButtonWithLegend extends Component {
//   render(){
//     return(
//       <div>
//         <Button label={this.props.label} borderColor={this.props.borderColor}></Button>
//         <small>{this.props.legend}</small>
//       </div>
//     )
//   }
// }

function Article(props) {
  return(
    <section>
      <h2>{props.title}</h2>
      <p><em>Escrito por {props.author}</em></p>
      <date>{props.date}</date>
      <article>
        {props.children}
      </article>
    </section>
  )
}

class App extends Component {
  
  render(){
  return (
    <div className="App">
     <h3>Stateless Components</h3>
     <Article 
          title='Articulo sobre la prop children' 
          author='Bruno Conti'
          date={new Date().toLocaleDateString()}
          >
            <p>Aca deberia estar escrito el articulo Aca deberia estar escrito el articulo Aca deberia estar escrito el articulo Aca deberia estar escrito el articulo Aca deberia estar escrito el articulo Aca deberia estar escrito el articulo Aca deberia estar escrito el articulo Aca deberia estar escrito el articulo</p>
     </Article> 
    </div>
  );
}
}
export default App;
