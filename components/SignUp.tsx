import { useState } from "react";
import Image from 'next/image';
import SignUpImage from "../public/images/SignUpImage.jpg"
import google from "../public/images/google.jpg"



export default function SignUpComponent() {

    const [activeTab, setActiveTab] = useState("login");

    const openTab = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center bg-[#F8F8F8]">
                <div className="w-40 flex shadow-md items-start m-2">
                    <div className="flex border-3 border-gray-200">
                        <button
                            className={`${activeTab === "login"
                                ? "bg-[#FF7538] text-white"
                                : "text-gray-400 "
                                } py-2 px-4 text-lg tracking-wide font-semibold rounded-md focus:outline-none`}
                            onClick={() => openTab("login")}
                        >
                            Login
                        </button>
                        <button
                            className={`${activeTab === "signup"
                                ? "bg-[#FF7538] text-white"
                                : "text-gray-400 "
                                } py-2 px-4 text-lg tracking-wide font-semibold rounded-md focus:outline-none`}
                            onClick={() => openTab("signup")}
                        >
                            SignUp
                        </button>
                    </div>

                </div>

                <div className="w-3/4 rounded border-4 border-gray-300 hover:shadow-xl flex h-[85%] flex items-center p-4 justify-center ">
                    <div className={`flex-1 h-2/3 rounded-lg flex flex-col ${activeTab === "signup" ? "translate-x-full " : "translate-x-0"
                        } ease-in-out duration-500  items-center justify-center `}>
                        <form >
                            {/* Form Fields */}
                            {activeTab === "signup" && <div className="md:flex md:items-center mt-2 mb-6">
                                <input className="bg-[#ECECEC] appearance-none border-2 border-gray-200 rounded w-full  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF7538]" id="inline-full-name" type="text" placeholder="Enter Full Name" />
                            </div>
                            }
                            <div className="md:flex md:items-center  mb-6">
                                <input className="bg-[#ECECEC] appearance-none border-2 border-gray-200 rounded w-full  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF7538]" id="inline-password" type="password" placeholder="Enter Email" />
                            </div>
                            <div className="md:flex md:items-center  mb-3">
                                <input className="bg-[#ECECEC] appearance-none border-2 border-gray-200 rounded w-full w-[100%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF7538]" id="inline-password" type="password" placeholder="Enter Password" />
                            </div>
                            {activeTab === "login" && <div className="md:flex md:items-center  mb-6">
                                <p className="ml-auto text-sm font-semibold text-[#FF7538] cursor-pointer">Forgot Password?</p>
                            </div>
                            }
                            <div className="md:flex md:items-center flex items-center justify-center mt-2 ">
                                <button className="shadow bg-[#FF7538] hover:bg-[#dd7f56] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="button">
                                    {activeTab === "login" ? "Log In" : "Sign Up"}
                                </button>
                            </div>
                            <div className="h-1 bg-gray-200 w-full mt-6">
                            </div>
                            <p className="text-center font-light text-gray-500">Or</p>
                            <div className="md:flex md:items-center flex items-center justify-center mt-2 ">
                                <button className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full hover:bg-gray-200" type="button">
                                    <p className="text-gray-600 ">SIGN IN WITH GOOGLE</p>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={`flex-1 hidden md:block bg-gray-200 rounded border-2 ${activeTab === "signup" ? "-translate-x-full " : "-translate-x-0 "
                        } ease-in-out duration-500 h-[90%] `}>
                        <Image src={SignUpImage} fill alt="Sign Up Image" className={`transform hover:scale-95 rounded-l-2xl  duration-200  
                            `}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

{/* <div className="bg-white shadow-md rounded-md p-4">
    <div
        className={`${activeTab === "login" ? "" : "hidden"}`}
        id="login"
    >
        <div className="w-40 rounded-lg h-10 flex bg-red-500 items-center justify-center m-2">
            <p className="w-1/2">Login Form Here</p>
        </div>
    </div>
    <div
        className={`${activeTab === "signup" ? "" : "hidden"}`}
        id="signup"
    >
        <div className="w-40 rounded-lg h-10 flex bg-red-500 items-center justify-center m-2">
            <p>SignUp Form Here</p>
        </div>
    </div>
</div> */}
