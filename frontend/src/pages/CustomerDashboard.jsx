import React, { useState } from 'react';
import { Link, Navigate } from 'react-router';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('requests');

  return (
    <div className="min-h-screen bg-gray-700 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-emerald-500">Customer Dashboard</h1>

      <div className="flex justify-center mb-4 space-x-4 text-emerald-500">
        <button onClick={() => setActiveTab('requests')} className="btn-tab bg-white rounded p-4">My Requests</button>
        <button onClick={() => setActiveTab('payment')} className="btn-tab bg-white rounded p-4">Make Payment</button>
        <button onClick={() => setActiveTab('review')} className="btn-tab bg-white rounded p-4">Review Service</button>
        <Link to='/requestService'><button className="btn-tab bg-white rounded p-4">New Request</button></Link>
      </div>

      <div className="bg-trasparent shadow-xl rounded p-6">
        {activeTab === 'requests' && <MyRequests />}
        {activeTab === 'payment' && <MakePayment />}
        {activeTab === 'review' && <ReviewService />}
        {activeTab === 'new' && <NewRequestForm />}
      </div>
    </div>
  );
};

const MyRequests = () => (
  <div className=''>
    <h2 className="text-xl font-semibold mb-4">Your Service Requests</h2>
    <ul className="space-y-3 text-black">
      <li className="p-3 bg-gray-100 rounded">Cleaning - Pending</li>
      <li className="p-3 bg-gray-100 rounded">Plumbing - Completed</li>
      <li className="p-3 bg-gray-100 rounded">Electrician - In Progress</li>
    </ul>
  </div>
);

const MakePayment = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>
    <form className="space-y-4 flex flex-col">
      <input type="text" placeholder="Service ID" className="input w-full" />
      <input type="number" placeholder="Amount" className="input w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Pay Now</button>
    </form>
  </div>
);

const ReviewService = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Review a Completed Service</h2>
    <form className="space-y-4 flex flex-col">
      <input type="text" placeholder="Service ID" className="input w-full" />
      <textarea placeholder="Write your review..." className="input w-full" rows="4" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit Review</button>
    </form>
  </div>
);



export default CustomerDashboard;
