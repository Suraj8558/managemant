import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function NavBar() {
	return (
		<header className="sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center">
				<div className="mr-4 hidden md:flex">
					<a className="mr-6 flex items-center space-x-2" href="/">
						<span className="hidden font-bold sm:inline-block">Acme Inc</span>
					</a>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
								<NavigationMenuContent>
									<p className="p-4 w-[200px]">
										Sample content for Getting Started
									</p>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									Documentation
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						{/* Search or other items could go here */}
					</div>
					<nav className="flex items-center">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" className="md:hidden" size="icon">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Toggle Menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="left">
								<div className="flex flex-col space-y-4 py-4">
									<a href="/" className="font-bold">Acme Inc</a>
									<div className="flex flex-col space-y-2">
										<a href="#" className="text-sm font-medium hover:underline bg-red-500">
											Getting Started
										</a>
										<a href="#" className="text-sm font-medium hover:underline">
											Documentation
										</a>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</nav>
				</div>
			</div>
		</header >
	)
}