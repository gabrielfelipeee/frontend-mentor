import { ReactNode, createContext, useState } from "react";

interface IHeeaderContextProps {
    children: ReactNode
}

interface IHeaderContextType {
    width: number,
    setWidth: React.Dispatch<React.SetStateAction<number>>,
    displayMenu: string,
    setDisplayMenu: React.Dispatch<React.SetStateAction<string>>,
    showButton: boolean,
    setShowButton: React.Dispatch<React.SetStateAction<boolean>>,
}

const HeaderContext = createContext<IHeaderContextType | null>(null);
HeaderContext.displayName = "Header";

const HeaderProvider = ({ children }: IHeeaderContextProps) => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [displayMenu, setDisplayMenu] = useState<string>("");
    const [showButton, setShowButton] = useState<boolean>(false);
    return (
        <HeaderContext.Provider value={
            {
                width,
                setWidth,
                displayMenu,
                setDisplayMenu,
                showButton,
                setShowButton
            }}
        >
            {children}
        </HeaderContext.Provider>
    )
}
export { HeaderContext, HeaderProvider };
