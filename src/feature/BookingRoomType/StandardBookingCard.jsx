import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function StandardBookingCard() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* standard twin bed */}
      <div>
        <div className="bg-[#21395D] flex justify-center px-40 py-10">
          <div className="bg-white w-full rounded-md p-5 outline-none border border-gray-300 flex ">
            <div className="flex flex-col items-start">
              <div>
                <h1 className="flex justify-start text-2xl font-light">STANDRAD ROOM  - No Window</h1>
              </div>
              <div >
                <img src="/src/assets/room-standard-1.jpeg" alt="" className="py-5 w-[600px] h-[400px]" />
              </div>
              <div className="flex py-1">
                <div className="flex">
                  <img src="/src/icons/person-50.png" alt="" className="w-[30px] h-[30px]" />
                  <h2 className="text-[#63635D] py-0.5 font-light">X 2</h2>
                </div>
                <div className="flex px-5">
                  <img src="/src/icons/single-bed-50.png" alt="" className="w-[30px] h-[30px]" />
                  <img src="/src/icons/single-bed-50.png" alt="" className="w-[30px] h-[30px]" />
                  <h2 className="text-[#63635D] px-2.5 py-0.5 font-light">2 twin beds</h2>
                </div>
                <div className="flex ">
                  <img src="/src/icons/shower-50.png" alt="" className="w-[30px] h-[30px]" />
                  <h2 className="text-[#63635D] px-2.5 py-0.5 font-light">Shower</h2>
                </div>
              </div>
              <div className="flex py-1">
                <img src="/src/icons/roomsize-50.png" alt="" className="w-[30px] h-[30px]" />
                <h2 className="text-[#63635D]  px-2.5 py-0.5 font-light">Room size: 29 m²/312 ft²</h2>
              </div>
              <div className="flex py-1">
                <img src="/src/icons/window-50.png" alt="" className="w-[30px] h-[30px]" />
                <h2 className="text-[#63635D]  px-2.5 py-0.5 font-light">Street view</h2>
              </div>
              <div className="flex py-1">
                <h2 className="text-[#C18638] hover:text-[#BD7416] hover:underline py-0.5 font-light"
                //onClick={() => setIsOpen(true)}
                >
                  room details & photos
                </h2>
                {/* <ModalRoomDetail title="room details & photos" open={isOpen} onClose={() => setIsOpen(false)}>
                  <RoomDetailT1 />
                </ModalRoomDetail> */}
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
                        <span className="text-4xl font-bold">2,450</span>
                      </div>
                    </div>
                    <div>
                      <span>tax & fees included</span>
                    </div>
                  </div>
                  <Link to="reserve">
                    <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl py-4 px-10 rounded-md text-center font-li">
                      RESERVE
                    </button>
                  </Link>
                </div>
                <hr className="border-bg-[#63635D] mt-2.5 mr-2" />
                <div className="flex flex-col mt-5 text-sm font-light">
                  <span className="hover:underline font-semibold">Booking Condition</span>
                  <span>100% advanced payment is required.<br />
                    Free cancellation within 30 days prior to check-in date. If cancelled within 14 days prior to check-in date, 100 percent of total amount will be charged. No amendment. Non-refundable. No show, 100 percent of total amount will be charged.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* standard king bed */}
      <div>
        <div className="bg-[#21395D] flex justify-center px-40 py-10">
          <div className="bg-white w-full rounded-md p-5 outline-none border border-gray-300 flex ">
            <div className="flex flex-col items-start">
              <div>
                <h1 className="flex justify-start text-2xl font-light">STANDRAD ROOM  - No Window</h1>
              </div>
              <div >
                <img src="/src/assets/room-standard-6.jpeg" alt="" className="py-5 w-[600px] h-[400px]" />
              </div>
              <div className="flex py-1">
                <div className="flex">
                  <img src="/src/icons/person-50.png" alt="" className="w-[30px] h-[30px]" />
                  <h2 className="text-[#63635D] py-0.5 font-light">X 2</h2>
                </div>
                <div className="flex px-5">
                  <img src="/src/icons/bedroom-50.png" alt="" className="w-[30px] h-[30px]" />
                  <h2 className="text-[#63635D] px-2.5 py-0.5 font-light">1 king bed</h2>
                </div>
                <div className="flex ">
                  <img src="/src/icons/shower-50.png" alt="" className="w-[30px] h-[30px]" />
                  <h2 className="text-[#63635D] px-2.5 py-0.5 font-light">Shower</h2>
                </div>
              </div>
              <div className="flex py-1">
                <img src="/src/icons/roomsize-50.png" alt="" className="w-[30px] h-[30px]" />
                <h2 className="text-[#63635D]  px-2.5 py-0.5 font-light">Room size: 29 m²/312 ft²</h2>
              </div>
              <div className="flex py-1">
                <img src="/src/icons/window-50.png" alt="" className="w-[30px] h-[30px]" />
                <h2 className="text-[#63635D]  px-2.5 py-0.5 font-light">Street view</h2>
              </div>
              <div className="flex py-1">
                <h2 className="text-[#C18638] hover:text-[#BD7416] hover:underline py-0.5 font-light">room details & photos</h2>
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
                        <span className="text-4xl font-bold">2,450</span>
                      </div>
                    </div>
                    <div>
                      <span>tax & fees included</span>
                    </div>
                  </div>
                  <Link to=":reserve">
                    <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl py-4 px-10 rounded-md text-center font-li">
                      RESERVE
                    </button>
                  </Link>
                </div>
                <hr className="border-bg-[#63635D] mt-2.5 mr-2" />
                <div className="flex flex-col mt-5 text-sm font-light">
                  <span className="hover:underline font-semibold">Booking Condition</span>
                  <span>100% advanced payment is required.<br />
                    Free cancellation within 30 days prior to check-in date. If cancelled within 14 days prior to check-in date, 100 percent of total amount will be charged. No amendment. Non-refundable. No show, 100 percent of total amount will be charged.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* standard balcony king bed */}
      <div>
        <div className="bg-[#21395D] flex justify-center px-40 py-10">
          <div className="bg-white w-full rounded-md p-5 outline-none border border-gray-300 flex ">
            <div className="flex flex-col items-start">
              <div>
                <h1 className="flex justify-start text-2xl font-light">STANDRAD ROOM  - With Balcony</h1>
              </div>
              <div >
                <img src="/src/assets/room-standard-balcony.jpeg" alt="" className="py-5 w-[600px] h-[400px]" />
              </div>
              <div className="flex py-1">
                <div className="flex">
                  <img src="/src/icons/person-50.png" alt="" className="w-[30px] h-[30px]" />
                  <h2 className="text-[#63635D] py-0.5 font-light">X 2</h2>
                </div>
                <div className="flex px-5">
                  <img src="/src/icons/bedroom-50.png" alt="" className="w-[30px] h-[30px]" />
                  <h2 className="text-[#63635D] px-2.5 py-0.5 font-light">1 king bed</h2>
                </div>
                <div className="flex ">
                  <img src="/src/icons/shower-50.png" alt="" className="w-[30px] h-[30px]" />
                  <h2 className="text-[#63635D] px-2.5 py-0.5 font-light">Shower</h2>
                </div>

              </div>
              <div className="flex py-1">
                <img src="/src/icons/roomsize-50.png" alt="" className="w-[30px] h-[30px]" />
                <h2 className="text-[#63635D]  px-2.5 py-0.5 font-light">Room size: 29 m²/312 ft²</h2>
              </div>
              <div className="flex py-1">
                <img src="/src/icons/window-50.png" alt="" className="w-[30px] h-[30px]" />
                <h2 className="text-[#63635D]  px-2.5 py-0.5 font-light">City View</h2>
              </div>
              <div className="flex py-1">
                <h2 className="text-[#C18638] hover:text-[#BD7416] hover:underline py-0.5 font-light">room details & photos</h2>
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
                        <span className="text-4xl font-bold">3,150</span>
                      </div>
                    </div>
                    <div>
                      <span>tax & fees included</span>
                    </div>
                  </div>
                  <Link to=":reserve">
                    <button className="bg-[#C18638] hover:bg-[#BD7416] text-white text-xl py-4 px-10 rounded-md text-center font-li" >
                      RESERVE
                    </button>
                  </Link>
                </div>
                <hr className="border-bg-[#63635D] mt-2.5 mr-2" />
                <div className="flex flex-col mt-5 text-sm font-light">
                  <span className="hover:underline font-semibold">Booking Condition</span>
                  <span>100% advanced payment is required.<br />
                    Free cancellation within 30 days prior to check-in date. If cancelled within 14 days prior to check-in date, 100 percent of total amount will be charged. No amendment. Non-refundable. No show, 100 percent of total amount will be charged.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

