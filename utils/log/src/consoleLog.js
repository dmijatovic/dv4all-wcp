
function startGroup(group){
  console.group(group)
}

function closeGroup(){
  console.groupEnd()
}

function consoleLog(log){
  debugger
  if (typeof log === 'object'){
    const groups = Object.keys(log)
    groups.map(g=>{
      const group = groups[g]
      startGroup(g)
      consoleLog(group)
      closeGroup()
    })
  }else{
    //log message
    console.log(log)
  }
}

export default (log, env="development")=>{
  if (env==='development'){
    consoleLog(log)
  }
}