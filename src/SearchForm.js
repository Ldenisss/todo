import React, { useCallback } from "react";
import "./index.css";
function SearchForm({ onSubmit, onChange, value }) {
  //useCallback
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit]
  );
  const handleChange = useCallback(
    e => {
      onChange(e.target.value);
    },
    [onChange]
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Введите задачу"
          onChange={handleChange}
          value={value}
        />
      </form>
    </div>
  );
}

export default SearchForm;
