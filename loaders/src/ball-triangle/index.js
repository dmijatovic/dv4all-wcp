//SHARED lib
import {defineCustomElement} from '@dv4all/wcp-utils'
import newCustomLoader from '../shared/util/newCustomLoader'

//html template
import bodyHtml from './htmlBallTriangle'
//css styles
import styles from './cssBallTriangle'

// default props / attributes
const props = {
  //loader body html
  bodyHtml,
  //styles
  styles,
  //pass attributes to observe
  observedAttr: ['overlay','hide']
}

//create new customElement
const Dv4LoaderBallTriangle = newCustomLoader(props)

//register custom element
defineCustomElement('dv4-loader-ball-triangle', Dv4LoaderBallTriangle)

//need to export class to work with rollup
//additional benefit: class can be registered under custom name
//by user consuming the module. It will register same element twice
//which is not ideal (but only way at this point)
export default Dv4LoaderBallTriangle