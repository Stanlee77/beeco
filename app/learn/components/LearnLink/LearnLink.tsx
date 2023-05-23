import Link from "next/link";
import { FC } from "react";

interface LearnLinkProps {
  url: string;
  title: string;
}

const LearnLink: FC<LearnLinkProps> = ({ url, title }) => {
  return (
    <Link
      className="p-4 bg-black rounded-full text-white w-36 text-xl flex justify-center align-center"
      href={url}
    >
      {title}
    </Link>
  );
};

export default LearnLink;
