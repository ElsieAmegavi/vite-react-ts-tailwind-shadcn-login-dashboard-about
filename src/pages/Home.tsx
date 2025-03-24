import { Button } from "../components/ui/button"

export function Home() {

  const steps = [
    {
      id: 1,
      title: "1. Sign Up",
      description: "Create an account to start selling or shopping.",
    },
    {
      id: 2,
      title: "2. List Your Products",
      description: "Upload your products and start selling immediately.",
    },
    {
      id: 3,
      title: "3. Start Earning",
      description: "Receive payments and grow your business effortlessly.",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Short description of product or service",
      price: "$10.00",
      image: "/src/assets/feature-listings-1.png", 
    },
    {
      id: 2,
      name: "Product 2",
      description: "Short description of product or service",
      price: "$15.00",
      image: "/src/assets/feature-listings-2.png", 
    },
    {
      id: 3,
      name: "Product 3",
      description: "Short description of product or service",
      price: "$20.00",
      image: "/src/assets/feature-listings-3.png", 
    },
  ];

  return (
    <div className="bg-white max-width-full min-h-screen">
      {/* Header Section */}
      <header className="text-center py-6 bg-pink-200 text-pink-600 font-bold text-xl">
        <h1>Welcome To Our Marketplace</h1>
        <p className="text-gray-600">
          Empowering Women Entrepreneurs to Sell Their Products & Services
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Button className="bg-pink-600 text-white hover:bg-pink-400 rounded-full">
            Start Selling
          </Button>
          <Button className="border border-pink-600 text-pink-600 hover:bg-pink-200 rounded-full">
            Shop Now
          </Button>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-10">
        <h2 className="text-center font-bold text-pink-600 text-lg mb-6">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {steps.map((step) => (
            <div key={step.id} className="p-6 bg-pink-100 shadow rounded-xl text-center">
              <h3 className="text-pink-600 font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Featured Listings */}
       <section className="py-10 bg-gray-200">
        <h2 className="text-center font-bold text-pink-600 text-lg mb-6">
          Featured Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white shadow rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-pink-600 font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-pink-800 font-bold">{product.price}</p>
              <Button className="bg-pink-600 text-white hover:bg-pink-800 w-full mt-2 rounded-full">
                View details
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 