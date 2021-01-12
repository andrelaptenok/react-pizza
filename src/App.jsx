import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
import { connect } from 'react-redux';

// export const App = () => {
//   const [pizzas, setPizzas] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/db.json')
//       .then((resp) => resp.json())
//       .then((json) => {
//         setPizzas(json.pizzas);
//       });
//   });

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/" render={() => <Home items={pizzas} />} exact />
//         <Route path="/cart" component={Cart} exact />
//       </div>
//     </div>
//   );
// };

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
