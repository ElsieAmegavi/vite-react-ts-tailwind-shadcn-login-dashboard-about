import { useState } from "react";
import { Button } from "../components/ui/button";

export default function Shop() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Fashion", "Beauty", "Services", "Home Decor"]

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Short description of item",
      price: "$10.00",
      image: "/src/assets/feature-listings-1.png",
      category: "Beauty",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Short description of product ",
      price: "$10.00",
      image: "/src/assets/feature-listings-1.png",
      category: "Fashion",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Short description of service",
      price: "$10.00",
      image: "/src/assets/feature-listings-1.png",
      category: "Home Decor",
    },
    {
      id: 4,
      name: "Product 1",
      description: "Short description of item",
      price: "$10.00",
      image: "/src/assets/feature-listings-2.png",
      category: "Beauty",
    },
    {
      id: 5,
      name: "Product 2",
      description: "Short description of product ",
      price: "$10.00",
      image: "/src/assets/feature-listings-2.png",
      category: "Fashion",
    },
    {
      id: 6,
      name: "Product 3",
      description: "Short description of service",
      price: "$10.00",
      image: "/src/assets/feature-listings-2.png",
      category: "Home Decor",
    },
    {
      id: 1,
      name: "Product 7",
      description: "Short description of item",
      price: "$10.00",
      image: "/src/assets/feature-listings-3.png",
      category: "Beauty",
    },
    {
      id: 2,
      name: "Product 8",
      description: "Short description of product ",
      price: "$10.00",
      image: "/src/assets/feature-listings-3.png",
      category: "Fashion",
    },
    {
      id: 3,
      name: "Product 9",
      description: "Short description of service",
      price: "$10.00",
      image: "/src/assets/feature-listings-3.png",
      category: "Home Decor",
    },
  ];

  const filteredProducts =
  selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
<div className="bg-white min-h-screen pb">
      {/* Page Header */}
      <header className="text-center py-6 bg-pink-200 text-pink-600 font-bold text-xl">
        <h1>Shop Products & Services</h1>
        <p className="text-gray-600">
          Browse amazing offerings from entrepreneurs
        </p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search for products or services..."
          className="w-80 p-2 border rounded-xl focus:outline-none focus:border-pink-500"
        />
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-3 mb-6">
        {categories.map((category) => (
          <Button
            key={category}
            className={`${
              selectedCategory === category
                ? "bg-pink-600 text-white"
                : "border border-pink-600 text-pink-600 hover:bg-pink-200 rounded-xl"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Product Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white shadow rounded-lg text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-pink-600 font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-pink-800 font-bold">{product.price}</p>
            <Button className="bg-pink-600 text-white hover:bg-pink-800 w-full mt-2 rounded-xl">
              View details
            </Button>
          </div>
        ))}
      </div>
    </div>  )
}
