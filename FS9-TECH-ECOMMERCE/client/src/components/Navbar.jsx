import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/features/authSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<>
			<nav className="bg-white dark:bg-gray-800 antialiased">
				<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-8">
							<div className="shrink-0">
								<a href="#" title="" className="">
									<img	className="block w-auto h-8 dark:hidden"	src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"	alt=""	/>
									<img	className="hidden w-auto h-8 dark:block"	src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"	alt=""	/>
								</a>
							</div>
							<ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
								<li>
									<Link	to="/"	className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
									>
										Home
									</Link>
								</li>
								<li>
									<Link	to="/categories"	className=" inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
									>
										Categories
									</Link>
								</li>
								<li>
									<Link	to="/search"	className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
										Search
									</Link>
								</li>
							</ul>
						</div>

						<div className="flex items-center lg:space-x-2">
							<Link	to="/cart"	type="button"	className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
								<span className="sr-only">Cart</span>
								<svg	className="w-5 h-5 lg:me-1"	aria-hidden="true"	xmlns="http://www.w3.org/2000/svg"	width="24"	height="24"	fill="none"	viewBox="0 0 24 24">
									<path	stroke="currentColor"	stroke-linecap="round"	stroke-linejoin="round"	stroke-width="2"	d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
								</svg>
								<span className="hidden sm:flex">My Cart</span>
								<svg	className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"	aria-hidden="true"	xmlns="http://www.w3.org/2000/svg"	width="24"	height="24"	fill="none"	viewBox="0 0 24 24"></svg>
							</Link>
							{user ? (
								<>
									<Link	to="/dashboard"	type="button"	className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
										<svg className="w-5 h-5 me-1"	aria-hidden="true"	xmlns="http://www.w3.org/2000/svg"	width="24"	height="24"	fill="none"	viewBox="0 0 24 24">
											<path	stroke="currentColor"	stroke-width="2"	d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"	/>
										</svg>
										{user.username}
										<svg className="w-4 h-4 text-gray-900 dark:text-white ms-1"	aria-hidden="true"	xmlns="http://www.w3.org/2000/svg"	width="24"	height="24"	fill="none"	viewBox="0 0 24 24"></svg>
									</Link>
									<button onClick={handleLogout} id="userDropdownButton1" type="button" className=" cursor-pointer inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
									>
										<svg className="w-5 h-5 me-1" aria-hidden="true"	xmlns="http://www.w3.org/2000/svg"	width="24"	height="24"	fill="none"	viewBox="0 0 24 24"	>	</svg>
										Logout
										<svg	className="w-4 h-4 text-gray-900 dark:text-white ms-1"	aria-hidden="true"	xmlns="http://www.w3.org/2000/svg"	width="24"	height="24"	fill="none"	viewBox="0 0 24 24"	></svg>
									</button>
								</>
							) : (
								<>
									<Link to="/login"
										id="userDropdownButton1"
										data-dropdown-toggle="userDropdown1"
										type="button"
										className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
									>
										<svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24"fill="none"viewBox="0 0 24 24">
											<path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
										</svg>
										Login
										<svg className="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"></svg>
									</Link>
									<Link to="/register"	type="button"	className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
										<svg	className="w-5 h-5 me-1"	aria-hidden="true"	xmlns="http://www.w3.org/2000/svg"	width="24"	height="24"	fill="none"	viewBox="0 0 24 24">
											<path	stroke="currentColor"	stroke-width="2"	d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"	/>
										</svg>
										Register
										<svg	className="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true"	xmlns="http://www.w3.org/2000/svg"	width="24"	height="24"	fill="none"	viewBox="0 0 24 24"	></svg>
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
