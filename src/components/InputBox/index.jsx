function InputBox({type, id, value, placeholder, action}) {
    return (
        <input
            type={type}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={action}
            className="border-2 rounded border-gray-200 p-2"
        />
    )
}

export default InputBox