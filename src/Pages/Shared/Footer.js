import React from 'react';
import'./Footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
   
    return (
      <div className="footer-content pb-10 -mt-10 bg-secondary">
      <footer className="footer justify-center items-center gap-24 p-10 text-neutral-content max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2>Emon Ahmed</h2>
          <p>Copyright © {currentYear} -All right reserved by Emon Ahmed</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="flex gap-5">
            <a
              href="https://github.com/emonahmed123"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-box">
                {" "}
                <i className="fa-brands fa-github"></i>
              </div>
            </a>
            <a
              href="www.linkedin.com/in/emon-ahmed123"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-box">
                {" "}
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009847200102"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-box">
                {" "}
                <i className="fa-brands fa-facebook-f"></i>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );

 

};

export default Footer;