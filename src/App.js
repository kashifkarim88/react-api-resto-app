import { BrowserRouter,Route,Routes} from 'react-router-dom'; 
import './App.css';
import Home from './components/Home';
import ResturantCreate from './components/ResturantCreate';
import ResturantUpdate from './components/ResturantUpdate';
import ResturantList from './components/ResturantList';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createResturant' element={<Protected Component={ResturantCreate}/>}/>
        <Route path='/updateResturant/:id' element={<ResturantUpdate/>}/>
        <Route path='/resturantList' element={<Protected Component= {ResturantList}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
