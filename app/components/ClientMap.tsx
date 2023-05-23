import dynamic from "next/dynamic";

const ClientMap = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
  loading: () => <p className="text-xl">Map is loading...</p>,
});

export default ClientMap;
