import Input from "../Input";

const defaultLength = 3;

const InputTime = (props) => {

  const checkTimeInput = (onChange, length) => (value) => {
    if (value.length <= length && !isNaN(value)) {
      if (onChange) {
        onChange(value);
      }
    }
  };

  const onConrolledChange = checkTimeInput(
    props.onChange,
    props.length || defaultLength
  );

  return <Input {...props} onChange={onConrolledChange} />;
};

export default InputTime;
