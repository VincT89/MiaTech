import React from "react";
import { ItemList } from "./ItemList";

export const List = () => {
	const fruits = ["Mela", "Banana", "Arancia", "Pera"];
	return (
		<div className="flex flex-col items-center justify-center mt-80">
			<h2 className="text-2xl font-bold mb-4">Lista della Spesa</h2>
			<div>
				<ItemList items={fruits} />
			</div>
		</div>
	);
};
