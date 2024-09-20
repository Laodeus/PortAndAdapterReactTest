import React from 'react';
import ReactDOM from 'react-dom/client'; // Import de 'react-dom/client' pour React 18
import AuthComponent from './adaptateurs/Ui/AuthComponent';

const App = () => {
  return (
    <div>
      <h1>Hello, React with TypeScript and Parcel!</h1>
      <AuthComponent />
    </div>
  );
};

// Utilisation de createRoot à la place de ReactDOM.render
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!); // Utilisation de createRoot
root.render(<App />);
