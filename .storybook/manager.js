import { addons } from '@storybook/addons';
import dv4allTheme from './dv4allTheme';


/**
 * See for all config props
 * https://storybook.js.org/docs/configurations/options-parameter/
 */
addons.setConfig({
  theme: dv4allTheme,
  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: 'right',
});