import DashboardNav from "@/Components/Header/DashboardNav"
import { Outlet } from "react-router-dom"
export default function DashboardLayout() {
    return (
        <>
            <DashboardNav />
            <div className="dashboard-layout">
                <div className="sidebar">
                    <p>sider bar sectiomn</p>
                </div>
                <div className="main">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
