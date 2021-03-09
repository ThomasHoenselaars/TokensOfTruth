var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
    width: 350,
    height: 540,
});
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    const oldStyles = figma.getLocalPaintStyles().map((style) => style);
    if (msg.type === 'create-theme') {
        console.log(oldStyles);
    }
    switch (msg.type) {
        case 'create-theme':
            console.log(msg.type);
            break;
        default:
            break;
    }
    // Make sure to close the plugin when you're done.
    figma.closePlugin();
});
