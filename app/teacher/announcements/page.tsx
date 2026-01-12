"use client";
import { useState } from "react";

export default function CreateAnnouncement() {
  const [loading, setLoading] = useState(false);

  async function handlePost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      Title: formData.get("title") as string,
      Text: formData.get("text") as string,
    };
      console.log("All Ok");

    try {
      const response = await fetch("/api/auth/teacher/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),  
      });

      const result = await response.json();

      if (response.ok) {
        alert("Success: " + result.message);
        event.currentTarget.reset(); 
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.log(error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    <div className="p-6  mt-10  shadow-sm border max-w-md mx-auto  border-gray-800 rounded-xl bg-black/65 delay-500 duration-600 animate-fade">
      <h2 className="text-xl font-bold mb-4">Post New Announcement</h2>
      <form onSubmit={handlePost} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 ">Title</label>
          <input
            name="title"
            required
            className="w-full mt-1 p-2 border rounded  outline-none border-gray-800"
            placeholder="Important Update"
          /> 
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 ">Content</label>
          <textarea
            name="text"
            required
            rows={4}
            className="w-full mt-1 p-2 border rounded  outline-none border-gray-800"
            placeholder="Type your message here..."
          />
        </div>
        <button
          type="submit"
          className="w-full  bg-blue-600 text-white py-2 cursor-default rounded font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition "
        >
          {loading ? "Processing..." : "Submit Announcement"}
        </button>
      </form>
    </div>
    </>
  );
}
/*<div className="p-6 bg-transparent mt-10 rounded-2xl shadow-sm border max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Post New Announcement</h2>
      <form onSubmit={handlePost} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            name="title"
            required
            className="w-full mt-1 p-2 border rounded  outline-none"
            placeholder="Important Update"
          /> 
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            name="text"
            required
            rows={4}
            className="w-full mt-1 p-2 border rounded z-10 outline-none"
            placeholder="Type your message here..."
          />
        </div>
        <button
          type="submit"
          className="w-full z-10 bg-blue-600 text-white py-2 cursor-default rounded font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          {loading ? "Processing..." : "Submit Announcement"}
        </button>
      </form>
    </div>*/