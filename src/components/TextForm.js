import React from 'react';

export default function TextForm(props) {
  const text = props.text;
  const setText = props.setText;

  const wordCount =
    text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  const readTime = (0.008 * wordCount).toFixed(2);

  // Capitalize each word
  const handleCapitalize = () => {
    const newText = text
      .toLowerCase()
      .split(' ')
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(' ');
    setText(newText);
  };

  // Extract only numbers
  const handleNumbersOnly = () => {
    const numbers = text.replace(/[^0-9]/g, '');
    setText(numbers);
  };

  return (
    <>
      <div
        className="p-4 rounded shadow-sm"
        style={{
          backgroundColor: props.mode === 'dark' ? '#020617' : 'white',
          color: props.mode === 'dark' ? '#e5e7eb' : '#111827'
        }}
      >
        <h2 className="mb-2">{props.heading}</h2>

        {/* FIXED text color */}
        <p
          style={{
            color: props.mode === 'dark' ? '#cbd5e1' : '#4b5563'
          }}
        >
          Analyze and transform your text instantly.
        </p>

        {/* Textarea */}
        <textarea
          className="form-control mb-3"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            backgroundColor: props.mode === 'dark' ? '#020617' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
            border: '1px solid #64748b'
          }}
        />

        {/* Utilities */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button className="btn btn-primary" onClick={() => setText(text.toUpperCase())}>
            Uppercase
          </button>

          <button className="btn btn-secondary" onClick={() => setText(text.toLowerCase())}>
            Lowercase
          </button>

          <button className="btn btn-info" onClick={handleCapitalize}>
            Capitalize
          </button>

          <button className="btn btn-warning" onClick={() => setText(text.split(/\s+/).join(' '))}>
            Remove Spaces
          </button>


          <button className="btn btn-success" onClick={() => navigator.clipboard.writeText(text)}>
            Copy
          </button>

          <button className="btn btn-danger" onClick={() => setText('')}>
            Clear
          </button>
        </div>

        {/* Analytics */}
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>{wordCount}</h5>
              <small>Words</small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>{text.length}</h5>
              <small>Characters</small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5>{readTime} min</h5>
              <small>Read Time</small>
            </div>
          </div>
        </div>
      </div>

      {/* PREVIEW (FIXED COLOR) */}
      <div className="mt-4">
        <h4
          style={{
            color: props.mode === 'dark' ? '#e5e7eb' : '#111827'
          }}
        >
          Preview
        </h4>

        <p
          className="border rounded p-3"
          style={{
            backgroundColor: props.mode === 'dark' ? '#020617' : '#f8fafc',
            color: props.mode === 'dark' ? '#e5e7eb' : '#111827'
          }}
        >
          {text.length > 0 ? text : 'Nothing to preview'}
        </p>
      </div>
    </>
  );
}
