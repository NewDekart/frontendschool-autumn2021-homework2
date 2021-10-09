const checkTimeInput = (onChange, length) => (value) => {
  if (value.length <= length && !isNaN(value)) {
    if (onChange) {
      onChange(value);
    }
  }
};

export default checkTimeInput;
