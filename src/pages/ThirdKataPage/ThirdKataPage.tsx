import { BackNavigation } from "../../components/BackLink/BackNavigation";
import { KataHeader } from "../../components/KataHeader/KataHeader";
import { ProductCard } from "../../katas/kata-1/ProductCard/ProductCard";

export const ThirdKataPage = () => {
  return (
    <>
      <BackNavigation />
      <KataHeader
        kataNumber={3}
        title="User interaction"
        instructionsPath="kata-3 → README.md"
      />
      <ProductCard
        initialQuantity={1}
        stock={2}
        productName="Bootcamp Full-stack"
      />
    </>
  );
};
