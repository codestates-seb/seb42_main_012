function TextInput({
  placeholder,
  type,
  inputId,
  text,
  classname,
  content,
  setContent,
}) {
  const handleChange = value => {
    setContent(value);
  };
  return (
    <>
      <p className="mt-2 text-sm text-[var(--main)]">{text}</p>
      <input
        id={inputId}
        type={
          type === 'file'
            ? 'file'
            : type === 'password'
            ? 'password'
            : type === 'email'
            ? 'email'
            : 'text'
        }
        onChange={handleChange}
        placeholder={placeholder}
        className={classname}
        value={content}
      />
    </>
  );
}

export default TextInput;
