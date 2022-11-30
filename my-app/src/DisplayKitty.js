import pictures from "./data"

function DisplayKitty() {
  // console.log(pictures)
  const buildImage = (picture) => {
    return (
      <>
        <img className={picture.className} src={picture.src} alt={picture.alt} />
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