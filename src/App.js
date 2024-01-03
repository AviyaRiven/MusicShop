import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Shop from './project/Shop';
import CartDetails from './project/cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoToPayment from './project/GoToPayment';
import NavBar from './project/navbar';
import ABOUT from './project/about';
import Try from './project/try/try';
import Login from './project/try/Login';
import Map from './project/try/maps';


function App() {
  return (
    <>
    

    <div className="App">
      <header className="App-header">

        <Provider store={store}>
          <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            <Route exact path="/" element={<Shop />}/>
            <Route exact path="/cart" element={<CartDetails />}/>
            <Route exact path="/payment" element={<GoToPayment />}/>
            <Route exact path="/about" element={<ABOUT />}/>

            
          </Routes>  
          </BrowserRouter>
        </Provider>
        

      {/* <Try></Try> */}
      {/* <Login></Login> */}
      {/* <Map></Map> */}
      </header>
    </div></>
  );
}

export default App;
