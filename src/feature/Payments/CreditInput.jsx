export default function CreditInput({
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    hasError
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`block w-full border rounded-md outline-none px-20 py-3 text-xl
            focus:ring
            ${hasError
                    ? 'border-red-500 focus:ring-red-300'
                    : 'focus:ring-[#395988] focus:border-[#21395D] border-gray-300'
                }
        `}
            value={value}
            onChange={onChange}
            name={name}
        />
    );
}