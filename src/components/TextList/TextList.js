import React from "react";
import PropTypes from "prop-types";

const TextList = ({ textArray }) => {
  return (
    <ul className="list-group" data-testid="text-list">
      {textArray.map((item, index) => (
        <li key={index} className="list-group-item" data-testid="text-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TextList;

TextList.propTypes = {
  textArray: PropTypes.array.isRequired,
};
