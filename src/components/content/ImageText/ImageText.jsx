import "./ImageText.css"

export default function ImageText({
  image,
  children
}){

  const bgStyle = {background:`linear-gradient(#2323237a, #2323237a),  url(${image})`}

  return <article className="Compromiso">

    <div className="imgBg max-width" style={bgStyle}>
      {children}
    </div>
  </article>
}