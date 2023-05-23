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
    <section className="pt-5">
      <p className="text-xl text-center">Czy wiesz, że: </p>
      <h3 className="text-[22px] text-center border-2  rounded-md border-yellow-500 p-4 mx-10">{randomTip}</h3>
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mt-5 block mx-auto"
        onClick={() => getRandomTip()}
      >
        Losuj kolejną
      </button>
    </section>
  );
};

export default Page;
