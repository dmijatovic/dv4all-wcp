
const dv4input = document.querySelector("dv4-material-input")

dv4input.addEventListener("onChange",function({target}){
  console.log("onChange...value...", target.value)
  debugger 
  if (target.value.length > 3){
    const value = target.value
    target.setAttribute("message","Well done!");
    // target.setAttribute("value", value);
  }else{
    target.setAttribute("message","Type something");
  }
})
