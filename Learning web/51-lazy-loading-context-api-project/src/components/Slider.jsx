import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const offers = [
  {
    id: 1,
    imgSrc:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg",
    alt: "Offer 1",
    link: "/item/1",
  },
  {
    id: 2,
    imgSrc:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg",
    alt: "Offer 2",
    link: "/item/9",
  },
  {
    id: 3,
    imgSrc:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/July/Unrec/3000/1._CB569386741_.jpg",
    alt: "Offer 3",
    link: "/item/13",
  },
];

const CustomPrevArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, left: "10px", position: "absolute", zIndex: "5" }}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, right: "10px", position: "absolute", zIndex: "5" }}
    />
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
        {offers.map((offer) => (
          <div key={offer.id} className="outline-none">
            <Link to={offer.link}>
              <img
                src={offer.imgSrc}
                alt={offer.alt}
                height={"500px"}
                className="w-full h-60 object-top object-cover rounded-md shadow-md"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;
