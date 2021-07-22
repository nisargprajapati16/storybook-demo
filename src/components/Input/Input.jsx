const Input = ({ size = 'medium', ...rest }) => (
    <div class={`ui input ${size}`}>
        <input {...rest} />
    </div>
)

export default Input
