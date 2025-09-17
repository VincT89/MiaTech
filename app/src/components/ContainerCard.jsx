import { Card } from "./Card";

import React from 'react'

export const ContainerCard = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-80 p-4 space-y-4">
      <h1 className="text-2xl font-bold">Prodotti in magazzino</h1>
      <Card>
        <h2 className="text-xl font-bold text-gray-600">Prodotto 1</h2>
        <p className="text-gray-600">Laptop LENOVO</p>
      </Card>
      <Card>
        <h2 className="text-xl font-bold text-gray-600">Prodotto 2</h2>
        <p className="text-gray-600">Smartphone SAMSUNG</p>
      </Card>
   </div>
  )
}
