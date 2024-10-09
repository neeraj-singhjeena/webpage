import { useState } from "react";

export default function Register1() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    dob: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      id="#Registration"
    >
      <form
        className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Course Inquiry Form
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
            Date of Birth:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="course"
          >
            Course:
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            <option value="course3">Course 3</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}














// components/Courses.js
export default function Courses() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course Card */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">IELTS Preparation Course</h3>
            <p className="text-gray-600">Prepare for the IELTS exam with comprehensive training and practice materials.</p>
          </div>

          {/* Course Card */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">PTE Academic Preparation Course</h3>
            <p className="text-gray-600">Prepare for the PTE Academic exam with targeted training and practice exercises.</p>
          </div>

          {/* Course Card */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Spoken English Course</h3>
            <p className="text-gray-600">Improve your spoken English skills through interactive lessons and practice sessions.</p>
          </div>
        </div>
        <button className="mt-8 bg-red-600 text-white px-6 py-2 rounded-full">Register Now</button>
      </div>

      {/* Additional Section */}
      <div className="bg-red-800 py-12 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Expert Instructors</h3>
              <p>Learn from seasoned educators with extensive experience in IELTS, PTE, and Spoken English instruction.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Comprehensive Curriculum</h3>
              <p>Access comprehensive courses covering all aspects of IELTS, PTE, and Spoken English preparation.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Recognized Certification</h3>
              <p>Earn industry-recognized certificates upon completion of our courses, validating your language proficiency.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Flexible Learning Options</h3>
              <p>Learn at your own pace and schedule, balancing your learning journey with other commitments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}