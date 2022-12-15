/* I want to create buttons based off the button class in my data set 
* do I have to do the button creation here and then another lower level(s) to
* map over the data set to create the buttons?
*/
import pictures from "./data"

function Button(ButtonClass){
  // console.log(ButtonClass)
  return(
    <button key={ButtonClass} className="bar_links">{ButtonClass}</button>
  )
}

// this should not be a Map this should be a filter or something else so that it only shows 1 button per unique ButtonClass Name.
export default function LeftBar() {
  
    return (
        <div className="left_bar">
          {pictures.map((picture) => Button(picture.ButtonClass))}
      </div>
    )

}