import React from "react";
import { useState } from "react";
const withPopup = (WrappedComponent) => {
  return function ComponentWithPopup({ popupStyle = {}, ...props }) {
    const [showPopup, setShowPopup] = useState(true);

    return showPopup ? (
      <div
        className="popup"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...popupStyle,
        }}
      >
        <div
          style={{
            position: "relative",
            background: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
              background: "transparent",
              border: "none",
              fontSize: "16px",
            }}
            onClick={() => setShowPopup(false)}
          >
            X
          </button>
          <WrappedComponent {...props} />
        </div>
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default withPopup;
