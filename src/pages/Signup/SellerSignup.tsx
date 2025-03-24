import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function SellerSignup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Seller Signup Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
          Seller Sign Up
        </h2>

        <div className="flex justify-center space-x-2 mb-4">
          <button 
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-2xl"
          onClick={() => navigate("/buyer-signup")}>
            Buyer Sign Up
          </button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-2xl">
            Seller Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <input
            {...register("fullName", { required: "Full Name is required" })}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.fullName?.message && (
            <p className="text-red-500">{String(errors.fullName.message)}</p>
          )}

          {/* Password */}
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password?.message && (
            <p className="text-red-500">{String(errors.password.message)}</p>
          )}

          {/* Phone Number */}
          <input
            type="tel"
            {...register("phoneNumber", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number",
              },
            })}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.phoneNumber?.message && (
            <p className="text-red-500">{String(errors.phoneNumber.message)}</p>
          )}

          {/* Business Address */}
          <input
            type="text"
            {...register("businessAddress", { required: "Business Address is required" })}
            placeholder="Enter your business address"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.businessAddress?.message && (
            <p className="text-red-500">{String(errors.businessAddress.message)}</p>
          )}

          {/* Business Email */}
          <input
            type="email"
            {...register("businessEmail", {
              required: "Business Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter your business email"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.businessEmail?.message && (
            <p className="text-red-500">{String(errors.businessEmail.message)}</p>
          )}

          {/* Business Name */}
          <input
            type="text"
            {...register("businessName", { required: "Business Name is required" })}
            placeholder="Enter your business name"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.businessName?.message && (
            <p className="text-red-500">{String(errors.businessName.message)}</p>
          )}

          {/* Business Category */}
          <input
            type="text"
            {...register("businessCategory", { required: "Business Category is required" })}
            placeholder="Enter your business category"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.businessCategory?.message && (
            <p className="text-red-500">{String(errors.businessCategory.message)}</p>
          )}

          {/* Social Media Links */}
          <textarea
            {...register("socialMedia", {
              required: "Social Media Links are required",
              pattern: {
                value:
                  /^(https?:\/\/)?([\w\-]+\.){1,}[\w\-]+(\/[\w\-./?%&=]*)?$/,
                message: "Enter valid social media links (comma-separated)",
              },
            })}
            placeholder="Enter your social media links (comma-separated)"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.socialMedia?.message && (
            <p className="text-red-500">{String(errors.socialMedia.message)}</p>
          )}

          {/* Submit Button */}
          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded">
            Sign Up as Seller
          </button>
        </form>

        <p className="text-center mt-4 text-black">
          Already have an account?{" "}
          <a href="/login" className="text-pink-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
