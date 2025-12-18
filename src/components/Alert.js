import React from 'react';

export default function Alert(props) {
  if (!props.alert) {
    return null;
  }

  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type.toUpperCase()}:</strong> {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
