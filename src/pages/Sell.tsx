import { Button } from "../components/ui/button";
import { useState } from "react";


export default function Sell() {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Page Header */}
      <header className="text-center py-6 bg-pink-200 text-pink-600 font-bold text-xl">
        <h1>Sell On Our Marketplace</h1>
        <p className="text-gray-600">
          Browse amazing offerings from entrepreneurs
        </p>
      </header>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto p-6 mt-6 text-black">
              <h2 className="text-pink-600 text-lg font-bold text-center mb-4">
          List Your Product Or Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-gray-700 font-semibold">Product/Service Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-xl focus:outline-none focus:border-pink-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold">Description</label>
            <textarea
              name="description"
              placeholder="Write a short description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-xl focus:outline-none focus:border-pink-500"
            ></textarea>
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">Price</label>
              <input
                type="text"
                name="price"
                placeholder="$20.00"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border rounded-xl focus:outline-none focus:border-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Eg. Fashion, Beauty"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded-xl focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold">Upload Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded-xl"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="bg-pink-600 text-white hover:bg-pink-400 w-full py-3 rounded-xl">
            Submit Listing
          </Button>
        </form>
      </div>      
    </div>
  )
}
