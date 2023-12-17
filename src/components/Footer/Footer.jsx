import React from 'react';
import './Footer.scss';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer-content">
      <div className="col">
        <div className="title">About</div>
        <div className="text">
        Enjoy a user-friendly interface that makes browsing and buying electronics a breeze.
         Our intuitive design ensures a seamless and enjoyable shopping journey, whether
          you're a tech guru or a casual shopper.
        </div>
      </div>
      <div className="col">
        <div className="title">Contact</div>
        <div className="c-item"><FaLocationArrow />
        <div className="text">Block C, sector 63A, noida, 201301</div>
        </div>
        <div className="c-item"><FaMobileAlt />
        <div className="text">Phone: 9634621470</div>
        </div>
        <div className="c-item"><FaEnvelope />
        <div className="text">Email : store@technotrends.com</div>
        </div>
      </div>
      
      <div className="col">
        <div className="title">Categories</div>
        <div className="text">Headphones</div>
        <div className="text">Smart Watches</div>
        <div className="text">Bluetooth Speakers</div>
        <div className="text">Wireless Earbuds</div>
        <div className="text">Home Threatre</div>
        <div className="text">Projectors</div>
      </div>
      <div className="col">
        <div className="title">Pages</div>
        <div className="text">Home</div>
        <div className="text">About</div>
        <div className="text">Privacy Policy</div>
        <div className="text">Returns</div>
        <div className="text">Terms & Conditions</div>
        <div className="text">Contact us</div>
      </div>
    </div>
    <div className="bottom-bar">
      <div className="bottom-bar-content">
        <div className="text">
          technoTrends 2022 created by technotrends. premium ecommerce
          solutions.
        </div>
        <img src={Payment} alt="" />
      </div>
    </div>
   </footer>
  )
}

export default Footer