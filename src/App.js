import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('');
  const [alert, setAlert] = useState(null);

  const setAlertMessage = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    console.log('toggleMode called. current mode:', mode);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0f172a';
      setAlertMessage('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f8fafc';
      setAlertMessage('Light mode has been enabled', 'success');
    }
  };

  const wordCount =
    text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        wordCount={wordCount}
        charCount={text.length}
      />

      <div className="container my-2">
        <Alert alert={alert} />
      </div>

      <div className="container my-4">
        <TextForm
          heading="Smart Text Analyzer"
          mode={mode}
          text={text}
          setText={setText}
        />
      </div>
    </>
  );
}

export default App;
