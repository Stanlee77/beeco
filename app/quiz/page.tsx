'use client'
import React from "react";

const Page: React.FC = () => {
  const handleContainerClick = (type: string) => {
    let message = "";
  switch (type) {
    case "Zmieszane":
      message = "Jaka mąka do szarlotki?";
      break;
    case "Papier":
      message = "Jakie są najlepsze jabłka do zrobienia szarlotki?";
      break;
    case "Szkło":
      message = "W pierwszej kolejności zagnieć ciasto kruche na szarlotkę.";
      break;
    case "Metal i plastik":
      message = "Ciasto wyrabiaj";
      break;
    case "Bio":
      message = "Przy tych proporcjach składników ciasto powinno wyjść idealne.";
      break;
    default:
      message = "Z ciasta uformuj kulę. Zawiń je w folię i umieść w lodówce na całą godzinę."
  };
  alert(message);
}    
  return (
    <div className="w-full">
        <div className="flex justify-between flex-col items-center text-black text-[40px]">
          <span className="mt-14 text-center">Do jakiego kosza wrzucisz harnas ?</span>
        </div>
        <div className="flex justify-center mt-[60px] gap-x-5">
        <button className="bg-black w-28 h-28 flex rounded-b-3xl flex-col items-center text-white text-[20px]" 
        onClick={() => handleContainerClick('Zmieszane')}>
        <span className="mt-5">Zmieszane</span>
        <img className="w-10 h-10 mt-1" src="/recycling.png" alt="recycling icon" />
        </button>
        <button className="bg-blue-500 w-28 h-28 flex rounded-b-3xl flex-col items-center text-white text-[20px]" 
        onClick={() => handleContainerClick('Papier')}>
        <span className="mt-5">Papier</span>
        <img className="w-10 h-10" src="/recycling.png" alt="recycling icon" />
        </button>

        </div>


        <div className="flex justify-center mt-[30px] gap-x-3">
        <button className="bg-green-500 w-28 h-28 flex rounded-b-3xl flex-col items-center text-white text-[20px]"
        onClick={() => handleContainerClick('Szkło')}>
        <span className="mt-5">Szkło</span>
        <img className="w-10 h-10" src="/recycling.png" alt="recycling icon" />
        </button>
        <button className="bg-yellow-300 w-28 h-28 flex rounded-b-3xl flex-col text-black items-center  text-[20px] text-center"
        onClick={() => handleContainerClick('Metal i plastik')}>
        <span className="mt-1">Metal i plastik</span>
        <img className="w-10 h-10 mt-1" src="/recycling_rzulty.png" alt="recycling icon" />
        </button>
        <button className="bg-[#A0522D] w-28 h-28 flex rounded-b-3xl flex-col items-center text-white text-[20px]"
        onClick={() => handleContainerClick('Bio')}>
        <span className="mt-5">Bio</span>
        <img className="w-10 h-10" src="/recycling.png" alt="recycling icon" />
        </button>

        </div>
        

        <img className="w-56 h-56 mx-auto" style={{ marginTop: '60px'}} src="/beeco.png" alt="beeco icon" />
    </div>
  );
};

export default Page;