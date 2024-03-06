import React from 'react'
import Logo from "../assets/img/Rakuten_logo.png";

function footer() {
    return (
        <>


            <footer className="bg-white dark:bg-gray-900 mt-20">
                <div className="bg-gray-600 mx-auto w-full max-w-screen-xl">
                    <div className=" grid grid-cols-2 gap-2 px-10 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">All about Rakuten Kobo</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Brand Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Opportunities</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Discord Server</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Twitter</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Latest Blog Posts</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Stay Connected</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <hr />

                    <div className='text-white font-semibold py-5 text-center flex flex-row items-center justify-center gap-7 w-auto h-auto'>
                        
                        <div> Accepted Payment Methods:</div>
                        <div className='bg-card1 bg-cover h-7 w-7'></div>
                        <div className='bg-card2 bg-cover h-7 w-7'></div>
                        <div className='bg-card3 bg-cover h-7 w-7'></div>

                       
                    </div>

                </div>


                <div className='p-10 flex flex-row gap-10 items-center'>
                    <img src={Logo} alt="" />
                    <a href="">Rakuten Viki</a>
                    <a href="">Rakuten Viber</a>
                    <a href="">Rakuten Global Market</a>
                    <a href="">Rakuten Travel</a>
                    <a href="">More Services</a>

                </div>

            </footer>

        </>
    )
}

export default footer