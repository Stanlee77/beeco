import LearnLink from "./components/LearnLink";

const Page = () => {
  return (
    <>
    <h1 className="p-10 py-5 text-[35px] text-sans mx-1 flex text-center items-center">Baw się i ucz, beeco to klucz!</h1>
    <div className="px-7 mt-5 text-[16px] text-sans mx-1 flex text-center items-center">To właśnie tutaj możesz poszerzać swoją wiedzę na temat segregacji! Wybierz przystępną formę nauki połączonej z rozrywką. Lubisz rywalizację? W takim razie zakładka Quiz jest dla Ciebie! Może wolisz przyswajać wiedzę poprzez ciekawostki? Koniecznie zajrzyj w zakładkę Ciekawostki!</div>
    <img 
      className="w-52 h-52 mx-auto mt-28"
      src="/beeco.png"
      alt="beeco" />
      <ul className="flex flex-row w-full justify-center align-center gap-5 fixed bottom-[100px]">
        <li>
          <LearnLink url="/learn/quiz" title="Quiz" />
        </li>
        <li>
          <LearnLink url="/learn/tips" title="Ciekawostka" />
        </li>
      </ul></>
  );
};

export default Page;
