export default function LoginInput({
    placeholder,
    type = 'text',
    value,
    onchange
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="block w-full rounded-md px-4 py-3 outline-none border border-gray-300 focus:right-2
         focus:ring-[#C18638] focus:border-[#BD7416]"
            value={value}
            onChange={onchange}
        />
    );
}
