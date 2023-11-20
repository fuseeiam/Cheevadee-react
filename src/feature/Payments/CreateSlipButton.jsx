import { useState } from 'react';
import Modal from '../../components/Modal';
import PostSlipForm from './PostSlipForm';


function Button({ children, onClick }) {
    return (
        <div
            className='bg-gray-200 hover:bg-gray-300 flex-1 rounded-full text-gray-500 px-3 py-1.5 cursor-pointer flex items-center'
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default function CreateSlipButton({ input, setInput, file, setFile }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Upload Slip
            </Button>

            <Modal
                title="Upload Slip"
                open={isOpen}
                maxWidth={32}
                onClose={() => setIsOpen(false)}
            >
                <PostSlipForm input={input} setInput={setInput} isOpen={isOpen} setIsOpen={setIsOpen} file={file} setFile={setFile} />
            </Modal>
        </div>
    )
}
