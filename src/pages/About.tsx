import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/about-image.png"


export function About() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
    {/* Section Title */}
    <div className="text-center mt-12">
      <h2 className="text-xl font-bold text-pink-600 md:text-2xl">
        What Our Users Say
      </h2>
      <p className="text-gray-600 text-sm md:text-base">
        Join a growing community of empowered women
      </p>
    </div>

    {/* Cards Section */}
    <div className="mt-8 flex flex-col items-center space-y-6 md:space-y-8">
      {/* Card 1 */}
      <div className="relative bg-gray-100 rounded-lg shadow-lg p-4 w-80 md:w-96 transform rotate-[-5deg]">
        <p className="text-sm md:text-base text-gray-700">
          "This platform has helped me grow my business beyond expectations!"
        </p>
        <div className="flex items-center mt-3">
          <img
            src={aboutImage}
            alt="User"
            className="rounded-full"
            width={50}
            height={50}
          />
          <span className="ml-3 text-pink-600 font-semibold">Pearl Yawa</span>
        </div>
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full"></div>
      </div>

      {/* Card 2 */}
      <div className="relative bg-gray-100 rounded-lg shadow-lg p-4 w-80 md:w-96 transform rotate-[5deg]">
        <p className="text-sm md:text-base text-gray-700">
          "This platform has helped me grow my business beyond expectations!"
        </p>
        <div className="flex items-center mt-3">
          <img
            src={aboutImage}
            alt="User"
            className="rounded-full"
            width={50}
            height={50}
          />
          <span className="ml-3 text-pink-600 font-semibold">Pearl Yawa</span>
        </div>
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full"></div>
      </div>

      {/* Card 3 */}
      <div className="relative bg-gray-100 rounded-lg shadow-lg p-4 w-80 md:w-96 transform rotate-[-5deg]">
        <p className="text-sm md:text-base text-gray-700">
          "This platform has helped me grow my business beyond expectations!"
        </p>
        <div className="flex items-center mt-3">
          <img
            src={aboutImage}
            alt="User"
            className="rounded-full"
            width={50}
            height={50}
          />
          <span className="ml-3 text-pink-600 font-semibold">Pearl Yawa</span>
        </div>
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full"></div>
      </div>
    </div>

    {/* Pink Banner at Bottom */}
    <div className="w-full bg-pink-100 mt-12 py-8 text-center">
      <h3 className="text-lg md:text-xl font-bold text-pink-600">
        Ready To Get Started?
      </h3>
      <p className="text-gray-600 text-sm md:text-base">
        Join now and become part of a growing community
      </p>
      <div className="mt-4">
        <button 
          className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm md:text-base mr-2"
          onClick={() => navigate("/buyer-signup")}>
          Sign Up
        </button>
        <button 
            className="border border-pink-500 text-pink-500 px-4 py-2 rounded-full text-sm md:text-base"
            onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  </div>
  )
} 