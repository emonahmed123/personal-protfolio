
 import React,{ useEffect, useState } from "react";
import {useParams } from "react-router-dom";

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
       
      const projectdata = projects.filter(project=> project.id == id )
      console.log(projectdata)

    
 
  return( 
  
 
        <div>

  <div class="card w-50 mt-20 mb-20 mx-auto">
    <div className='flex mx-auto mt-10 rounded' >
    <figure><img className="w-48" src={projectdata[0]?.img}alt="car!"/></figure>
    <figure><img  className="w-48"  src={projectdata[0]?.imgthere}alt="car!"/></figure>
    <figure><img  className="w-48" src={projectdata[0]?.imgtwo} alt="car!"/></figure>
    </div>
  
</div>

<div class="card w-96 mx-auto bg-base-100 shadow-xl mb-16">
  <figure class="px-10 pt-10">
  
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{projectdata[0]?.name}</h2>
    <p className="text-bold" ><span className="text-xl" >Feature:</span>{projectdata[0]?.more}</p>
    <p className="text-bold" ><span className="text-xl" >Tecnologe:</span>{projectdata[0]?.Tecnologe}</p>
     
  </div>
</div>


</div>



    );
 };

export default ProjectsDeatil;