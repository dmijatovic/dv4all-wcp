
const htmlButton=`
  <style>
    button[is='is-dv4-button']{
      display: inline-flex;
      align-items: end;
      justify-content: space-between;
      font-family: inherit;
      font-size: 1rem;
      border: 1px solid lightgrey;
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      min-width: 3rem;
      min-height: 1rem;
      cursor: pointer;
      background-color: transparent;
    }
    button[is='is-dv4-button']:focus{
      outline: none;
      box-shadow: 0 0 1pt 1pt var(--color-accent, lightblue);
    }
    button[is='is-dv4-button']:hover{
      color: var(--color-accent, lightblue);;
    }
    button[is='is-dv4-button']:active{
      transform: translate(1px,1px);
    }
    button[is='is-dv4-button'][primary]{
      background-color: var(--color-primary, darkblue);
      color: var(--color-primary-contrast, #fff);
    }
    button[is='is-dv4-button'] .dv4-icon-btn{
      height: 1rem;
      width: 1rem;
      margin-right: 0.75rem;
    }
    button[is='is-dv4-button'][primary] .dv4-icon-btn{
      fill: #fff;
    }
  </style>
`

export default htmlButton