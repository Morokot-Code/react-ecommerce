import React from "react";

function Contact() {
  return (
    <div className="font-display max-w-[90%] lg:max-w-3xl mx-auto my-50">
      <form action="" className="w-full shadow-md p-4 ">
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>

        <div className="mb-3">
          <label>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="mb-3">
          <label>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your phone"
            className="w-full p-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="mb-3">
          <label>
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            type="text"
            placeholder="Enter your messages"
            className="w-full p-2
            border border-gray-200 focus:outline-none focus:ring-1
            focus:ring-black transition-all duration-300 ease-in-out"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-primary text-white px-8 py-2">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
