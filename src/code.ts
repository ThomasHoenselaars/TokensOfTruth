// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 350,
  height: 540,
});

figma.ui.onmessage = async (msg: MessageEvent) => {
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
  const oldStyles = figma.getLocalPaintStyles().map((style) => style);

  if (msg.type === 'create-theme') {
    console.log(oldStyles)
  }

  switch (msg.type) {
    case 'create-theme':
      console.log(msg.type)
      break;

    default:
      break;
  }

  // Make sure to close the plugin when you're done.
  // figma.closePlugin();
};



