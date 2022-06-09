import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const Projects = [{
        id: 1,
        name: " Car-parts-maunfactureing",
        img: "",
        dis: "This is maunfactureing website fully responsive. A non-sign upped user gets to see the basics of our site and need Login To do more activities.",
        live: "https://car-parts-manufacturer-8d75b.web.app/",
        server: "https://github.com/emonahmed123/car-manufacture-server-side",
        client: "https://github.com/emonahmed123/car-manufactureing-client-side"
    },
    {
        id: 2,
        name: " Bike Warehouse management",
        img: "",
        dis: "This is a basic warehouse management site and fully responsive.Anyone can update stock or get items upon signup/sign in",
        live: "https://warehouse-82822.firebaseapp.com/",
        server: "https://github.com/emonahmed123/wharehouse-mangement-sever",
        clinet: "https://github.com/emonahmed123/wharehouse-mangement-client"
    }, {
        id: 3,
        name: "Wedding Photograper",
        img: "",
        dis: "This site is a Wedding photographer portfolio and fully responseve.Any user can hire different types of photography services from here",
        live: "https://photographer-436e3.web.app/",
        clinet: "https://github.com/emonahmed123/-independent-service-provider"

    }
    ]

    return (
        <div >
            <div className='mt-20' >
                 <div className='mx-24  shadow-xl bg-yellow-400 rounded'>
                 <h1 className='text-center text-3xl '>Projects </h1>

                 </div>

                <div className=' grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-3 pt-4 mt-3' >
                    {
                        Projects.map(project => <div project={project}>


                            <div class="  card card-compact w-full bg-base-100 shadow-xl">
                                <figure><img className=' hover:translate-y-6 ' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                                <div class="card-body h-56 ">
                                    <h2 class="card-title">{project.name}</h2>
                                    <p>{project.dis}</p>
                            
                                    <div class="card-actions justify">
                                        <a  href={project.live} target={"_blank"}   class="btn text-secondary  bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700">Live Site</a>
                                        <a href={project.client} class="btn text-secondary  bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700 "> <FaGithub/> Client Code</a>
                                      {
                                        project.server&& <a  href={project.server} class="btn text-secondary  bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700">Server Code</a>  
                                      }
                                    </div>
                                  
                                </div>
                            </div>


                        </div>)
                    }




                </div>


            </div>

        </div>
    );
};

export default Projects;