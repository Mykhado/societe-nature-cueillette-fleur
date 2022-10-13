export interface userChoice {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  inputType: string;
}

const Input = (props: userChoice) => {
  return (
    <div>
      <input
        type={props.inputType}
        value={props.inputValue}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default Input;
