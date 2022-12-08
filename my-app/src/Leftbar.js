/* I want to create buttons based off the button class in my data set 
* do I have to do the button creation here and then another lower level(s) to
* map over the data set to create the buttons?
*/

export default function LeftBar() {

    return (
        <div class="left_bar">
        <button class="bar_links">Thor</button>
        <button class="bar_links">Sumi</button>
        <button class="bar_links">Family</button>
        <button class="bar_links">Videos</button>
      </div>
    )

}