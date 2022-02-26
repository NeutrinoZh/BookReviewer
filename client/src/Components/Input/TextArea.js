const TextArea = ({ name, _ref, type, label }) => (
    <div className="textarea-div">
        { name && <label htmlFor={name}>{label}</label> }
        <textarea required
            name={name}
            ref={_ref}
            id={name}
            type={type}
        />
    </div>
)
export default TextArea