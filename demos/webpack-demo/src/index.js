
import {Dv4IconCamera} from '@dv4all/icons'
import {Dv4CustomButton} from '@dv4all/web-components'
import {Dv4ClimbingDot} from "@dv4all/loaders"

// const main = document.getElementById("app-body")
const iconSection = document.getElementById('icons-area')
const btnSection = document.getElementById('buttons-area')
const loaderSection = document.getElementById('loader-area')

const camera = new Dv4IconCamera()
const button = new Dv4CustomButton()
const loader = new Dv4ClimbingDot()
const standardMsg = ""

// console.log("customElement.camera...", camera)

/**
 * Add loader to loader-area section
 * @param {String} type custom element type (loader type)
 */
function addLoader(type){
  //create loader element
  let el = document.createElement(type)
  //add overlay
  el.setAttribute('overlay', true)
  //set Loading... text
  el.innerText = 'Loading...'
  //listen to destroy
  el.addEventListener('click', clearLoader)
  //add no scroll
  // body.classList.toggle("noscroll")
  //append to loader section
  loaderSection.appendChild(el)
}
/**
 * Remove elements from loader-area section
 */
function clearLoader(){
  // body.classList.toggle('noscroll')
  loaderSection.innerHTML = standardMsg
}


button.setAttribute("primary","true")
button.innerHTML="Show ClimbingDot loader"
button.addEventListener("click",()=>{
  console.log("Clicked on button")
  addLoader("dv4-loader-climbing-dot")
})


iconSection.appendChild(camera)
btnSection.appendChild(button)

