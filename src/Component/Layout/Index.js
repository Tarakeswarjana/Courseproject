import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
   
    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper content_wrapper_own_bg" className="d-flex flex-column" style={{width:"100%"}}>
                    <div id="content">
                        <Header />

                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}