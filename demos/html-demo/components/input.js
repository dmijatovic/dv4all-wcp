
const dv4input = document.querySelector("dv4-text-input")
const dv4output = document.querySelector("#text-output")

dv4input.addEventListener("onChange",function({target}){
  const value = target.value
  console.log("dv4-material-input.onChange...value...", value)
  if (value.length > 3){
    target.setAttribute("message","Well done!");
    // target.setAttribute("value", value);
  }else{
    target.setAttribute("message","Type your first and last name");
  }
  //write to output
  dv4output.innerHTML = value
})
