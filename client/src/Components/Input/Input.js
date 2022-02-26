const Input = ({ name, _ref, type, label }) => (
    <div className="input-div">
        { name && <label className="input-label" htmlFor={name}>{label}</label> }
        { type == 'file' ? <label className="file-upload" htmlFor={name}>Upload</label> : '' }
        <input required
            name={name}
            ref={_ref}
            id={name}
            type={type}
        />
    </div>
)
export default Input