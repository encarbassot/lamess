import { useEffect, useRef, useState } from "react"
import "./InputDirection.css"

import imgLupa from "../../../assets/icons/actions/search.svg"
import imgCancel from "../../../assets/icons/actions/cros.svg"
import imgStart from "../../../assets/icons/actions/marker-green.svg"
import imgEnd from "../../../assets/icons/actions/marker-red.svg"


import { locatePlace } from "../../../utils/geocode"

export default function InputDirection({startPlace,setStartPlace,endPlace,setEndPlace}){

  const [hasLocatedFirst,setHasLocatedFirst] = useState(false)

  const [startText,setStartText] = useState("")
  const [endText,setEndText] = useState("")

  const secondInputRef = useRef()

  useEffect(()=>{ 
    if(startPlace || endPlace){
      setHasLocatedFirst(true)
    }
  },[startPlace,endPlace])

  function handleSearchStart(e){
    setStartText(e.target.value)
  }

  function handleSearchEnd(e){
    setEndText(e.target.value)
  }

  async function handleSubmitStart(){
    const place = await locatePlace(startText)
    setStartPlace(place)
    if(secondInputRef.current){
      secondInputRef.current.focus()
    }
  }

  async function handleSubmitEnd(){
    const place = await locatePlace(endText)
    setEndPlace(place)
  }


  function handleKeyDownStart(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmitStart()
    }
  }

  function handleKeyDownEnd(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmitEnd()
    }
  }

  function handleDeleteStart(){ 
    setStartPlace(undefined)
    setStartText("")

  }
  function handleDeleteEnd(){ 
    setEndPlace(undefined)
    setEndText("")

  }


  function handleEditStart(){
    setStartText(startPlace.name)
    setStartPlace(undefined)
  }


  function handleEditEnd(){
    setEndText(endPlace.name)
    setEndPlace(undefined)
  }

  return <div className="InputDirection">

    <div className="startDirection">
      {
        startPlace ?
        <>
          <img src={imgStart} alt=""  className="locationIcon"/>
          <div className="location" onClick={handleEditStart}>
            {startPlace.name}
          </div>
          <button
        onClick={handleDeleteStart}
      >
        <img src={imgCancel} alt="" />
      </button>
        </>
        :
        <>
        <input 
        type="text" 
        autoFocus
        value={startText} 
        onChange={handleSearchStart} 
        onKeyDown={handleKeyDownStart}
        placeholder="Dirección de recogida"
      />
      <button
        onClick={handleSubmitStart}
      >
        <img src={imgLupa} alt="" />
      </button>
      </>
      }
    </div>


    {
      hasLocatedFirst &&
      <div className="endDirection">
      {
        endPlace ?
        <>
          <img src={imgEnd} alt=""  className="locationIcon"/>
          <div className="location" onClick={handleEditEnd}>
            {endPlace.name}
          </div>
          <button
        onClick={handleDeleteEnd}
      >
        <img src={imgCancel} alt="" />
      </button>
        </>
        :
        <>
        <input 
        type="text" 
        ref={secondInputRef}
        value={endText} 
        onChange={handleSearchEnd} 
        onKeyDown={handleKeyDownEnd}
        placeholder="Dirección de entrega"
      />
      <button
        onClick={handleSubmitEnd}
      >
        <img src={imgLupa} alt="" />
      </button>
      </>
      }
    </div>
    }


  </div>

}