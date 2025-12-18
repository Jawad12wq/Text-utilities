import React from 'react';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm ${
        props.mode === 'dark'
          ? 'navbar-dark bg-dark'
          : 'navbar-light bg-light'
      }`}
    >
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">{props.title}</span>

        {/* Stats */}
        <div className="d-flex align-items-center gap-3">
          <span className="badge bg-primary">
            Words: {props.wordCount}
          </span>
          <span className="badge bg-secondary">
            Chars: {props.charCount}
          </span>

          {/* Dark mode toggle */}
          <label className="switch">
            <input type="checkbox" onChange={props.toggleMode} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}
