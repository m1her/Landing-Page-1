import { Header } from "./features/Header";
import { How } from "./features/How";
import { What } from "./features/What";
import { Features } from "./features/Features";
import { Pricing } from "./features/Pricing";
import { Footer } from "./features/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <How />
      <What />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
