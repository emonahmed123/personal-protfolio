import './App.css';
import Home from './Pages/Home/Home';
import { Route,  Routes,} from 'react-router-dom';
import Header from './Pages/Shared/Header';


function App() {
  return (
    <div>
         <Header></Header>
      
      <Routes>
        <Route path='/'element={<Home></Home>} ></Route>
        <Route path='/home'element={<Home></Home>} ></Route>

      </Routes>

    </div>
  );
}

export default App;
