import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0f172a';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f8fafc';
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
