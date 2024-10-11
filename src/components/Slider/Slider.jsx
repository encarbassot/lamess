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
  


  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.offsetWidth;
      slideRef.current.scrollLeft = slideWidth * slideIndex
    }
  }, [slideIndex])


  function handleButton(i){
    setUserInteracted(true)
    setSlideIndex(i)
  }



  // DRAGGING PC
  function handleDragStart(e){
    setIsDragging(true);
    setUserInteracted(true)
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeft(slideRef.current.scrollLeft);
  }

  function handleDragMove(e){    
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2; // Amount of movement
    slideRef.current.scrollLeft = scrollLeft - walk;
  }

  function handleDragEnd(e){
    setUserInteracted(true);
    if (!isDragging) return;
    setIsDragging(false);

    // Get the current scroll position
    const { scrollWidth, clientWidth, scrollLeft:position } = slideRef.current;
    const totalSlides = childrenArray.length;
    const slideWidth = scrollWidth / totalSlides;

    // Calculate the drag distance
    const dragDistance = scrollLeft - position
    const newIndex = Math.round(position/slideWidth)

    if(newIndex != slideIndex){
      setSlideIndex(newIndex)
      return
    }

    //con un poco de scroll mueve a la siguiente o anterior
    if(Math.abs(dragDistance) > 90){//threshold
      if(dragDistance>0){
        setSlideIndex(Math.max(0,newIndex-1))
      }else{
        setSlideIndex(Math.min(newIndex +1,totalSlides-1))
      }
      return
    }

    //retorna a la anterior
    slideRef.current.scrollLeft = slideWidth * newIndex

  }

  function handleTouchEnd(e){

    setUserInteracted(true);
    setIsDragging(false);

    // Get the current scroll position
    const { scrollWidth, clientWidth, scrollLeft:position } = slideRef.current;
    const totalSlides = childrenArray.length;
    const slideWidth = scrollWidth / totalSlides;

    // Calculate the drag distance
    const dragDistance = scrollLeft - position
    const newIndex = Math.round(position/slideWidth)

    if(newIndex === slideIndex){
      slideRef.current.scrollLeft = slideWidth * newIndex
    }else{
      setSlideIndex(newIndex)
    }


  }

  return <div className="Slider">


    <main 
      ref={slideRef}
      onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        // onTouchMove={handleDragMove}
        onTouchEnd={()=> setTimeout(handleTouchEnd,1000)}
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
