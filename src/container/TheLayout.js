import React from "react";
import TheHeader from './TheHeader'
import TheSidebar from './TheSidebar'


const TheLayout = () => {
    return(
        <>
            <div className={"wrapper"}>
                <TheHeader/>
                <TheSidebar/>
            </div>
        </>
    )
}


export default TheLayout;