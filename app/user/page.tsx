import React from "react";

const UserPanel = () => {
  return (
    <div className="bg-gray-200 p-2" style={{ height: "851px" }}>
      <h1 className="text-lg font-bold text-center">Twój profil</h1>
      <div className="mt-4">
        <div className="flex items-center">
          <img
            className="w-36 h-36 rounded-full ml-0"
            src="/photoofziomek.png"
            alt="Default avatar"
          />
          <img
            className="w-6 h-6  ml-40 absolute mb-24"
            src="/profileicon.png"
            alt="profile icon"
          />
          <h2 className="text-2 font-sans absolute ml-48 mb-24">jankowalski</h2>
          <img
            className="w-6 h-6  ml-40 absolute mb-8"
            src="/emailicon.png"
            alt="email icon"
          />
          <h2 className="text-2 font-sans absolute ml-48 mb-8">
            kowalskijan@wp.pl
          </h2>
          <img
            className="w-6 h-6  ml-40 absolute "
            style={{ marginTop: "28px" }}
            src="/ecoins.png"
            alt="ecoins icon"
          />
          <h2
            className="text-2 font-sans absolute ml-48 mb-8"
            style={{ marginTop: "61px" }}
          >
            eco-ins: 3472
          </h2>
          <img
            className="w-6 h-6  ml-40 absolute "
            style={{ marginTop: "90px" }}
            src="/trophyicon.png"
            alt="trophy icon"
          />
          <h2
            className="text-2 font-sans absolute ml-48 mb-8"
            style={{ marginTop: "122px" }}
          >
            ranking: #7
          </h2>
          <img
            className="rounded absolute w-[90%] l-5"
            style={{ marginTop: "400px" }}
            src="/aktywnosc.png"
            alt="aktywnosc"
          />
          {/* <img
            className="w-64 h-64 left-[50%] translate-x-[-50%] absolute"
            style={{ marginTop: "850px" }}
            src="/beeco.png"
            alt="beeco"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
