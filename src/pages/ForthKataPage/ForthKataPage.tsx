import { BackNavigation } from "../../components/BackLink/BackNavigation";
import { KataHeader } from "../../components/KataHeader/KataHeader";
import AsyncButton from "../../katas/kata-4/AsyncButton/AsyncButton";
import "./AsyncButton.css";

export const ForthKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={4}
        title="Async Matchers"
        instructionsPath="kata-4 → README.md"
      />
      <AsyncButton />
    </>
  );
};
