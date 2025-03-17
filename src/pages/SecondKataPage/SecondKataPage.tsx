import { ProductCard } from "../../katas/kata-1/ProductCard/ProductCard";
import { BackNavigation } from "../../components/BackLink/BackNavigation";
import { KataHeader } from "../../components/KataHeader/KataHeader";

export const SecondKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={2}
        title="Writing your first test"
        instructionsPath="kata-2 → README.md"
      />
      <ProductCard
        initialQuantity={1}
        stock={2}
        productName="Bootcamp Full-stack"
      />
    </>
  );
};
