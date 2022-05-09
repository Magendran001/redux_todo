import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Regeister from './components/regeister';
import Login from './components/login';
import { Provider } from 'react-redux';
import Showdata from './components/showdata';
import Counter from './components/counter';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Logout from './components/Logout';
function App() {
  return (
    <div className="App">
      <Header></Header>


      {/* <Showdata />
      <Counter /> */}
      <Routes>
        <Route path='/signin' element={<Regeister />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/logout' element={<Logout />}></Route>

      </Routes>
    </div>
  );
}

export default App;
