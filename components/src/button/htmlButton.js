
const htmlButton=`
  <style>
    :host{
      display: inline-block;
      border: 1px solid lightgrey;
      border-radius: 0.25rem;
      padding: 1rem;
      min-width: 3rem;
      min-height: 1rem;
      cursor: pointer;
    }
    :focus{
      border: 2px solid blue;
    }
    :hover{
      color: green;
    }
  </style>
  <slot>Default</slot>
`

export default htmlButton