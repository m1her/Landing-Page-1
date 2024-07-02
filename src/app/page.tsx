import Image from "next/image";
import { Header } from "./features/Header";
import { Body } from "./features/Body";

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
