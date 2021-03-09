import PluginAPI from '@figma/plugin-typings';

figma.showUI(__html__, {
  width: 350,
  height: 540,
});

figma.ui.onmessage = async (msg: MessageEvent) => {
  const oldStyles = figma.getLocalPaintStyles().map((style) => style);

  switch (msg.type) {
    case 'createTheme':
      console.log(msg.type)
      console.log(msg.data)
      break;

    case 'pluginLoaded':
      console.log('loaded')
      await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
      break;

    default:
      break;
  }

  // Make sure to close the plugin when you're done.
  // figma.closePlugin();
};



