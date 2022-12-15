import cam00383 from "./picture/CAM00383.jpg"
import p_20160408_132100 from "./picture/p_20160408_132100.jpg"
import brothers from "./picture/brothers.jpg"
import sumi from "./picture/sumi.jpg"


const pictures = [
    { id: 100, className: "images Thor", src: cam00383, alt: "Picture of Thor", ButtonClass: "Thor" },
    { id: 101, className: "images Thor", src: p_20160408_132100, alt: "Picture of Thor", ButtonClass: "Thor" },
    { id: 102, className: "images Thor Sumi", src: brothers, alt: "Picture Sumi hugging Thor", ButtonClass: "Family" },
    { id: 103, className: "images Sumi", src: sumi, alt: "Picture of Sumi",ButtonClass: "Sumi" }

]

export const buttons = getButtons()

function getButtons(){
    return pictures.map((buttons) => (buttons.ButtonClass))
}

export default pictures





