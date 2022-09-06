import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Route,  Routes,} from 'react-router-dom';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import ProjectsDeatil from './Pages/Projects/ProjectsDeatil';
import Blog from './Pages/Blog/Blog';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function App() {
  
 const[loading,setLoading]=useState(false);
  
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)

      },8000)  

    },[])
 
 
  return (
    <div className=' App'>

       {
        loading ? (<ClimbingBoxLoader
        color={"#ff014f"} className="flex justify-center min-h-screen items-center mx-auto w-full clee " loading={loading} size={20} />):(
        <>
          
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
       </>
      
    )}
       
    </div>
  );
}

export default App;
