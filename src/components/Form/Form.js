import React from "react";
import PropTypes from "prop-types";

const Form = ({ handleOnSubmit, handleInputChange, inputText, inputError }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <label>Ingrese texto</label>
        <input
          type="text"
          name="text"
          value={inputText}
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <span className="text-danger">{inputError}</span>

      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;

Form.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired,
  inputError: PropTypes.string.isRequired,
};
