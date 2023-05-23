'use client'
import React from "react";

const Page: React.FC = () => {
  const handleContainerClick = (type: string) => {
    let message = "";
  switch (type) {
    case "Zmieszane":
      message = "Jaka mąka do szarlotki? Mąka pszenna krupczatka jest mąką idealną pod ciasta kruche. Ja jednak zazwyczaj mieszam mąką krupczatkę ze zwykła mąką pszenną tortową lub też uniwersalną. Czasem używam tylko mąki pszennej tortowej, ale daję wtedy małe jajko, ponieważ to niski typ mąki i nie potrzebuje tak dużo płynu. Przy idealnie dobranej ilości masła, mąka tortowa smakuje mi nawet bardziej niż ciasto kruche zrobione z krupczatki. ";
      break;
    case "Papier":
      message = "Jakie są najlepsze jabłka do zrobienia szarlotki? Są dwie odmiany jabłek, które polecam gorąco i które sprawdzą Ci się w 100%. Antonówki oraz szara reneta. Są to kwaśne, twarde jabłka. Nie puszczają tak dużo soku a zachowują idealną strukturę i smak, który jest wręcz pożądany przy takim cieście jak szarlotka. ";
      break;
    case "Szkło":
      message = "W pierwszej kolejności zagnieć ciasto kruche na szarlotkę. W dużej misce umieść razem dwie szklanki mąki (szklanka o pojemności 250 ml); jedno średnie jajko, które może być wyjęte prosto z lodówki; 1/4 szklankę cukru zwykłego lub drobnego - 80 g;  kostkę masła, którą polecam pokroić nożem na mniejsze kawałki. Masło również możesz wyjąć prosto z lodówki. Na koniec jeszcze tylko 2 łyżeczki proszku do pieczenia i ewentualnie szczypta soli. ";
      break;
    case "Metal i plastik":
      message = "Ciasto wyrabiaj dłońmi lub mikserem z hakami do ciasta kruchego. Ja zawsze ciasto kruche wyrabiam w dłoniach. Postaraj się to zrobić szybko. Na początku może Ci się wydawać, że ciasto jest zbyt sypkie, jednak w trakcie rozcierania masła powinno połączyć się w zwartą kulę. Ja wolę wyrabiać ciasto w dużej misce, ale możesz też zrobić to na dużej desce, czystym blacie lub stolnicy. ";
      break;
    case "Bio":
      message = "Przy tych proporcjach składników ciasto powinno wyjść idealne. Jeśli jednak dodasz za dużo mąki i okaże się, że ciasto nie łączy się w kulę polecam dodać łyżkę lodowatej wody lub płaską łyżkę kwaśnej śmietany 18 %.      ";
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