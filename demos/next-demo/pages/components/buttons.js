import Head from 'next/head'
import {PageTitle, Paragraph} from "../../components/layout"

const Buttons = () => {
  return (
    <>
      <Head>
        <title>Web components - BUTTONS</title>
      </Head>
      <PageTitle>Web components - BUTTONS</PageTitle>
      <Paragraph>
        I faced serious challenge using web component for base elements. Below is an example.
        <ul>
          <li>Button that extends HTMLButtonElement: this element does not support shadowDOM. The styles for each button added this way are duplicated. At least when inspecting page with developer tools you can see that styles are repeated for each button (and overwritten). The styles are not scoped :-(.
          </li>
          <li>Button that extends HTMLElement: this element has shadowDOM. With shadowDOM the styles are scoped. Basic HTMLElement does not have all button functionalities. For example, it does not support active element state (which is used to animate button click). I decided to wrap standard button in the customElement and style it.
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        <h3>Button wrapped in the custom HTMLElement</h3>
        <p>
          <dv4-custom-button
            onClick={()=>{alert('Default button')}}>
              Default button
          </dv4-custom-button>
          <dv4-custom-button primary
            onClick={()=>{alert('Primary button')}}>
              Primary button
          </dv4-custom-button>
          <dv4-custom-button danger
            onClick={()=>{alert('Danger button')}}>
              Danger button
          </dv4-custom-button>
        </p>
        <p>
          <dv4-custom-button
            onClick={()=>{alert('Icon Default Button')}}>
            <dv4-icon-camera></dv4-icon-camera>
            Icon Default Button
          </dv4-custom-button>
          <dv4-custom-button primary
            onClick={()=>{alert('Icon Primary Button')}}>
            <dv4-icon-checkmark></dv4-icon-checkmark>
            Icon Primary Button
          </dv4-custom-button>
          <dv4-custom-button danger
            onClick={()=>{alert('Icon Danger Button')}}>
            <dv4-icon-cancel-circle></dv4-icon-cancel-circle>
            Icon Danger Button
          </dv4-custom-button>
        </p>
      </Paragraph>
    </>
  );
};

export default Buttons;