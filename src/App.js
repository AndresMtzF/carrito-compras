import { Component } from 'react';
//Guardar todos los componentes personalizados en un folder 'components' para mantener un orden
import Productos from './components/Productos';
import Layout from './components/Layout';

class App extends Component {
  
  state = {
    productos: [
      { name: 'Tomate', price: 25, img: '/productos/tomatoe.png' },
      { name: 'Cebolla', price: 30, img: '/productos/onion.png' },
      { name: 'Lechuga', price: 35, img: '/productos/lettuce.png' }
    ]    
  }

  render(){
    return (
      <div>
        <Layout>
          <Productos
            agregarAlCarro = { () => console.log('AgregarAlCarro')}
            productos={this.state.productos}
          />
        </Layout>        
      </div>
    )
  }
}

export default App;
