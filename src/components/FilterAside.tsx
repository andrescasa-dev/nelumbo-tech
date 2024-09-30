import { cn } from "@/utils/utilsClient";
import CheckBoxesFilter from "./CheckBoxesFilter";
import RangePriceFilter from "./RangePriceFilter";
import ScrollArea from "./ScrollArea";
import Separator from "./Separator";
import StarRatingFilter from "./StarRatingFilter";

interface FilterAsideProps {
  brands: Item[];
  className?: string;
}

function FilterAside({ brands, className }: FilterAsideProps) {
  return (
    <aside
      className={cn(
        "flex h-fit flex-col gap-5 bg-white py-6 shadow-soft",
        className,
      )}
    >
      <section className="px-6">
        <h3 className="mb-2 font-bold text-primary-500">Marcas</h3>
        <ScrollArea className="h-[12.063rem] px-6">
          <CheckBoxesFilter items={brands} paramName={"brand"} />
        </ScrollArea>
      </section>

      <Separator />
      <section className="px-6">
        <h3 className="mb-2 font-bold text-primary-500">Precio</h3>
        <RangePriceFilter />
      </section>

      <Separator />
      <section className="px-6">
        <h3 className="mb-2 font-bold text-primary-500">Reviews</h3>
        <StarRatingFilter />
      </section>
    </aside>
  );
}

export default FilterAside;
