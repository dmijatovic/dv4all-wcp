
const dv4infomodal = document.querySelector('dv4-info-modal')
const dv4infobutton = document.querySelector('#info-modal')

const dv4actionmodal = document.querySelector('dv4-action-modal')
const dv4actionbutton = document.querySelector('#action-modal')

// console.log("Modals hooked...", dv4modal, dv4button)

function showModal(modal){
  modal.setAttribute("active", "true")
}

function hideModal(modal){
  modal.removeAttribute("active")
}

dv4infobutton.addEventListener("click",()=>{
  console.log("Show info modal!!!")
  showModal(dv4infomodal)
  // dv4infomodal.setAttribute("active", "true")
})

dv4infomodal.addEventListener("onClose",({target})=>{
  console.log("Close info modal")
  hideModal(dv4infomodal)
  // dv4infomodal.removeAttribute("active")
})


dv4actionbutton.addEventListener("click",()=>{
  console.log("Show action modal!!!")
  // dv4actionmodal.setAttribute("active", "true")
  showModal(dv4actionmodal)
})

const btns = dv4actionmodal.querySelectorAll("dv4-custom-button")

btns[0].addEventListener("click",()=>{
  console.log("Close action modal")
  hideModal(dv4actionmodal)
})