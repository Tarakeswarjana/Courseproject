import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function EventLayout() {
   
    return (
        <>
            <div id="wrapper">
                <div id="content-wrapper " className="d-flex flex-column">
                    <div id="content">
                        <Header />

                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}