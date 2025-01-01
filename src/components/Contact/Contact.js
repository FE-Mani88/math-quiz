import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {

    window.onload = () => {
        let currentTheme = localStorage.getItem('theme')

        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        setActive(true)
    }

    const [active, setActive] = useState(true)

    useEffect(() => {
        let currentTheme = localStorage.getItem('theme')

        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })

    function darkHandler() {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }

    function ligtHandler() {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }

    function barsHandler() {
        console.log('Fa Bars :)')
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    function barHider() {
        if (active === false) {
            setActive(true)
        }
    }

    const [scrolled, setScrolled] = useState(false)

    window.onscroll = () => {
        if (document.documentElement.scrollTop) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }


    return (
        <>
            <div className='overflow-hidden bg-white dark:bg-gray-800 transition-all duration-[325ms] h-[107vh]' onClick={barHider}>
                <header className={active === false ? 'fixed w-full shadow-sm shadow-gray-200 dark:shadow-none bg-white dark:bg-zinc-800 border-b-[0.5px] border-gray-500 dark:border-gray-700 blur-sm md:bg-gray-300 transition-all md:dark:bg-zinc-800 md:border-b-[0.5px] md:border-gray-500 md:dark:border-gray-700 md:blur-none' : 'fixed w-full shadow-sm dark:shadow-none transition-all duration-200 shadow-gray-200 bg-white dark:bg-zinc-800 border-b-[0.1px] border-gray-50 dark:border-gray-700'} onClick={barHider}>
                    <div className='container'>
                        {/* set styles in nav tag with flag */}
                        <nav className={scrolled ? 'dark:bg-[#302e30] sm:bg-[#f1eeef] bg-[#ded7db]' : ''}>
                            <div className={scrolled ? 'flex items-center justify-between mx-[6px] sm:mx-[16px] md:mx-[32px] lg:mx-[48px] xl:mx-[3rem] py-[12px] transition-all z-20' : 'flex items-center justify-between mx-[6px] sm:mx-[16px] md:mx-[32px] lg:mx-[48px] xl:mx-[3rem] py-[18px] transition-all z-20'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 min-w-8 cursor-pointer text-gray-700 dark:hover:text-[#695dda] dark:transition-all dark:active:text-purple-700 dark:duration-150 hover:text-black active:text-[#695dda] dark:text-white transition-all md:hidden" onClick={() => { barsHandler() }}>
                                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                                <ul className='text-white gap-12 p-5 ml-7 hidden sm:hidden md:flex md:text-xl lg:flex lg:text-[1.35] xl:flex xl:text-[1.6rem]'>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 text-black hover:text-[#695dda] active:text-purple-800 dark:text-white dark:hover:text-sky-600 dark:active:text-sky-800'><Link to="/">صفحه اصلی</Link></li>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 text-black hover:text-[#695dda] active:text-purple-800 dark:text-white dark:hover:text-sky-600 dark:active:text-sky-800'><Link to="/Home">خانه</Link></li>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 text-black hover:text-[#695dda] active:text-purple-800 dark:text-white dark:hover:text-sky-600 dark:active:text-sky-800'><Link to="/shop">خرید</Link></li>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 hover:text-[#4134bd] text-[#695dda] active:text-purple-900 border-b-2 border-[#6e62db] dark:text-sky-600 dark:border-b-2 dark:border-sky-700 dark:hover:text-sky-800 dark:hover:border-sky-900 dark:active:text-sky-900'><Link to="/contact">ارتباط</Link></li>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 text-black hover:text-[#695dda] active:text-purple-800 dark:text-white dark:hover:text-sky-600 dark:active:text-sky-800'><Link to="/info">اطلاعات</Link></li>
                                </ul>
                                <div className='flex justify-between gap-3 items-center'>
                                    <button className='bg-sky-600 px-4 py-2 rounded-lg text-white hover:bg-sky-700 active:bg-sky-800 transition-all delay-[15ms] w-20 text-[0.71rem] sm:text-lg md:text-xl lg:text-xl sm:w-max'>ارتباط با ما</button>
                                    <button className='bg-[#695dda] px-4  py-2 rounded-lg text-white hover:bg-purple-800 active:bg-purple-900 transition-all delay-[15ms] w-20 text-[0.85rem] sm:text-[1.2rem] md:text-xl lg:text-xl sm:w-max'>درباره ما</button>
                                    <svg onClick={() => { darkHandler() }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:size-10 size-[35px] text-[#695dda] cursor-pointer active:text-gray-500 transition-all duration-300 delay-50 hover:text-gray-600 dark:hover:text-blue-500 dark:text-white">
                                        <path fillRule="evenodd" d="M8.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                                    </svg>
                                    <svg onClick={() => { ligtHandler() }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:size-[3rem] size-[40px] text-orange-500 cursor-pointer active:text-gray-500 transition-all duration-200 delay-50 hover:text-gray-600 dark:hover:text-yellow-400  dark:text-white">
                                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                                    </svg>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <main className='flex justify-center items-center relative top-[320px] dark:text-white text-5xl'>
                    <h1>صفحه ارتباط در حال توسعه است...</h1>
                </main>
            </div>
            <aside className={active ? 'fixed h-full right-0 top-0 mr-[-225px] transition-all duration-200' : 'fixed h-full right-0 top-0 mr-0 transition-all duration-200'} onClick={barHider}>
                <div className='h-[716px] min-w-[220px] max-w-[250px] bg-zinc-800 text-white md:hidden'>
                    <ul className='text-right flex flex-col-reverse gap-6 mx-5 py-6'>
                        <Link to="/info"><li className='hover:text-[#695dda] transition-all duration-200 delay-75 hover:bg-white p-2 cursor-pointer rounded-sm'>اطلاعات</li></Link>
                        <Link to="/contact"><li className='hover:text-[#695dda] transition-all duration-200 delay-75 hover:bg-white p-2 cursor-pointer rounded-sm'>ارتباط</li></Link>
                        <Link to="/shop"><li className='hover:text-[#695dda] transition-all duration-200 delay-75 hover:bg-white p-2 cursor-pointer rounded-sm'>خرید</li></Link>
                        <Link to="/Home"><li className='hover:text-[#695dda] transition-all duration-200 delay-75 hover:bg-white p-2 cursor-pointer rounded-sm'>خانه</li></Link>
                        <Link to="/"><li className='hover:text-[#695dda] transition-all duration-200 delay-75 hover:bg-white p-2 cursor-pointer rounded-sm'>صفحه اصلی</li></Link>
                    </ul>
                </div>
            </aside>
        </>
    )
}
