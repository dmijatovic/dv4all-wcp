/**
 * LOADERS DEMO script
 * here we show/hide loaders based on buttons clicked
 */
const btns = document.querySelectorAll('.btn-show-loader')
const loaderSection = document.getElementById('loader-area')
const standardMsg = 'In this section we inject loader element.'
const body = document.querySelector("body")
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
  body.classList.toggle("noscroll")
  loaderSection.innerHTML = standardMsg
}
/**
 * Listens for click on button to create loader element.
 * The data attribute of the button indicates which type
 * of loader to be shown
 */
function listenForBtnClick(){
  btns.forEach(btn=>{
    btn.addEventListener('click',function ({target}){
      // console.log("clicked...", target)
      const data = target.getAttribute('data-loader-type')
      if (data) addLoader(data)
    })
  })
}

//show standard message
loaderSection.innerHTML = standardMsg

//listen for click on buttons
listenForBtnClick()

