import { useContext } from "react"
import { HomeContext } from "../context/HomeContext"


const useHome = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error("Error");
    }
    const {
        onlineBanking,
        simpleBudgeting,
        fastOnborarding,
        openAPI,
        imgMoney,
        imgConfetti,
        imgPlane,
        imgRestaurant
    } = context;

    return {
        onlineBanking,
        simpleBudgeting,
        fastOnborarding,
        openAPI,
        imgMoney,
        imgConfetti,
        imgPlane,
        imgRestaurant
    }
}
export default useHome;
