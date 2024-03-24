import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <footer className='footer'>
      <div className='footerContent'>
        <div className='mapSection'>
          <iframe
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=9.845323,-83.940137`}
          ></iframe>
        </div>
        <div className='socialMediaSection'>
          <Link className='link' href="/about">
            About
          </Link>
          {/* Add other links as needed */}
          <a
            href="https://www.facebook.com"
            className='socialLink'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            className='socialLink'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            className='socialLink'
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className='copyRightSection'>
        © {new Date().getFullYear()} Super Fe
      </div>
    </footer>
  );
};

export default Footer;
