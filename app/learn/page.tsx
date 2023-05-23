import LearnLink from "./components/LearnLink";

const Page = () => {
  return (
    <ul className="flex flex-row w-full justify-center align-center gap-5 fixed bottom-[100px]">
      <li>
        <LearnLink url="/learn/quiz" title="Quiz" />
      </li>
      <li>
        <LearnLink url="/learn/tips" title="Ciekawostka" />
      </li>
    </ul>
  );
};

export default Page;
