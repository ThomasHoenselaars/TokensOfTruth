import React, { useEffect } from 'react';
import { sendMessage } from './helpers/sendMessage';
import './scss/main.scss';

export const App: React.FC = () => {
  const [theme, setTheme] = React.useState('');

  const handleTextArea = (e: any) => {
    setTheme(e.target.value);
  }

  const handleSubmit = () => sendMessage('createTheme', theme);

  useEffect(() => {
    sendMessage('pluginLoaded', null);
  }, [])

  return (
    <div className="app">
      <h2>TokensOfTruth</h2>
      <textarea name="text-input" id="text-input" cols={30} rows={10} placeholder="Paste Theme JSON..." value={theme} onChange={handleTextArea}></textarea>
      <button onClick={handleSubmit}>send msg</button>
    </div>
  );
}
