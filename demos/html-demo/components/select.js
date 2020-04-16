
const dv4selectCar = document.querySelector('#dv4-select-car')
const dv4selectModel = document.querySelector('#dv4-select-model')
const dv4output = document.querySelector('#text-output')

const options=['Audi','BMW','Citroen','Daihatsu']

const models={
  Audi:['A1','A2','A3','A4'],
  BMW:['B1', 'B2', 'B3', 'Dont know'],
  Citroen:['C1', 'C2', 'Other model'],
  Daihatsu:['D1', 'D2', 'Other model'],
}

let selectedBrand=''
let selectedModel=''

function setModels(){
  const model = models[selectedBrand]
  dv4selectModel.setAttribute('options', model.toString())
  dv4selectModel.setAttribute('message','Select model from the list')
}

function resetModels(){
  //reset model
  dv4selectModel.setAttribute('value', '-1')
  selectedModel=''
}

dv4selectCar.setAttribute('options',options.toString())

dv4selectCar.addEventListener('onChange',function({target}){
  const value = target.value
  console.log('dv4-select.onChange...value...', value)
  if (value !== '-1'){
    target.setAttribute('message','Well done!')
    // target.setAttribute("value", value);
    //write to output
    // dv4output.innerHTML = `You selected: ${options[value]}`
    selectedBrand = value
    setModels()
  }else{
    target.setAttribute('message','Select some car')
    selectedBrand = ''
    dv4output.innerHTML =''
    resetModels()
  }
  dv4output.innerHTML = `You selected: ${selectedBrand}`
})

dv4selectModel.addEventListener('onChange',function({target}){
  //redraw
  target.setAttribute('value', target.value)
  const value = target.value
  console.log('dv4-select.onChange...value...', value)
  if (value !== '-1'){
    target.setAttribute('message','Well done!')
    selectedModel = value
  }else{
    target.setAttribute('message','Select model from the list')
    selectedModel = ''
  }
  dv4output.innerHTML = `You selected: ${selectedBrand} ${selectedModel}`
})
