import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-emerald-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Household Services</h1>
      <div className="space-x-4">
        <a href="/" className="hover:underline font-bold">Home</a>
        <a href="/login" className="hover:underline font-bold hover:text-blue-700">Login</a>
        <a href="/register" className="hover:underline font-bold hover:text-red-700">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;