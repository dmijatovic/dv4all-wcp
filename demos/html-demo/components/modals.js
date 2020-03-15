
const dv4modal = document.querySelector('dv4-info-modal')
const dv4button = document.querySelector('dv4-custom-button')

// console.log("Modals hooked...", dv4modal, dv4button)

dv4button.addEventListener("click",()=>{
  console.log("Show modal!!!")
  dv4modal.setAttribute("active", "true")
})

dv4modal.addEventListener("onClose",({target})=>{
  console.log("Close modal")
  dv4modal.removeAttribute("active")
})