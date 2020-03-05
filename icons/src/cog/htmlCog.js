
export default ({title='Cog'})=>(`
  <style>
    :host{
      display: inline-block;
    }
    /* SCALE SVG TO PARENT */
    svg{
      width:100%;
      height:100%;
    }
  </style>
  <svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64">
  <title>${title}</title>
  <path d="M58.362 38.141c-3.358-5.816-1.339-13.269 4.51-16.655l-6.289-10.893c-1.797 1.053-3.886 1.657-6.115 1.657-6.721 0-12.169-5.484-12.169-12.249h-12.579c0.017 2.088-0.505 4.205-1.622 6.141-3.358 5.816-10.822 7.794-16.679 4.422l-6.289 10.893c1.811 1.029 3.378 2.537 4.493 4.467 3.352 5.807 1.345 13.245-4.482 16.639l6.289 10.893c1.791-1.044 3.87-1.641 6.088-1.641 6.7 0 12.134 5.45 12.169 12.185h12.578c-0.005-2.067 0.517-4.161 1.623-6.076 3.352-5.807 10.798-7.787 16.651-4.438l6.289-10.893c-1.799-1.029-3.356-2.531-4.465-4.452zM32 44.958c-7.157 0-12.959-5.801-12.959-12.958s5.802-12.958 12.959-12.958c7.157 0 12.958 5.802 12.958 12.958s-5.801 12.958-12.958 12.958z"></path>
  </svg>
`)