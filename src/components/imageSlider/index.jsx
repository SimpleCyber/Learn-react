import { useEffect, useState } from "react";
import "./imagesilder.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  });

  if (loading) {
    return <div>Loading data please wait 😌</div>;
  }

  if (errorMessage !== null) {
    return <div className="slider-main">Error Occured ! <br />{errorMessage}  <br />🌋 </div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="slider-main">
      <div className="slider">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow-left" />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill onClick={handleNext} className="arrow-right" />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
              <div className="slide-btn">
                <button
                  key={index}
                  id="slider-btn"
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator hide-current-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
                </div>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
