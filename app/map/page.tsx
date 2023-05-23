"use client";
import ClientMap from "@/app/components/ClientMap";

interface Location {
  location_lat: number;
  location_lng: number;
}

interface Point extends Location {
  _id: string;
  title: string;
  open_hours: string;
  teleadress: string;
  link: string;
}

const fetchDumpstersLocationData = async () => {
  const res = await fetch(`${process.env.BASE_URI}/api/get-dumpsters-location`);
  // TODO FIX ISSUE ON MOBILE DOESN'T SHOW

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function MapPage() {
  const receivedLocations = await fetchDumpstersLocationData();
  const POZNAN_CENTER_GEO = {
    location_lat: 52.4068505,
    location_lng: 16.9268689,
  };

  return (
    <div>
      {receivedLocations.length > 0 && (
        <ClientMap center={POZNAN_CENTER_GEO} markers={receivedLocations} />
      )}
    </div>
  );
}
