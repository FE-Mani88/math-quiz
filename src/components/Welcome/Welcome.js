import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import Landing from '../Landing/Landing.js'


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
            <Landing />
        </>
    )
}
