import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Route,  Routes,} from 'react-router-dom';
 import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import ProjectsDeatil from './Pages/Projects/ProjectsDeatil';
import Blog from './Pages/Blog/Blog';



function App() {
  return (
    <div className='scroll-smooth App'>
         <Header></Header>
 
      <Routes>
        <Route path='/'element={<Home></Home>} ></Route>
        <Route path='/home'element={<Home></Home>} ></Route>
        <Route path='/home#contact'element={<Home></Home>} ></Route>
        <Route path='/home#about'element={<Home></Home>} ></Route>
        <Route path='/home#projects'element={<Home></Home>} ></Route>
        <Route path='/project/:id'element={<ProjectsDeatil></ProjectsDeatil>} ></Route>
         <Route path='/bolg'  element={<Blog></Blog>}></Route>
     
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
