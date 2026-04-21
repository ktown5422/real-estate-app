import Image from "next/image";
import ListingMapView from "./_components/ListingMapView";

export default function Home() {
  return (
    <main className="app-shell py-6">
      <ListingMapView type='Sell' />
    </main>
  );
}
