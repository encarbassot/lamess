import React, { useEffect, useState, useRef } from "react"
import "./Slider.css"



const THRESHOLD = 10

export default function Slider({children}){


  const childrenArray = React.Children.toArray(children)
  const [slideIndex,setSlideIndex] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const slideRef = useRef(null)
  

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
  }

  useEffect(() => {
    if(!userInteracted){
      const timeout = setTimeout(() => {
        nextSlide() 
      }, 7000)
  
      return () => clearTimeout(timeout)
    }
  }, [slideIndex,userInteracted])


  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.offsetWidth;
      slideRef.current.scrollLeft = slideWidth * slideIndex
      console.log("SLIDE")
    }
  }, [slideIndex])


  function handleButton(i){
    setSlideIndex(i)
    setUserInteracted(true)
  }




  // DRAGGING

  // Function to handle when the mouse or touch starts dragging
  const handleDragStart = (e) => {
    setIsDragging(true);
    setUserInteracted(true)
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(slideRef.current.scrollLeft);
  };

  // Function to handle dragging
  const handleDragMove = (e) => {
    setUserInteracted(true)
    
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2; // Amount of movement
    slideRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setUserInteracted(true);
    setIsDragging(false);

    // Get the current scroll position
    const { scrollWidth, clientWidth } = slideRef.current;
    const totalSlides = childrenArray.length;
    const slideWidth = scrollWidth / totalSlides;

    // Calculate the center index based on the scroll position
    const centerIndex = Math.round(slideRef.current.scrollLeft / slideWidth);
    
    // Calculate the drag distance
    const dragDistance = scrollLeft - slideRef.current.scrollLeft

    // Only update slideIndex if the drag distance exceeds the threshold
    if(slideIndex === centerIndex){
      const k = dragDistance > 0 ? -1 : 1
      setSlideIndex(prev=>Math.max(0, Math.min(prev+k, totalSlides - 1)));

    }else{
      setSlideIndex(Math.max(0, Math.min(centerIndex, totalSlides - 1)));
    }
  };


  return <div className="Slider">


    <main 
      ref={slideRef}
      onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        // onMouseLeave={handleDragEnd}
        // onTouchStart={handleDragStart}
        // onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      className={"prevent-select "+(isDragging ? 'grabbing' : 'grab')}
    >

      <div className="Carrousel" >
        {
          childrenArray.map((child,i)=><div className="Slide" key={i}>
            {child}
          </div>)
        }
      </div>

    </main>

    <footer className="max-width"> 
      {childrenArray.map((_, index) => (
        <button key={index}
          className={`ball ${index === slideIndex ? 'active' : ''}`}
          onClick={() => handleButton(index)}
        ></button>
      ))}
    </footer>
  </div>
}
