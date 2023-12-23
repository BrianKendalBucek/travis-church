import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="linkSection">
          <a href="#!">About Us</a>
          <a href="#!">Contact</a>
          <a href="#!">Privacy Policy</a>
        </div>
        <div className="socialMediaSection">
          <a href="#!">Facebook</a>
          <a href="#!">Twitter</a>
          <a href="#!">Instagram</a>
        </div>
      </div>
      <div className="copyRightSection">
        © {new Date().getFullYear()} Your Website Name
      </div>
    </footer>
  );
};

export default Footer;
