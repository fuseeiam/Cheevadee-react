import axios from '../../config/axios'
import React from 'react'
import { useState } from 'react'

export default function CreateRoomModal({ roomObj, open, setIsOpen }) {
    const [input, setInput] = useState({})
    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSumitForm = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            for (let key in input) {
                if (input[key]) {
                    formData.append(`${key}`, input[key]);
                }
            }
            const res = await axios.post('/admin/createroom', formData)
            setInput(res.data.room)
            setIsOpen(false)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {open && (

                <>
                    <div className="fixed inset-0 bg-black/70 z-[30]"></div>
                    <div className='absolute z-[50] left-[100px]'>
                        <div className="flex justify-center px-40 py-10">
                            <form className="bg-white w-full rounded-md p-5 outline-none border border-gray-300 flex" onSubmit={handleSumitForm} >
                                <div className="flex flex-col items-start">
                                    <div className='flex gap-4 items-center'>
                                        <p>Room Type : </p>
                                        <input className="border rounded-lg p-1 w-[400px]" type="text" onChange={handleChangeInput} name="roomtype" value={input.roomtype} />
                                    </div>
                                    <div >
                                        <div className='flex'>

                                            <img src={input.picture} alt="" className="py-5 w-[600px] h-[400px] relative" />
                                            <input type="file" name='picture' value={input.picture} className='absolute bottom-[420px] left-[400px]' placeholder="Picture" />
                                        </div>
                                    </div>
                                    <div className="flex py-1">
                                        <div className="flex">
                                            <img src="/src/icons/person-50.png" alt="" className="w-[30px] h-[30px]" />
                                            <h2 className="text-[#63635D] py-0.5 font-light">X 2</h2>
                                        </div>
                                        <div className="flex px-5 gap-5">
                                            <img src="/src/icons/bedroom-50.png" alt="" className="w-[30px] h-[30px]" />
                                            <div className='flex gap-4 items-center'>
                                                <input className="border rounded-lg p-1 w-[70px]" type="text" onChange={handleChangeInput} name="bed" value={input.bed} />
                                            </div>
                                        </div>
                                        <div className="flex ">
                                            <img src="/src/icons/shower-50.png" alt="" className="w-[30px] h-[30px]" />
                                            <h2 className="text-[#63635D] px-2.5 py-0.5 font-light">Shower</h2>
                                        </div>
                                    </div>
                                    <div className="flex py-1 gap-3">
                                        <img src="/src/icons/roomsize-50.png" alt="" className="w-[30px] h-[30px]" />
                                        <div className='flex gap-4 items-center'>
                                            <p>Room size : </p>
                                            <input className="border rounded-lg p-1 w-[100px]" type="text" onChange={handleChangeInput} name="roomSize" value={input.roomSize} />
                                        </div>
                                    </div>
                                    <div className="flex py-1 gap-3">
                                        <img src="/src/icons/window-50.png" alt="" className="w-[30px] h-[30px]" />
                                        <div className='flex gap-4 items-center'>
                                            <p>Room view : </p>
                                            <input className="border rounded-lg p-1 w-[100px]" type="text" onChange={handleChangeInput} name="view" value={input.view} />
                                        </div>
                                    </div>
                                    <div className="flex py-1">
                                        <h2 className="text-[#C18638] hover:text-[#BD7416] hover:underline py-0.5 font-light"
                                        >
                                            room details & photos
                                        </h2>

                                    </div>
                                </div>

                                <div className="flex flex-col px-5 flex-1 ">
                                    <div className="mt-5 px-6 flex justify-end">
                                        <h1 className="text-lg font-light">Per Room / Night</h1>
                                    </div>
                                    <hr className="border-bg-[#63635D] mr-2" />
                                    <div>
                                        <div className=" py-5">
                                            <h1 className="text-xl ">You will get...</h1>
                                            <div className="flex">
                                                <div>
                                                    <div className="flex py-2.5">
                                                        <img src="/src/icons/dining-room-50.png" alt="" className="w-[25px] h-[25px]" />
                                                        <h2 className="text-[#63635D] font-light px-2.5">Daily breakfast</h2>
                                                    </div>
                                                    <div className="flex py-2.5">
                                                        <img src="/src/icons/wifi-48.png" alt="" className="w-[25px] h-[25px]" />
                                                        <h2 className="text-[#63635D] font-light px-2.5">Complimentary Hi Speed WIFI</h2>
                                                    </div>
                                                    <div className="flex py-2.5">
                                                        <img src="/src/icons/no-smoking-48.png" alt="" className="w-[25px] h-[25px]" />
                                                        <h2 className="text-[#63635D] font-light px-2.5">Non-Smoking</h2>
                                                    </div>
                                                    <div className="flex py-2.5">
                                                        <img src="/src/icons/plus-48.png" alt="" className="w-[25px] h-[25px]" />
                                                        <h2 className="text-[#63635D] font-light px-2.5">Early check-in & late check-out subject to availability</h2>
                                                    </div>
                                                    <div className="flex py-2.5">
                                                        <img src="/src/icons/plus-48.png" alt="" className="w-[25px] h-[25px]" />
                                                        <h2 className="text-[#63635D] font-light px-2.5">Welcome drink</h2>
                                                    </div>
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end gap-10">
                                            <div className="flex flex-col">
                                                <div className="flex gap-2.5">
                                                    <div>
                                                        <span className="text-2xl font-semibold "> THB </span>
                                                    </div>
                                                    <div>
                                                        <div className='flex gap-4 items-center'>
                                                            <input className="border rounded-lg p-1 w-[150px]" type="text" onChange={handleChangeInput} name="price" value={input.price} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span>tax & fees included</span>
                                                </div>
                                            </div>



                                        </div>
                                        <hr className="border-bg-[#63635D] mt-2.5 mr-2" />
                                        <div className="flex flex-col mt-5 text-sm font-light">
                                            <span className="hover:underline font-semibold">Booking Condition</span>
                                            <span>100% advanced payment is required.<br />
                                                Free cancellation within 30 days prior to check-in date. If cancelled within 14 days prior to check-in date, 100 percent of total amount will be charged. No amendment. Non-refundable. No show, 100 percent of total amount will be charged.</span>
                                        </div>
                                        <div className='flex justify-end gap-5 pt-5'>
                                            <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl py-4 px-10 rounded-md text-center font-li">
                                                Create
                                            </button>
                                            <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl py-4 px-10 rounded-md text-center font-li" onClick={() => setIsOpen(false)}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </>
            )}
        </>
    )
}
