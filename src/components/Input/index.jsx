const Input = ({ register, name, ...rest }) => {
  return (
    <>
      <input type="text" {...register(name)} {...rest} />
    </>
  );
};
export default Input;
