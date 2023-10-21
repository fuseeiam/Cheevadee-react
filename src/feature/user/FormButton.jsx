export default function FormButton({ children, onClick }) {
    return (
        <button
            className="px-3 py-1.5 hover:bg-[#BD7416] text-white rounded-md"
            onClick={onClick}
        >
            {children}
        </button>
    );
}
