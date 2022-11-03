import React from "react";
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://media.istockphoto.com/photos/mom-and-son-having-fun-outdoor-picture-id1035146258?k=20&m=1035146258&s=612x612&w=0&h=YBcP5MGW_RDEU6oyUEpksPwP4Hks4oS5s_IbKESc7Jg="
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};
export default Search;
