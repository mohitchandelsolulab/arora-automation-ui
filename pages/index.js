import { Navigation } from "../components/Navigation";
import { Deploy } from "../components/Deploy";

export default function Home() {
  return (
    <>
      <Navigation active="1" />
      <Deploy />
    </>
  );
}
