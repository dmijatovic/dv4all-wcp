
import {Dv4IconCamera} from '@dv4all/icons'

const main = document.getElementById("app-body")
const camera = new Dv4IconCamera()

console.log("customElement.camera...", camera)

main.appendChild(camera)

