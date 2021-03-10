import PluginAPI from '@figma/plugin-typings';
import { ITheme } from './data/data'
import { addColors } from './helpers/addColors';
import { deleteTheme } from './helpers/deleteTheme';
import { AppMessages } from './constants/messages'

figma.showUI(__html__, {
  width: 350,
  height: 540,
});

let styles: Array<PaintStyle> = [];

styles = figma.getLocalPaintStyles().map((style) => style);

figma.ui.onmessage = async (msg: MessageEvent<ITheme>) => {

  switch (msg.type) {
    case AppMessages.CREATE_THEME:
      addColors(msg.data.colors, styles);
      figma.closePlugin();
      break;

      case AppMessages.DELETE_THEME:
      deleteTheme(styles);
      figma.closePlugin();
      break;

    case AppMessages.PLUGIN_LOADED:
      console.log('loaded')
      await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
      break;

    default:
      break;
  }

  // Make sure to close the plugin when you're done.

};



