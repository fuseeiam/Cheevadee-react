import Loading from '../../components/Loading';
import { ImageIcon } from '../../icons';
import { useState, useRef } from 'react';


export default function PostSlipForm({ onSuccess, onSubmit }) {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const fileEl = useRef(null);
    const handleSubmitForm = async e => {
        try {
            e.preventDefault();
            const formData = new FormData();
            if (file) {
                formData.append('image', file);
            }
            setLoading(true)
            await onSubmit(formData);
            onSuccess();
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            {loading && <Loading />}
            <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
                {file ? (
                    <div onClick={() => fileEl.current.click()} className="cursor-pointer">
                        <img src={URL.createObjectURL(file)} alt="post" />
                    </div>
                ) : (
                    <SelectImageButton onClick={() => fileEl.current.click()} />
                )}

                <input
                    type="file"
                    className="hidden"
                    ref={fileEl}
                    onChange={e => {
                        if (e.target.files[0]) {
                            setFile(e.target.files[0]);
                        }
                    }}
                />
                <CreateButton>Upload slip</CreateButton>
            </form>
        </>
    )
}

function CreateButton({ children }) {
    return (
        <button className="bg-[#C18638] hover:bg-[#BD7416] text-white px-3 py-1.5 w-full rounded-lg font-semibold">
            {children}
        </button>
    );
}

function SelectImageButton({ onClick }) {
    return (
        <div
            onClick={onClick}
            className="bg-gray-200 hover:bg-gray-300 rounded-lg py-12 flex flex-col items-center cursor-pointer gap-2"
        >
            <div className="bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center">
                <ImageIcon />
            </div>
            <span>Add Slip</span>
        </div>
    );
}
