import { ReactNode, createContext } from "react";

import onlineBanking from '../assets/icon-online.svg';
import simpleBudgeting from '../assets/icon-budgeting.svg';
import fastOnborarding from '../assets/icon-onboarding.svg';
import openAPI from '../assets/icon-api.svg';

import imgMoney from '../assets/image-currency.jpg';
import imgRestaurant from '../assets/image-restaurant.jpg';
import imgPlane from '../assets/image-plane.jpg';
import imgConfetti from '../assets/image-confetti.jpg';

interface HomeContextType {
    onlineBanking: string,
    simpleBudgeting: string,
    fastOnborarding: string,
    openAPI: string,
    imgMoney: string,
    imgConfetti: string,
    imgPlane: string,
    imgRestaurant: string
}

interface HomeProviderProps {
    children: ReactNode
}

const HomeContext = createContext<HomeContextType | null>(null);
HomeContext.displayName = "Home";

const HomeProvider = ({ children }: HomeProviderProps) => {
    return (
        <HomeContext.Provider value={{
            onlineBanking,
            simpleBudgeting,
            fastOnborarding,
            openAPI,
            imgMoney,
            imgConfetti,
            imgPlane,
            imgRestaurant
        }}
        >
            {children}

        </HomeContext.Provider>
    )
}
export { HomeContext, HomeProvider };
