"use client";
import React, { useEffect } from "react";
import TrashBin from "./trashBin/TrashBin";
import { PolishTrashType, TrashType } from "../../types";
import If from "../../components/If";

const Page: React.FC = () => {
  const [userChoice, setUserChoice] = React.useState<TrashType | null>(null);
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);
  const [correctAnswer, setCorrectAnswer] = React.useState<TrashType | null>(
    null
  );
  const [itemName, setItemName] = React.useState<string>("");

  async function getRandomProduct() {
    const data = await fetch(`http://localhost:3000/api/quiz`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    setItemName(data[0].name);
    setCorrectAnswer(data[0].dump_into);
  }

  useEffect(() => {
    getRandomProduct();
  }, []);

  const handleChoice = (choice: TrashType) => {
    if (userChoice !== null) return;
    setUserChoice(choice);
    setIsCorrect(choice === correctAnswer);
  };

  const handleNextQuestion = () => {
    getRandomProduct();
    setUserChoice(null);
    setIsCorrect(null);
  };

  return (
    <section className="pt-5">
      <p className="text-xl text-center">Gdzie wyrzucisz: </p>
      <h3 className="text-3xl text-center">{itemName}?</h3>
      <If condition={isCorrect === true}>
        <div className="bg-green-500 p-10 m-5 rounded-xl flex justify-center items-center">
          <h1 className="text-4xl text-white">Brawo!</h1>
        </div>
      </If>
      <If condition={isCorrect === false}>
        <div>
          <div className="bg-red-600 p-10 m-5 rounded-xl flex justify-center items-center">
            <h1 className="text-4xl text-white">Pudło!</h1>
          </div>
          <h3 className="text-md text-center">
            Poprawna odpowiedź:{" "}
            {correctAnswer !== null ? PolishTrashType[correctAnswer] : null}
          </h3>
        </div>
      </If>
      <div className="fixed bottom-[60px] flex flex-col justify-center items-center gap-8">
        <If condition={userChoice !== null}>
          <button
            className="p-4 bg-[#ffde00] rounded-full border-1 border-black text-xl"
            onClick={handleNextQuestion}
          >
            Następne pytanie
          </button>
        </If>
        <div className="flex flex-wrap p-2 gap-1 justify-center">
          <TrashBin dumpInto={TrashType.glass} handleChoice={handleChoice} />
          <TrashBin dumpInto={TrashType.organic} handleChoice={handleChoice} />
          <TrashBin dumpInto={TrashType.other} handleChoice={handleChoice} />
          <TrashBin dumpInto={TrashType.plastic} handleChoice={handleChoice} />
          <TrashBin dumpInto={TrashType.paper} handleChoice={handleChoice} />
        </div>
      </div>
    </section>
  );
};

export default Page;
