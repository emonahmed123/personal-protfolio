import React,{ useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import './ProjectsDeatil.css'
const ProjectsDeatil = () =>{;
  const {id} = useParams();
  const [projects, setProject] = useState([]);
  console.log(projects)
  useEffect(() => {
    fetch(`/Serevice.json`)
      .then((res) => res.json())
      .then((data) =>{
        
        // setLoding(data)
        setProject(data)
      
      });
  }, [id]);
       
      const projectdata = projects.filter(project=> project.id ==id )
      console.log(projectdata)

    
 
  return( 
  
 
        <div>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
  <div class="Card">
    
     <img className="Img"  src={projectdata[0]?.img} alt="" />
  
  
</div>
  <div className="Card">
     <img className="Img"  src={projectdata[0]?.imgtwo} alt="" />
</div >
  <div className="Card ">
  
     <img className="Img" src={projectdata[0]?.imgthere} alt="" />
    
  </div>
</div>

<div className="card w-96 mx-auto bg-base-100 shadow-xl mt-16 mb-16">
  <figure className="px-10 pt-10">
  
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{projectdata[0]?.name}</h2>
    <p className="text-bold" ><span className="text-xl" >Feature:</span>{projectdata[0]?.more}</p>
    <p className="text-bold" ><span className="text-xl">Tecnologe:</span>{projectdata[0]?.Tecnologe}</p>
     
  </div>
</div>


</div>



    );
 };

export default ProjectsDeatil;