import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { navigateTo } from "../store/navigationSlice";

const Navigation: React.FC = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.navigation.currentPage);

    return (
        <nav>
            <button onClick={() => dispatch(navigateTo('Home'))}>Home</button>
            <button onClick={() => dispatch(navigateTo('Reports'))}>Reports</button>
            <p>Current Page : {currentPage}</p>
        </nav>
    );
};

export default Navigation;