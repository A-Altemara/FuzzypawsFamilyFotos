import pictures from "./data"


function DisplayKitty() {

  const buildImage = (picture) => {
    return (
      <>
        <img key={picture.id.toString()} className={picture.className} src={picture.src} alt={picture.alt} />
      </>
    )
  }

  return (
    <div className='media_content'>
      <p>DisplayKitty</p>
      <div className='gallery'>
        {pictures ? pictures.map(picture => buildImage(picture)) : null}
      </div>
    </div>
  )
}

export default DisplayKitty