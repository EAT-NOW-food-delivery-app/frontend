import { useState } from "react";
import Image from 'next/image';
import SignUpImage from "../public/images/SignUpImage.png"

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
                                : "text-gray-500 bg-white"
                                } py-2 px-4 text-lg font-semibold rounded-md focus:outline-none`}
                            onClick={() => openTab("login")}
                        >
                            Login
                        </button>
                        <button
                            className={`${activeTab === "signup"
                                ? "bg-[#FF7538] text-white"
                                : "text-gray-500 bg-white"
                                } py-2 px-4 text-lg font-semibold rounded-md focus:outline-none`}
                            onClick={() => openTab("signup")}
                        >
                            SignUp
                        </button>
                    </div>

                </div>
                <div className="w-3/4 rounded border hover:shadow-xl border-black-800 border-6 flex h-[85%] flex items-center p-4 justify-center ">
                    <form className="flex-1 h-2/3 m-2 rounded-lg flex flex-col border-10 border-black-800  items-center justify-center ">
                        <div className="md:flex md:items-center w-2/3 mt-2 mb-6">
                            <input className="bg-[#ECECEC] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF7538]" id="inline-full-name" type="text" placeholder="Enter Full Name" />
                        </div>
                        <div className="md:flex md:items-center w-2/3 mb-6">
                            <input className="bg-[#ECECEC] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF7538]" id="inline-password" type="password" placeholder="Enter Email" />
                        </div>
                        <div className="md:flex md:items-center w-2/3 mb-6">
                            <input className="bg-[#ECECEC] appearance-none border-2 border-gray-200 rounded w-[100%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF7538]" id="inline-password" type="password" placeholder="Enter Password" />
                        </div>
                        <div className="md:flex md:items-center w-2/3 mb-6">
                            <input className="bg-[#ECECEC] appearance-none border-2 border-gray-200 rounded w-[100%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#FF7538]" id="inline-password" type="number" placeholder="Enter Phone No." />
                        </div>
                        <div className="md:flex md:items-center flex items-center justify-center w-2/3">
                            <button className="shadow bg-[#FF7538] hover:bg-[#dd7f56] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="flex-1 hidden md:block bg-white">
                        <Image src={SignUpImage} width={400} alt="Sign Up Image" />
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
