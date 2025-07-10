import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  );
} else {
  // もし 'root' 要素が見つからなかった場合にエラーを投げる
  throw new Error("Root element with ID 'root' not found in the document.");
}