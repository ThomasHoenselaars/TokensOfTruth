import React from 'react';
import { sendMessage } from './helpers/sendMessage';

export const App: React.FC = () => {

  return (
    <div className="app">
      I am the app
      <button onClick={() => sendMessage('create-theme', null)}>send msg</button>
    </div>
  );
}
