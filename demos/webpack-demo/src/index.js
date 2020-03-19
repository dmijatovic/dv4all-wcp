
import {Dv4IconCamera} from '@dv4all/icons'

const main = document.getElementById("app-body")
const camera = new Dv4IconCamera()

// customElements.define("test-icon", Dv4IconCamera)

console.log("test class...", camera)

// main.innerHTML=`
// <h2>@dv4icons</h2>
// <!-- ARROW RIGHT -->
// <dv4-icon-arrow-right
// class="dv4-icon"
// title="dv4-icon-arrow-right"
// role="button">
// </dv4-icon-arrow-right>
// `
main.appendChild(camera)

