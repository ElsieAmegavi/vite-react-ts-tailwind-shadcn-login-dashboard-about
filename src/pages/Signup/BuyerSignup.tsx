import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "react-toastify";

// Validation Schema
const buyerSignupSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  email: z.string().email("Invalid email address"),
  paymentMethod: z.string().min(1, "Payment Method is required"),
});

type BuyerSignupForm = z.infer<typeof buyerSignupSchema>;

export function BuyerSignup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BuyerSignupForm>({
    resolver: zodResolver(buyerSignupSchema),
  });

  const onSubmit = async (data: BuyerSignupForm) => {
    try {
      console.log("Buyer Signup Data:", data);

      toast.success("Signup successful! 🎉", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error("Signup failed! 🚫 Try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <div className="flex items-center justify-center p-6 min-h-screen bg-white">
      <div className="p-8 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">
          Sign Up
        </h2>

        <div className="flex justify-center space-x-2 mb-4">
          <button className="bg-pink-600 text-white px-4 py-2 rounded-2xl">
            Buyer Sign Up
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-2xl"
            onClick={() => navigate("/seller-signup")}
          >
            Seller Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
          <input
            {...register("fullName")}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.fullName?.message && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}

          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <input
            type="text"
            {...register("phoneNumber")}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.phoneNumber?.message && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}

          <input
            type="text"
            {...register("address")}
            placeholder="Enter your address"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.address?.message && (
            <p className="text-red-500">{errors.address.message}</p>
          )}

          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <input
            type="text"
            {...register("paymentMethod")}
            placeholder="Enter your preferred payment method"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.paymentMethod?.message && (
            <p className="text-red-500">{errors.paymentMethod.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded"
          >
            Sign Up as Buyer
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
