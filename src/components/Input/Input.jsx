import "./Input.css"

const Input = ({ size = 'medium', ...rest }) => (
    <input className={`input ${size}`} {...rest} />
);

export default Input;
