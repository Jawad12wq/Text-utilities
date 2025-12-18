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
        {/* Brand */}
        <span className="navbar-brand fw-bold">{props.title}</span>

        {/* Right section */}
        <div className="d-flex align-items-center gap-3">

          {/* Stats */}
          <span className="badge bg-primary">
            Words: {props.wordCount}
          </span>
          <span className="badge bg-secondary">
            Chars: {props.charCount}
          </span>

          {/* Mode label */}
          <span
            className={`fw-semibold ${
              props.mode === 'dark' ? 'text-light' : 'text-dark'
            }`}
          >
            {props.mode === 'dark' ? 'Dark' : 'Light'}
          </span>

          {/* Dark mode toggle (CONTROLLED) */}
          <label className="switch">
            <input
              type="checkbox"
              onChange={props.toggleMode}
              checked={props.mode === 'dark'}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}
