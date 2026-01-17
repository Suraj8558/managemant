
import { Outlet } from "react-router-dom";
import NavBar from "@/components/Header/NavBar";

export default function RootLayout() {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
} 