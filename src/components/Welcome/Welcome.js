import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Welcome() {

    const [active, setActive] = useState(true)

    window.onload = () => {
        let currentTheme = localStorage.getItem('theme')

        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        setActive(true)
    }


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

    const variants = {
        hidden: { x: '100%', opacity: 0 }, // حالت پنهان: خارج از صفحه و شفافیت 0
        visible: { x: 0, opacity: 1 }, // حالت قابل مشاهده: در موقعیت اصلی و شفافیت 1
    };

    ///////////////////change nav style when user scrolling in page
    const [scrolled, setScrolled] = useState(false)

    window.onscroll = () => {
        if (document.documentElement.scrollTop) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    ///////////////////change nav style when user scrolling in page

    return (
        <>
            <div className='overflow-x-hidden overflow-y-visible bg-white dark:bg-gray-800 transition-all duration-[325ms] h-[150vh] md:h-[100vh]'>
                <header className={active === false ? 'fixed w-full shadow-sm shadow-gray-200 dark:shadow-none bg-white dark:bg-zinc-800 border-b-[0.5px] border-gray-500 dark:border-gray-700 blur-sm md:bg-gray-300 transition-all md:dark:bg-zinc-800 md:border-b-[0.5px] md:border-gray-500 md:dark:border-gray-700 md:blur-none' : 'fixed w-full shadow-sm dark:shadow-none transition-all duration-200 shadow-gray-200 bg-white dark:bg-zinc-800 border-b-[0.1px] border-gray-50 dark:border-gray-700'} onClick={barHider}>
                    <div className='container'>
                        <nav className={scrolled ? 'dark:bg-[#302e30] sm:bg-[#f1eeef] bg-[#ded7db]' : ''}>
                            <div className={scrolled ? 'flex items-center justify-between mx-[6px] sm:mx-[16px] md:mx-[32px] lg:mx-[48px] xl:mx-[3rem] py-[12px] transition-all z-20' : 'flex items-center justify-between mx-[6px] sm:mx-[16px] md:mx-[32px] lg:mx-[48px] xl:mx-[3rem] py-[18px] transition-all z-20'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 min-w-8 cursor-pointer text-gray-700 dark:hover:text-[#695dda] dark:transition-all dark:active:text-purple-700 dark:duration-150 hover:text-black active:text-[#695dda] dark:text-white transition-all md:hidden" onClick={() => { barsHandler() }}>
                                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                                <ul className='text-white gap-12 p-5 ml-7 hidden sm:hidden md:flex md:text-xl lg:flex lg:text-[1.35] xl:flex xl:text-[1.6rem]'>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 text-black hover:text-[#695dda] active:text-purple-800 dark:text-white dark:hover:text-sky-600 dark:active:text-sky-800'><Link to="/">صفحه اصلی</Link></li>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 text-black hover:text-[#695dda] active:text-purple-800 dark:text-white dark:hover:text-sky-600 dark:active:text-sky-800'><Link to="/Home">خانه</Link></li>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 text-black hover:text-[#695dda] active:text-purple-800 dark:text-white dark:hover:text-sky-600 dark:active:text-sky-800'><Link to="/shop">خرید</Link></li>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 text-black hover:text-[#695dda] active:text-purple-800 dark:text-white dark:hover:text-sky-600 dark:active:text-sky-800'><Link to="/contact">ارتباط</Link></li>
                                    <li className='cursor-pointer transition-all delay-50 duration-200 text-black hover:text-[#695dda] active:text-purple-800 dark:text-white dark:hover:text-sky-600 dark:active:text-sky-800'><Link to="/info">اطلاعات</Link></li>
                                </ul>
                                <div className='flex justify-between gap-3 items-center'>
                                    <button className='bg-sky-600 px-4 py-2 rounded-lg text-white hover:bg-sky-700 active:bg-sky-800 transition-all delay-[15ms] w-20 text-[0.65rem] sm:text-lg md:text-xl lg:text-xl sm:w-max'>ارتباط با ما</button>
                                    <button className='bg-[#695dda] px-4  py-2 rounded-lg text-white hover:bg-purple-800 active:bg-purple-900 transition-all delay-[15ms] w-20 text-[0.7rem] sm:text-[1.2rem] md:text-xl lg:text-xl sm:w-max'>درباره ما</button>
                                    <svg onClick={() => { darkHandler() }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:size-10 size-[35px] text-[#695dda] cursor-pointer active:text-gray-500 transition-all duration-300 delay-50 hover:text-gray-600 dark:hover:text-blue-500 dark:text-white">
                                        <path fillRule="evenodd" d="M8.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                                    </svg>
                                    <svg onClick={() => { ligtHandler() }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:size-[3rem] size-[40px] text-yellow-500 cursor-pointer active:text-gray-500 transition-all duration-200 delay-50 hover:text-gray-600 dark:hover:text-yellow-400  dark:text-white">
                                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                                    </svg>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <main
                    id='testBg' className={active === false ? "overflow-y-hidden md:bg-[url('./darkimage.jpg')] dark:md:bg-[url('./image.jpg')] object-cover w-full h-[100vh] blur-sm md:w-full md:h-[100vh] md:blur-none" : "overflow-y-hidden md:bg-[url('./darkimage.jpg')] dark:md:bg-[url('./image.jpg')] bg-cover w-full h-[100vh]"} onClick={barHider}>
                    <div className='container'>
                        <div className='flex items-center'>
                            <div className='xl:flex lg:flex md:flex flex-col-reverse sm:flex-row-reverse md:flex-row-reverse md:mt-[120px] sm:flex block items-center w-full justify-around mt-[85px] px-[7.5px]'>

                                <section id='img-cont' className='mt-8 md:hidden xl:w-[550px] xl:min-w-[550px] lg:w-[550px] lg:min-w-[550px] md:w-[420px] md:min-w-[420px] sm:w-[400px] sm:min-w-[400px] min-w-[305px] min-h-[260px] max-w-[410px] shadow-xl shadow-gray-600 rounded-lg overflow-hidden mx-auto m-2'>
                                    <img className='w-full object-cover min-h-[260px] rounded-lg overflow-hidden' src="./images/image.png" alt="Picture" />
                                </section>

                                <section className='flex flex-col basis-[50%] sm:mt-[100px] mt-12 mx-1.5 text-center'>
                                    <h2 className='text-5xl text-black dark:text-white text-wrap text-center mb-4'>
                                        اما چرا ما؟
                                    </h2>
                                    <p className='xl:text-2xl lg:text-2xl md:text-xl sm:lg text-center mx-auto dark:text-gray-400 text-wrap flex flex-wrap break-words'>
                                        لورم ایپسوم دالر متن تستی جهت پیش نمایش برای انواع برنامه ها در صنعت چاپ و تستینگ استفاده میشود. همچنین در لست تستینگتی های مختلف وجود دارد.
                                    </p>
                                    <div className='text-center mt-6'>
                                        <div className='flex justify-evenly'>
                                            <Link to='/wquiz'>
                                                <button className='bg-blue-600'>
                                                    {/* <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg> */}
                                                    <p>بزن بریم</p>
                                                    {/* <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg> */}
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>

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
            </div>
        </>
    )
}
