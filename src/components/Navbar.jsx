import React from "react";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://media.istockphoto.com/photos/mom-and-son-having-fun-outdoor-picture-id1035146258?k=20&m=1035146258&s=612x612&w=0&h=YBcP5MGW_RDEU6oyUEpksPwP4Hks4oS5s_IbKESc7Jg="
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};
export default Navbar;
