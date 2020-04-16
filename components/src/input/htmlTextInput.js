import cssTextInput from './cssTextInput'

const htmlInput = ({name='', label='Default', value='', message=''}) =>(`
  <style>
    ${cssTextInput}
  </style>
  <div class="dv4-input">
    <input type="text" id="${name}" name="${name}" value="${value}"/>
    ${value ==='' ? '<label>' : '<label class="shrink">'}
      ${label}
    </label>
    <div class="dv4-message">${message}</div>
  </div>
`)

export default htmlInput