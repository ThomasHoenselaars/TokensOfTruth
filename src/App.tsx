import React, { useEffect } from 'react';
import { sendMessage } from './helpers/sendMessage';
import { theme as testTheme } from './data/data'
import './scss/main.scss';

export const App: React.FC = () => {
  const [theme, setTheme] = React.useState(testTheme);

  const handleTextArea = (e: any) => {
    setTheme(e.target.value);
  }

  const handleSubmit = () => sendMessage('createTheme', theme);
  const handleDelete = () => sendMessage('deleteTheme', null);

  useEffect(() => {
    sendMessage('pluginLoaded', null);
  }, [])

  return (
    <div className="app">
      <h2>TokensOfTruth</h2>
      <textarea name="text-input" id="text-input" cols={30} rows={10} placeholder="Paste Theme JSON..." value={JSON.stringify(theme)} onChange={handleTextArea}></textarea>
      <button onClick={handleSubmit}>send msg</button>
      <button onClick={handleDelete}>delete styles</button>
    </div>
  );
}
