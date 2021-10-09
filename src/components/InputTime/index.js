import checkTimeInput from "../../utils/checkTimeInput";
import Input from "../Input";

const defaultLength = 3;

const InputTime = (props) => {
  const onConrolledChange = checkTimeInput(
    props.onChange,
    props.length || defaultLength
  );

  return <Input {...props} onChange={onConrolledChange} />;
};

export default InputTime;
