import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const Footer: React.FC = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.mapSection}>
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
        <div className={styles.socialMediaSection}>
          <Link className={styles.link} href="/about">
            About
          </Link>
          {/* Add other links as needed */}
          <a
            href="https://www.facebook.com"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.copyRightSection}>
        © {new Date().getFullYear()} Super Fe
      </div>
    </footer>
  );
};

export default Footer;
