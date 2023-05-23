import Image from "next/image";
import LearnLink from "./components/LearnLink";
import beecoImage from "../../public/beeco.png";

const Page = () => {
  return (
    <div className="flex flex-col justify-center align-center gap-2 pt-2 px-5">
      <h1 className="px-10 text-[32px] flex text-center items-center">
        Baw się i ucz, beeco to klucz!
      </h1>
      <div className="flex text-center items-center">
        To właśnie tutaj możesz poszerzać swoją wiedzę na temat segregacji!
        Wybierz przystępną formę nauki połączonej z rozrywką. Lubisz
        rywalizację? W takim razie zakładka Quiz jest dla Ciebie! Może wolisz
        przyswajać wiedzę poprzez ciekawostki? Koniecznie zajrzyj w zakładkę
        Ciekawostki!
      </div>
      <Image className="w-52 h-52 mx-auto" src={beecoImage} alt="beeco" />
      <ul className="flex flex-row w-full justify-center align-center gap-5 pt-5">
        <li>
          <LearnLink url="/learn/quiz" title="Quiz" />
        </li>
        <li>
          <LearnLink url="/learn/tips" title="Ciekawostka" />
        </li>
      </ul>
    </div>
  );
};

export default Page;
