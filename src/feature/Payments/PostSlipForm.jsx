import axios from '../../config/axios';
import Loading from '../../components/Loading';
import { ImageIcon } from '../../icons';
import { useState, useRef } from 'react';


export default function PostSlipForm({ input, setInput, isOpen, setIsOpen, file, setFile }) {

    const [loading, setLoading] = useState(false);
    const fileEl = useRef(null);




    return (
        <>
            {loading && <Loading />}
            {isOpen && < div className="flex flex-col gap-4" >
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
                            setInput({ ...input, paymentSlip: e.target.files[0] }
                            )
                            console.log(e.target.files[0]);
                            setFile(e.target.files[0]);
                        }
                    }}
                />
                <button className="bg-[#C18638] hover:bg-[#BD7416] text-white px-3 py-1.5 w-full rounded-lg font-semibold" onClick={() => setIsOpen(false)}>Upload slip</button>
            </ div>}
        </>
    )
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
