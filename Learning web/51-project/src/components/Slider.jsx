import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './Slider.css';

const offers = [
  { id: 1, imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg', alt: 'Offer 1' },
  { id: 2, imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg', alt: 'Offer 2' },
  { id: 3, imgSrc: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/July/Unrec/3000/1._CB569386741_.jpg', alt: 'Offer 3' },
];

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

const OfferSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {offers.map(offer => (
          <div key={offer.id}>
            <img src={offer.imgSrc} alt={offer.alt} height={'500px'} className="w-full h-60 object-top object-cover rounded-md shadow-md" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;
