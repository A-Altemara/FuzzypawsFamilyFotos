import pictures from "./data"

function DisplayKitty() {
  // console.log(pictures)
  const buildImage = (picture) => {
    return (
      <>
        <img className={picture.className} src="./picture/CAM00383.jpg" alt={picture.alt} />
        <img className={picture.className} src="https://dog.ceo/img/dog-ceo-zine.jpg" alt={picture.alt} />
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