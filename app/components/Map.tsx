"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

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

interface MapProps {
  center: Location;
  markers: Point[];
}

export default function Map({ center, markers }: MapProps) {
  const [computedMarkers, _] = useState(markers);
  return (
    <MapContainer
      center={{ lat: center.location_lat, lng: center.location_lng }}
      zoom={12}
      style={{ height: "100vh", zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {computedMarkers.map((point) => (
        <Marker
          key={point._id}
          position={[point.location_lat, point.location_lng]}
        >
          <Popup style={{ width: "100%" }}>
            <h2 className="text-lg text-yellow-700 mb-5">{point.title}</h2>
            <h3 className="font-semibold">Dane teleadresowe:</h3>
            <p
              style={{ marginBottom: "2rem", marginTop: "0.5rem" }}
              dangerouslySetInnerHTML={{ __html: point.teleadress }}
            ></p>
            <h3 className="font-semibold">Godziny otwarcia</h3>
            <p
              style={{ marginTop: "0.5rem" }}
              dangerouslySetInnerHTML={{ __html: point.open_hours }}
            ></p>
            <a
              href={point.link}
              target="_blank"
              className="underline font-medium"
            >
              Zobacz szczegóły
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
