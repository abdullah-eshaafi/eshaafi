import React from 'react';
import Breadcrumbs from "../../base/breadcrumbs/Breadcrumbs";
import Cards from "../../base/cards/Cards";
import TheHeader from "../../../container/TheHeader";
import TheSidebar from "../../../container/TheSidebar";

const AdminDashboard = () =>{
    return(
        <>
            <div className={"wrapper"}>

                <TheHeader/>
                <TheSidebar/>
                {/* Content Header (Page header) */}
                {/* /.content-header */}

                {/* Main content */}
                <div className={"content-wrapper"}>
                    <Breadcrumbs data={'Home/'} active={'Doctors'}/>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <Cards style={"bg-success"} users={"100"} status={"Active Users"} icon={"fa-user"}/>
                                <Cards style={"bg-info"} users={"150"} status={"Active Doctors"} icon={"fa-user-md"}/>
                                <Cards style={"bg-warning"} users={"80"} status={"Pending Request"} icon={"fa-user-clock"}  />
                                <Cards style={"bg-danger"} users={"34"} status={"Block Account"} icon={"fa-users-slash"} />
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;