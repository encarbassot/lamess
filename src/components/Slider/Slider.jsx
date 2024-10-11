import React, { useEffect, useState, useRef } from "react"
import "./Slider.css"



const THRESHOLD = 10

export default function Slider({children}){


  const childrenArray = React.Children.toArray(children)
  const [slideIndex,setSlideIndex] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)
  
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  
  const timeoutRef = useRef(null)
  const slideRef = useRef(null)
  
  
  useEffect(() => {
    if (!userInteracted) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, 2000);

      return () => clearTimeout(timeoutRef.current)
    }
  }, [slideIndex, userInteracted]);


  // cuando slideIndex cambia, actualiza el scroll para mostrar la slide correcta
  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.offsetWidth
      slideRef.current.scrollLeft = slideWidth * slideIndex
    }
  }, [slideIndex])


  function handleButton(i){
    handleUserInteraction()
    setSlideIndex(i)
  }

  const handleUserInteraction = () => {
    setUserInteracted(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  };



  // DRAGGING PC
  function handleDragStart(e){
    setIsDragging(true)
    handleUserInteraction()
    setStartX(e.pageX || e.touches[0].pageX)
    setScrollLeft(slideRef.current.scrollLeft)
  }

  function handleDragMove(e){    
    if (!isDragging) return
    const x = e.pageX || e.touches[0].pageX
    const walk = (x - startX) * 2 // Amount of movement
    slideRef.current.scrollLeft = scrollLeft - walk
  }

  function handleDragEnd(e){
    handleUserInteraction()
    if (!isDragging) return
    setIsDragging(false)

    // Get the current scroll position
    const { scrollWidth, clientWidth, scrollLeft:position } = slideRef.current
    const totalSlides = childrenArray.length
    const slideWidth = scrollWidth / totalSlides

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

    handleUserInteraction()
    setIsDragging(false)

    // Get the current scroll position
    const { scrollWidth, clientWidth, scrollLeft:position } = slideRef.current
    const totalSlides = childrenArray.length
    const slideWidth = scrollWidth / totalSlides

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
