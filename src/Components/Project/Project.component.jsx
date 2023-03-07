import React, { useState } from "react";
import "./Project.scope.css";

const ProjectData = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dvehyvk3d/image/upload/v1634187001/Blanja/3_kkow7r.png",
    title: "Blanja Web App",
    from: 'Arkademy',
    description: 'An online shop web application for sellers to sell their products or customers to purchases various products on this website. This website was built using React.Js, Express.Js, Docker, AWS, K8s, Nginx, and K6.',
    occupation: 'Full Stack Engineer and DevOps',
    github: 'https://github.com/firyal-salsa/Online-Shop-Blanja-ReactJS',
    url: 'https://blanja-online.shop/',
    icon:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1673879834/Blanja/Blanja_wx6dy8-removebg-preview_czrufu.png',
    tools1:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1634191162/tech%20stack/react_xh8uvp.svg',
    tools2:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1634289445/tech%20stack/express_xmzka6.svg'
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dvehyvk3d/image/upload/v1634197503/Ankasa/5_pxafdr.png",
    title: "Ankasa Web App",
    description: "A web application for finding and booking the flight tickets from various airlines. This website was built using React.Js, Express.Js, Docker, AWS, K8s, Nginx, and K6.",
    occupation: 'Frontend Engineer',
    from: 'Arkademy',
    github: 'https://github.com/firyal-salsa/Ankasa-Frontend',
    url: 'https://ankasa-online.shop/',
    icon:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1673880091/Ankasa/Ankasa_t2yy48-removebg-preview_qbowrr.png',
    tools1:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1634191162/tech%20stack/react_xh8uvp.svg',
    tools2:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1634289445/tech%20stack/express_xmzka6.svg'
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dvehyvk3d/image/upload/v1675394152/Screen_Shot_2023-02-03_at_10.19.28_w5odcd.png",
    title: "Student Attendance",
    description:"A web application to allow students to quickly checks in and out of school and track attendance student status every semester. This website was built using Odoo, Telegram chat bot, and QR Code Scanner.",
    occupation:"Backend Developer",
    from: 'Internal Project',
    tools1:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1673920130/Odoo-removebg-preview_gvzmco.png',
    tools2:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1673920034/scanner_a8kv20.png',
    github:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1677482399/Blanja/Untitled_scdaxn.png',
    url:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1677482399/Blanja/Untitled_scdaxn.png'
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dvehyvk3d/image/upload/v1675394045/Screen_Shot_2023-02-03_at_10.17.17_qdhvw1.png",
    title: "Personalized Learning",
    description:"A web application with various features such as attendance, course, administration fees, and open library. And users can choose as general manager, manager, operator, student, teacher, or parent.  This website was built using Odoo.",
    occupation:"Backend Developer & System Analyst",
    from: 'Internal Project',
    tools1:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1673920130/Odoo-removebg-preview_gvzmco.png',
    github:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1677482399/Blanja/Untitled_scdaxn.png',
    url:'https://res.cloudinary.com/dvehyvk3d/image/upload/v1677482399/Blanja/Untitled_scdaxn.png'
  },
];


const Project = () => {
  const [toggle, setToggle] = useState("1");
  return (
    <div className="container-page-project relative" id='project'>
      <h1 className='bottom-80 left-64 absolute text-5xl'>Project</h1>
      {ProjectData.map(({ title, description, id, image, url, github, icon }) => {
        return (
          <>
            <div className="">
              <div className="top-96">
                <p className="ml-64 text-white" onClick={() => setToggle(id)}>{title} </p>
                {toggle === id ? (
                  <>
                    {/* <p>{description}</p> */}
                  </>
                ) : null}
              </div>

              <div className="">
                {toggle === id ? (
                  <>
                  <div class="image-cn">
                    <div className="cs-width absolute image w-96">
                      <img src={image} key={id} alt=""/>
                      <div class="overlay-cn">
                        <div class="p-40 text-white">
                          {description}
                          <div className="flex">
                            <a href={github} target="_blank" rel="noreferrer">
                              <img className="w-10" src='https://res.cloudinary.com/dvehyvk3d/image/upload/v1673533111/tech%20stack/github-icon_wq69a4.svg' alt="github"/>
                            </a>
                            <a href={url} target="_blank" rel="noreferrer">
                              <img className="w-28" src={icon} alt="link"/>
                            </a>
                          </div>
                        </div>
                    </div>
                    </div>
                  </div>
                  </>
                ) : null}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Project;
