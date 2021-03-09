export const sendMessage = (type: string, data: any) => {
  parent.postMessage({
    pluginMessage:
    {
      type,
      data,
    },
  }, '*');
}