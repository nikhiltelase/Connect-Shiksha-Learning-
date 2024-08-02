import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const offers = [
  {
    id: 1,
    imgSrc:
      "https://rukminim1.flixcart.com/fk-p-flap/480/210/image/f1bdb15f13ec3195.jpeg?q=20",
    imgSrc2:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg",
    alt: "Offer 1",
    link: "/item/1",
  },
  {
    id: 2,
    imgSrc:
      "https://rukminim1.flixcart.com/fk-p-flap/480/210/image/8617913704702e0f.jpeg?q=20",
    imgSrc2:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg",
    alt: "Offer 2",
    link: "/item/9",
  },
  {
    id: 3,
    imgSrc:
      "https://rukminim1.flixcart.com/fk-p-flap/480/210/image/2315db3c22d95ea3.jpeg?q=20",
    imgSrc2:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/July/Unrec/3000/1._CB569386741_.jpg",
    alt: "Offer 3",
    link: "/item/13",
  },
];

const OfferSlider = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CustomPrevArrow = (props) => {
    const { className, onClick, style } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, left: "10px", position: "absolute", zIndex: "5" }}
        aria-label="Previous Slide"
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
        aria-label="Next Slide"
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: isLargeScreen ? <CustomPrevArrow /> : <div />,
    nextArrow: isLargeScreen ? <CustomNextArrow /> : <div />,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id}>
            <Link to={offer.link}>
              <img
                src={isLargeScreen ? offer.imgSrc2 : offer.imgSrc}
                alt={offer.alt}
                className={`${
                  isLargeScreen
                    ? "w-full h-60 object-top object-cover"
                    : "w-full h-auto"
                } rounded-md shadow-md`}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferSlider;
