const Button = ({ variant = 'primary', children, ...rest }) => (
    <button className={`ui button ${variant}`} {...rest}>
        {children}
    </button>
)

export default Button
