import Link from "next/link";
import { FC } from "react";

interface LearnLinkProps {
  url: string;
  title: string;
}

const LearnLink: FC<LearnLinkProps> = ({ url, title }) => {
  return (
    <Link
      className="px-4 py-2 font-bold bg-black rounded-full text-white w-36 flex justify-center align-center"
      href={url}
    >
      {title}
    </Link>
  );
};

export default LearnLink;
