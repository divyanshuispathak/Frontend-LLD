import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const ImageSlider = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2024/07/11/15/48/ai-generated-8888609_640.jpg",
    "https://cdn.pixabay.com/photo/2024/07/09/03/48/shiva-poster-8882318_640.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFM45VTmvVVW6eqsAjXjCD468_DQUwFC13dATQjvdN249KK-wiHVUrEE0UBlrETKxR2Y&usqp=CAU",
    "https://thesevencolours.com/cdn/shop/files/Lord_Shiva_Shankara_Bholenath_Baba_Wallpaper_Self_Adhesive_Mural_Wallpaper_Customized_Wallpaper.png?v=1735203517",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToItdeaEJu97thEne3b7qRM4osjfDyD8cQhg&s",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
        handleNextImage()
    }, 4000)

    return () => {
        clearInterval(i);
    }
  })

  const handleNextImage = () => {
    console.log("Next Image Clicked");
    if (active == images.length - 1) {
      setActive(0);
    } else {
      setActive((active) => active + 1);
    }
  };

  const handlePrevImage = () => {
    console.log("Prev Image Clicked");
    if (active == 0) {
      setActive(images.length - 1);
    } else {
      setActive((active) => active - 1);
    }
  };

  return (
    <div className="flex justify-center my-5">
      <div className="w-20 h-20 my-70 flex justify-center cursor-pointer hover:bg-gray-100 rounded-full items-center">
        {/* <button className="items-center" onClick={handlePrevImage}>
          ⬅️
        </button> */}
        <FaArrowLeft className="items-center" onClick={handlePrevImage} />
      </div>
      <div>
        <img className="w-200 h-150 rounded-2xl" src={images[active]} alt="shiva" />
      </div>
      <div className="w-20 h-20 my-70 flex justify-center cursor-pointer hover:bg-gray-100 rounded-full items-center">
        {/* <button className="items-center" onClick={handleNextImage}>
          ➡️
        </button> */}
        <FaArrowRight className="items-center" onClick={handleNextImage} />
      </div>
    </div>
  );
};

export default ImageSlider;
