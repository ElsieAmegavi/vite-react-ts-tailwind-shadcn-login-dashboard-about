import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("Contact Form Data:", data);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className="bg-white ">
      {/* Fixed Header (Banner) */}
      <header className="w-full py-6 bg-pink-200 text-pink-600 font-bold text-xl text-center">
        <h1 className="text-3xl">Contact Us</h1>
        <p className="text-gray-600 text-xl">We'd love to hear from you</p>
      </header>

      {/* Contact Form */}
      <div className="flex items-center justify-center min-h-[60vh]">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-2xl ">
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.name && <p className="text-red-500">{String(errors.name.message)}</p>}

          <input
            type="email"
            {...register("email", { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ })}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email && <p className="text-red-500">{String(errors.email.message)}</p>}

          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border rounded h-32 resize-none"
          ></textarea>
          {errors.message && <p className="text-red-500">{String(errors.message.message)}</p>}

          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-2xl">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
