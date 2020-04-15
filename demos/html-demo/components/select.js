
const dv4select = document.querySelector('dv4-select')
const dv4output = document.querySelector('#text-output')

const options=['Audi','BMV','Citroen','Daihatsu']

dv4select.setAttribute('options',options.toString())

dv4select.addEventListener('onChange',function({target}){
  const value = target.value
  console.log('dv4-select.onChange...value...', value)
  if (value > -1){
    target.setAttribute('message','Well done!')
    // target.setAttribute("value", value);
    //write to output
    dv4output.innerHTML = `You selected: ${options[value]}`
  }else{
    target.setAttribute('message','Select some car')
    dv4output.innerHTML =''
  }
})
