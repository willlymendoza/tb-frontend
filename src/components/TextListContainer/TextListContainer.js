import React from "react";
import PropTypes from "prop-types";
import TextList from "./TextList";

const TextListContainer = ({ textArray }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1 className="display-4" data-testid="title">
          Listado de textos
        </h1>
      </div>
      <div className="col-md-12">
        <TextList textArray={textArray} />
      </div>
    </div>
  );
};

export default TextListContainer;

TextListContainer.propTypes = {
  textArray: PropTypes.array.isRequired,
};
