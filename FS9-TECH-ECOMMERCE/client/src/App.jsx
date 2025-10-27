import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PublicLayout from "./layouts/PublicLayout";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Product from "./pages/Product";


const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<PublicLayout />}>
					<Route path="" element={<Home />} />
					<Route path="cart" element={<Cart />} />
					<Route path="login" element={<Login />} />
					<Route path="product" element={<Product />} />
					<Route path="register" element={<Register />} />
					<Route path="categories" element={<Categories />} />
					<Route path="search" element={<Search />} />
				
				</Route>
			</Routes>
		</>
	);
};

export default App;
