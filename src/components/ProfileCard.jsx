import React from "react";

const ProfileCard = ({ name, title, email, image }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img className="w-24 h-24 rounded-full mx-auto border-4 border-white" src={image} alt={name} />
      <h2 className="text-2xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-400">{title}</p>
      <p className="text-blue-400 mt-2">{email}</p>
    </div>
  );
};

export default ProfileCard;
