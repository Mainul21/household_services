import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-700 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-emerald-500">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Requests Section */}
        <div className="bg-transparent rounded-xl shadow-xl p-5 text-emerald-400">
          <h2 className="text-xl font-semibold mb-4">Service Requests</h2>
          <ul className="space-y-2">
            <li className="p-3 border rounded-md">
              Request from <strong>John Doe</strong> for plumbing
              <div className="text-sm text-gray-500">Status: Pending</div>
            </li>
            <li className="p-3 border rounded-md">
              Request from <strong>Jane Smith</strong> for cleaning
              <div className="text-sm text-gray-500">Status: Completed</div>
            </li>
          </ul>
        </div>

        {/* Assign Worker Section */}
        <div className="bg-transparent rounded-xl shadow-xl p-5 text-emerald-400 ">
          <h2 className="text-xl font-semibold mb-4">Assign Workers</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Select Request</label>
              <select className="w-full border p-2 rounded hover:text-black">
                <option className="">John Doe - Plumbing</option>
                <option className="">Jane Smith - Cleaning</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium ">Select Worker</label>
              <select className="w-full border p-2 rounded hover:text-black">
                <option>Worker A</option>
                <option>Worker B</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Assign
            </button>
          </form>
        </div>

        {/* Payment Status Section */}
        <div className="bg-transparent rounded-lg shadow-md p-5 text-emerald-400">
          <h2 className="text-xl font-semibold mb-4">Payment Status</h2>
          <ul className="space-y-2">
            <li className="p-3 border rounded-md">
              John Doe - <span className="text-green-600">Paid</span>
            </li>
            <li className="p-3 border rounded-md">
              Jane Smith - <span className="text-red-600">Pending</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
