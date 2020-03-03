import React, {useState} from 'react';

const loader = () => {

  const [state, setState] = useState({show:false, message:""})

  const toggleState = ()=>{
    setState({
      show: !state.show,
      message: state.show ? "Hidden" : "Loading..."
    })
  }

  const render = ()=>{
    if (state.show){
      return (<dv4-loader-ball-triangle
        backdrop
        onClick={toggleState}
      >
        { state.message }
      </dv4-loader-ball-triangle>)
    } else {
      return <dv4-button
        class="btn-show-loader"
        role="button"
        onClick={toggleState}>Show loader</dv4-button>
    }
  }

  return (
    <>
      <style jsx>{`
        section{
          display:block;
        }
        div{
          padding: 1rem 0rem;
        }
        dv4-button{
          padding: 1rem;
        }
      `}</style>
      <div>Show loader: {state.show.toString()}</div>
      {render()}
    </>
  );
};

export default loader;