import React from "react";
import "./Searchbar.css";
const Styles = ["search-style-primary", "search-style-secondry"];
const Sizes = ["search-size-primary", "search-size-secondry"];
function Searchbar({
  serachStyle,
  serachSize,
  placeholder,
  locationIcon,
  detectIcon,
}) {
  const checkSearchStyle = Styles.includes(serachStyle)
    ? serachStyle
    : Styles[0];
  const checkSearchSize = Sizes.includes(serachSize) ? serachSize : Sizes[0];
  return (
    <>
      <div className={`${checkSearchSize} + ${checkSearchStyle}`}>
        <span style={{ display: locationIcon ? locationIcon : "none" }}>
          {locationIcon}
        </span>
        <input type="search" placeholder={placeholder} />{" "}
        <span style={{ display: detectIcon ? detectIcon : "none" }}>
          {detectIcon}
        </span>
      </div>
    </>
  );
}

export default Searchbar;
