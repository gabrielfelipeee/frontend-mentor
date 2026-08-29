import { useContext, useEffect } from "react"
import { HeaderContext } from "../context/HeaderContext"

import logo from '../assets/logo.svg';

const useHeader = () => {
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error("useWindowWidth must be used within a WindowWidthProvider");
    }
    const { width, setWidth, displayMenu, setDisplayMenu, showButton, setShowButton } = context;
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    useEffect(() => {
        width > 778 ? setDisplayMenu("flex") : setDisplayMenu("none");
        width > 778 ? setShowButton(true) : setShowButton(false);
    }, [width])

    const toggleMenu = () => {
        if (displayMenu === "" || displayMenu === "none") {
            setDisplayMenu("flex")
        } else {
            setDisplayMenu("none")
        }
    }

    return {
        logo,
        width,
        displayMenu,
        toggleMenu,
        showButton
    }
}
export default useHeader;
