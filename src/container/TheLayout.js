import React from "react";
import TheHeader from './TheHeader'
import TheSidebar from './TheSidebar'
import AdminDashboard from '../views/pages/dashboard/AdminDashboard'


const TheLayout = () => {
    return(
        <>
            <div className={"wrapper"}>
                <TheHeader/>
                <TheSidebar/>
                <div className={"content-wrapper"}>
                    <AdminDashboard/>
                </div>
            </div>
        </>
    )
}


export default TheLayout;