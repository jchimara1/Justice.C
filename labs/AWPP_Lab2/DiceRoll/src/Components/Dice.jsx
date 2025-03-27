import {diceFaces} from "../Util/Helper.jsx";

export const Dice = ({ num }) => {
    const face = diceFaces[num-1];
    return (

            <i className={`fa-solid fa-dice-${face}`}></i>

    );
};
