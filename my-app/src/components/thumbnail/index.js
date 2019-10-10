import React from "react";
import "./style.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
function Thumbnail(props) {
 console.log(props)
  return (
    <div 
      className="thumbnail click-item shake"
      ischecked={props.ischecked}
      role="img"
      aria-label="click item"
      style={{
        backgroundImage: `url(${props.src})`
      }}
    />
  );
}

export default Thumbnail;