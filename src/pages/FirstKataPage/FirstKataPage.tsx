import { ProductCard } from "../../katas/kata-1/ProductCard/ProductCard.tsx";
import { BackNavigation } from "../../components/BackLink/BackNavigation.tsx";
import { KataHeader } from "../../components/KataHeader/KataHeader.tsx";

export const FirstKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={1}
        title="Think before write any test. What do you want to test?"
        instructionsPath="kata-1 → README.md"
      />
      <ProductCard
        initialQuantity={1}
        stock={2}
        productName="Bootcamp Full-Stack"
      />
    </>
  );
};
