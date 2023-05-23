"use client";
import React, { useEffect } from "react";

const Page: React.FC = () => {
  const [randomTip, setRandomTip] = React.useState<string | null>(null);

  async function getRandomTip() {
    const data = await fetch(`http://localhost:3000/api/get-tips`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    const randomIndex = Math.floor(Math.random() * data.length);

    setRandomTip(data[randomIndex].content);
  }

  useEffect(() => {
    getRandomTip();
  }, []);

  return (
    <section>
      <div className="flex flex-col justify-between gap-5 py-10 px-5">
        <p className="text-2xl text-center">Czy wiesz, że: </p>
        <h3 className="text-md text-center border-black border-2 rounded-md p-3">
          {randomTip}
        </h3>
      </div>
      <button
        className="bg-black text-white font-bold py-2 px-4 rounded-full bottom-28 left-[50%] transform translate-x-[-50%] absolute hover:bg-gray-700 transition duration-300 ease-in-out"
        onClick={() => getRandomTip()}
      >
        Losuj kolejną
      </button>
    </section>
  );
};

export default Page;
