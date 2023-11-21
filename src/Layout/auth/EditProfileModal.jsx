import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import axios from "../../config/axios";
import Loading from "../../components/Loading";
import { useRef } from "react";

export default function EditProfileModal({
    setIsOpen,
    open
}) {
    const [loading, setLoading] = useState(false);
    const [isHover, setIsHover] = useState(false);
    // const { authUser,setAuthUser } = useAuth();
    const { user, setUser } = useAuth();
    const fileEl = useRef(null);
    const [input, setInput] = useState({
        profileImage: user?.profileImage,
        firstName: user?.firstName,
        lastName: user?.lastName,
        mobile: user?.mobile || ""
    });
    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmitForm = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();

            setLoading(true);
            for (let key in input) {
                if (input[key]) {
                    formData.append(`${key}`, input[key]);
                }
            }
            console.log(formData);
            const res = await axios.patch("auth/editprofile", formData);
            setProfileData({
                ...profileData,
                firstName: res.data.updateProfile.firstName,
                lastName: res.data.updateProfile.lastName,
                mobile: res.data.updateProfile.mobile,
                profileImage: res.data.updateProfile.profileImage,
            });
            setUser(res.data.updateProfile);
            setIsOpen(false);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            {open &&
                (
                    <>
                        <div className="fixed inset-0 bg-black/70 z-[30]"></div>
                        <div className="fixed z-[30] min-h-full inset-0 flex justify-center items-center mt-20">
                            <form className="bg-gray-200 p-5 w-[600px] rounded-xl" onSubmit={handleSubmitForm} >
                                {loading && <Loading />}
                                <div className="flex flex-col gap-5">
                                    <div className="text-2xl font-bold  flex justify-center">Edit Profile</div>
                                    <main>
                                        <div className="flex justify-center">


                                            <div onMouseEnter={() => {
                                                setIsHover(true);
                                            }}
                                                onMouseLeave={() => {
                                                    setIsHover(false);
                                                }}
                                                onClick={() => fileEl.current.click()}
                                                className="w-[120px] aspect-square rounded-full overflow-hidden border-2 border-textGrayDark cursor-pointer content-center relative whiteDivShadow">
                                                {isHover && (
                                                    <div className="flex justify-center cursor-pointer">
                                                        <div className="bg-gray-300  hover:bg-gray-400 w-[120px] h-[120px] rounded-full"></div>
                                                        <div className="text-white font-bold text-xl absolute  -translate-y-1/2 top-1/2">Edit</div>
                                                    </div>
                                                )}
                                                {input.profileImage instanceof File ? (
                                                    <img
                                                        src={URL.createObjectURL(input?.profileImage)}
                                                        className="object-cover w-full h-full"
                                                    />
                                                ) : input.profileImage ? (
                                                    <img
                                                        src={input.profileImage}
                                                        className="object-cover w-full h-full"
                                                    />
                                                ) : (
                                                    // <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                                    //     <div className="text-center text-sm whitespace-wrap">
                                                    //         ProfileImage
                                                    //     </div>
                                                    // </div>
                                                    <div className="flex justify-center cursor-pointer">
                                                        <div className="bg-gray-300  hover:bg-gray-400 w-[120px] h-[120px] rounded-full"></div>
                                                        <div className="text-white font-bold text-xl absolute -translate-y-1/2 top-1/2">Edit</div>
                                                    </div>
                                                )
                                                }
                                            </div>
                                            <input
                                                type="file"
                                                className="hidden"
                                                name="profileImage"
                                                ref={fileEl}
                                                onChange={(e) => {
                                                    if (e.target.files[0]) {
                                                        setInput({
                                                            ...input,
                                                            [e.target.name]: e.target.files[0],
                                                        });
                                                    }
                                                }}
                                            />


                                        </div>
                                        <div className="flex py-3 gap-5">
                                            <div className="flex flex-col">
                                                <p>First name</p>
                                                <input
                                                    type="text"
                                                    placeholder="First name"
                                                    name="firstName"
                                                    value={input.firstName}
                                                    onChange={handleChangeInput}
                                                    className=" border-2 p-2 border-[#C18638]  w-full outline-none rounded-md"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <p>Last name</p>
                                                <input
                                                    type="text"
                                                    placeholder="Last name"
                                                    name="lastName"
                                                    value={input.firstName}
                                                    onChange={handleChangeInput}
                                                    className=" border-2 p-2 border-[#C18638] w-full outline-none rounded-md"
                                                />
                                            </div>

                                        </div>
                                        <div className="flex flex-col ">
                                            <p>Mobile</p>
                                            <input
                                                type="text"
                                                placeholder="mobile"
                                                name="mobile"
                                                value={input.mobile}
                                                onChange={handleChangeInput}
                                                className="py-2.5 border-2 p-2 border-[#C18638] w-full outline-none rounded-md"
                                            />

                                        </div>
                                    </main>

                                    <div className="flex gap-3 ">
                                        <button className="bg-[#C18638] hover:bg-[#BD7416] p-2 flex flex-1 text-white rounded-xl cursor-pointer justify-center">Submit</button>
                                        <button className="bg-white p-2 rounded-xl flex flex-1 text-[#C18638] cursor-pointer justify-center" onClick={() => setIsOpen(false)}>Cancel</button>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </form>
                        </div>

                    </>
                )
            }
        </>
    );
}