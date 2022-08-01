import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProjectsDeatil.css'
import car from '../../Images/New folder/Carmu.png'
import bike from '../../Images/New folder/Bikeware.png'
import photo from '../../Images/New folder/Photograp.png'
import best from '../../Images/New folder/pandaEco.png'
const ProjectsDeatil = () => {
  ;
  const { id } = useParams();
  const [projects, setProject] = useState({});
  const data = [{
    id: 1,
    name: " Car-parts-maunfactureing",
    img: ["https://i.ibb.co/wQqGGbJ/Screenshot.png", "https://i.ibb.co/hR7JPqt/Screenshot-2022-06-10-134520.png", "https://i.ibb.co/0G0cnyG/Screenshot-2022-06-10-135027.png",],
    dis: "This is maunfactureing website fully responsive. A non-sign upped user gets to see the basics of our site and need Login To do more activities.",
    more: "This is maunfactureing website fully responsive. A non-sign upped user gets to see the basics of our site and need Login To do more activities.An user can buy products Then he goes to DashBoard and sees his purchased products and cancle her order.and implemented admin role.He add products and also deleting products  ",
    Image:car,
    live: "https://car-parts-manufacturer-8d75b.web.app/",
    server: "https://github.com/emonahmed123/car-manufacture-server-side",
    client: "https://github.com/emonahmed123/car-manufactureing-client-side",
    Tecnologe: ["Reactjs", "ReactRouter", "Tailwind", "CSS", "DaisyUI", "Firebase", "Firebase-Authentication hooks", "React hookform", "React-toasty", "React-Query", "MongoDB", "NodeJs", "ExpressJs", "Cors", "Dotenv", "Jsonwebtoken"],
  },
  {
    id: 2,
    name: " Bike Warehouse management",
    img: ["https://i.ibb.co/9H4Sg1D/wharehouse.png", "https://i.ibb.co/8r4DTRh/Screenshot-2022-06-10-133933.png", "https://i.ibb.co/hXgqZB8/Screenshot-2022-06-10-134009.png",],
    Image:bike,
    dis: "This is a basic warehouse management site and fully responsive.Anyone can update stock or get items upon signup/sign in",
    more: "This is a basic warehouse management site and fully responsive.Anyone can update stock or get items  and deleting items  upon signup/sign in if user did not singup /sign don't get upadate stock and other  ",
    live: "https://warehouse-82822.firebaseapp.com/",
    server: "https://github.com/emonahmed123/wharehouse-mangement-sever",
    clinet: "https://github.com/emonahmed123/wharehouse-mangement-client",
    Tecnologe: ["Reactjs", "ReactRouter", "Tailwind", " CSS", "DaisyUI", "Firebase", " Firebase-Authentication hooks", "React-hookform", "React-toasty", "React-Query", "MongoDB NodeJs", "ExpressJs", "Cors", "Dotenv", "Jsonwebtoken."]

  }, {
    id: 3,
    name: "Wedding Photograper",
    img: ["https://i.ibb.co/16NDZMV/photograpy.png", "https://i.ibb.co/jyDH5YL/Screenshot-2022-06-10-133641.png",],
    Image:photo,
    dis: "This site is a Wedding photographer portfolio and fully responseve.Any user can hire different types of photography services from here",
    more: "This site is a Wedding photographer portfolio and fully responseve.Any user can hire different types of photography services from here.and user can sing up sing in here",
    live: "https://photographer-436e3.web.app/ ",
    clinet: "https://github.com/emonahmed123/-independent-service-provider",
    Tecnologe: ["React js", "React-router", "React", "Bootstrap", " Firebase Authention",]

  },
  {
    id: 4,
    name: "Best Laptop",
    img: ["https://i.ibb.co/wg5rYZv/Screenshot-2022-06-10-073220.png", "https://i.ibb.co/0nW0PRT/Screenshot-2022-06-10-073321.png", "https://i.ibb.co/0V0PhF6/Screenshot-2022-06-10-073518.png",],
    Image:photo,
    dis: "This is simple website build in react js.user see laptop home page and customer reivew and go dashboard see chart  ",
    more: "This is simple website build in react js.user see laptop home page and customer reivew and go dashboard see chart  ",
    live: "https://bestlaptop.netlify.app/",
    clinet: "https://github.com/emonahmed123/Best-Laptop",
    Tecnologe: ["React js", "React-router", "React-Chart", "Bootstrap"]
  },
  {
    id: 5,
    name: "Pannda",
    img: ["https://i.ibb.co/f8w13Ch/Screenshot-2022-06-10-081440.png", "https://i.ibb.co/swrC3xB/Screenshot-2022-06-10-081559.png", "https://i.ibb.co/mDRF0XS/Screenshot-2022-06-10-081714.png",],
    Image:best,
    dis: "This is  demo e-commerce .user view all products",
    more: "This site is a Wedding photographer portfolio and fully responseve.Any user can hire different types of photography services from here.and user can sing up sing in here",
    live: "https://panda-emon.netlify.app/ ",
    clinet: "https://github.com/emonahmed123/Panda-bootstrap",
    Tecnologe: ["Html", "css", "Bootstrap"]
  }
  ]




  useEffect(() => {
    // fetch(`/Serevice.json`)
    //   .then((res) => res.json())
    //   .then((data) =>{

    //     // setLoding(data)
    //     setProject(data)

    //   });

    const projectdata = data.find(project => project.id == +id)
    setProject(projectdata)

  }, [id]);






  return (
    <div className="mx-5 mt-12 mb-64">

      <div className="inside-detail flex flex-col lg:flex-row justify-center items-start gap-8 lg:h-[60vh] text-left mb-6">
        <div className="image-detail w-full h-80 lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
          <img src={projects.Image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
          <div>

            <h2 className="project-title font-bold text-xl my-4">
              {projects.name}
            </h2>
            <div className="my-5">
              <h3 className=" text-secondary">Project Overview</h3>

              <p className="text-black">
                {projects.more}
              </p>

            </div>
            <div className="my-5">
              <h3 className=" text-secondary">Technology used</h3>
              <div className="flex flex-wrap gap-4">
                {/* {projects.Tecnologe.map(tecnologe => ( 
                   <span  className="text-accent hover:none btn">
                    {tecnologe}
                  </span> 
                ))}  */}
              </div>
            </div>
          </div>

        </div>
    
        
        
    
      </div>
      <div className=" flex justify-center">
            
              <div
            
                className="flex gap-5"
              >{
              projects.server &&  <a className="btn_shadow flex gap-2"
                  href={projects.server}
                  target="_blank"
                  rel="noreferrer"
                > Server
                  <div>
                    {" "}
                    <i className="fa-brands fa-github"></i>
                  </div>
                </a>}
                <a className="btn_shadow flex gap-2"
                  href={projects.client}
                  target="_blank"
                  rel="noreferrer"
                > Client
                  <div>
                    {" "}
                    <i className="fa-brands fa-github"></i>
                  </div>
                </a>
                <a className="btn_shadow flex gap-2"
                  href={projects.live}
                  target="_blank"
                  rel="noreferrer"
                > Live
                  <div>
                    {" "}
                    <i className="fa-solid fa-circle-dot"></i>
                  </div>
                </a>
              </div>
            </div>
   
 
 
 
    </div>
  );
};

export default ProjectsDeatil;