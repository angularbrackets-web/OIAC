import { useState } from 'react'
import oiacLogo from '../../images/oiac-logo-removebg-preview.webp'

export default function Nav(){
    const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false)
    const toggleMobileMenu = () => {
        setMobileMenuVisibility(!isMobileMenuVisible)
    }


    return (
        <nav className="w-screen bg-mintGreen1 text-green-950 text-md font-bold">
            <div className="2xl:container 2xl:mx-auto px-8 py-2">
                <div className="flex justify-between items-center">
                    <div className='flex space-x-8 items-center'>
                        <div>
                            <a href="#">
                                <img className=' w-18 h-16' src={oiacLogo} alt="OIAC Logo" />
                            </a>                            
                        </div>
                        <div className='hidden sm:flex space-x-8 items-center transition duration-300'>
                            <div><a href="#" className=' hover:text-green-600'>Home</a></div>
                            <div><a href="#" className=' hover:text-green-600'>About Us</a></div>
                            <div><a href="#" className=' hover:text-green-600'>Prayer Times</a></div>
                            <div><a href="#" className=' hover:text-green-600'>Programs</a></div>
                            <div><a href="#" className=' hover:text-green-600'>Events</a></div>
                            <div><a href="#" className=' hover:text-green-600'>Contact Us</a></div>
                        </div>                        
                    </div>                    
                    <div className='hidden sm:block'>
                        <a className=' bg-green-950 hover:bg-green-600 text-green-100 rounded-lg px-4 py-2' href="#">Donate</a>
                    </div>
                    {/* Mobile Button */}
                    <div className='block sm:hidden items-center hover:text-green-950'>
                        <button className='mobile-menu-button' onClick={toggleMobileMenu}>
                            {!isMobileMenuVisible &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>
                            }
                            {isMobileMenuVisible &&
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            }
                        </button>
                    </div>
                </div>
                
            </div>
            {/* Mobile Menu */}
            {isMobileMenuVisible &&
            <div className='mobile-menu text-sm flex bottom-0 left-0 w-full h-screen px-6 py-6'>
                <div className='flex flex-col gap-8'>
                    <a href="#" className='block hover:text-green-950'>Home</a>
                    <a href="#" className='block hover:text-green-950'>About Us</a>
                    <a href="#" className='block hover:text-green-950'>Prayer Times</a>
                    <a href="#" className='block hover:text-green-950'>Programs</a>
                    <a href="#" className='block hover:text-green-950'>Events</a>
                    <a href="#" className='block hover:text-green-950'>Contact Us</a>
                </div>
                
            </div>
            }
        </nav>
    )
}