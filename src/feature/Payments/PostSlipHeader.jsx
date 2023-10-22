import React from 'react'
import { EllipsisIcon } from '../../icons';
import useDropdown from '../../hooks/use-dropdown';


export default function PostSlipHeader({ postObj, deletePost }) {
    const { dropDownE1, isOpen, setIsOpen } = useDropdown();
    const handleClickDelete = () => {
        deletePost(postObj.id);
    };

    return (
        <div className="flex gap-4">
            {authUser.id === postObj.user.id && (
                <div className="relative" ref={dropDownE1}>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-8 w-8 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full flex items-center justify-center">
                        <EllipsisIcon className="fill - gray - 500" />
                    </div>
                    {isOpen && (
                        <ul className=" bg-white absolute right-0 translate-y-1 border rounded-lg p-2 shadow w-36">
                            <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer"
                                onClick={handleClickDelete}
                            >
                                Delete
                            </li>
                        </ul>)}
                </div>
            )}
        </div>

    )
}
