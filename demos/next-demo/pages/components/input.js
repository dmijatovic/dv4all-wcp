import {useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import {PageTitle, Paragraph} from "../../components/layout"

const Input = () => {
  useEffect(()=>{
    // console.log("dv4input..", dv4input)
    dv4input.current.addEventListener("onChange",({target})=>{
      setState({
        output: target.value,
        message: target.value.length > 3 ?
          "Well done!" :
          "Type your first and last name"
      })
    })
  },[])

  const [state, setState] = useState({
    output:"",
    message:"Type your first and last name"
  })
  const dv4input = useRef(null)
  const {output,message}=state

  return (
    <>
      <Head>
        <title>Web components - INPUT</title>
      </Head>
      <PageTitle>Input demo @dv4all/components</PageTitle>
      <Paragraph>What is the challenge?</Paragraph>
      <Paragraph>
          I decided to have separate custom elements for each input type.
          Decission is based on the idea to be able to have custom validators
          in each class. For example for numeric input we might be able to
          implement custom validator in the class. This is inital tought
          and experimenting here is used to test this idea.
      </Paragraph>
      <Paragraph>
          <strong>
            React does not support listening to (native) events from custom
            elements.
          </strong> In this example I have set reference to custom input
          component and used effect to set event listener for 'onChange'
          event when Rect component loads.
      </Paragraph>
      <Paragraph>
        <h3>Example input type text</h3>
        <p>
          <dv4-text-input
            ref={dv4input}
            name="var-name"
            label="Your name"
            message={message}
            >
          </dv4-text-input>
        </p>
      </Paragraph>
      <Paragraph>
        <div id="text-output">
          You typed: {output}
        </div>
      </Paragraph>
    </>
  );
};

export default Input;