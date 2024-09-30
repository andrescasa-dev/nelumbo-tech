import CheckBoxesFilter from "./CheckBoxesFilter";
import RangePriceFilter from "./RangePriceFilter";
import ScrollArea from "./ScrollArea";
import Separator from "./Separator";
import StarRatingFilter from "./StarRatingFilter";

function Filters({ brands }: { brands: Item[] }) {
  return (
    <>
      <section className="px-6">
        <h2 className="mb-2 font-bold text-primary-500">Marcas</h2>
        <ScrollArea className="h-[12.063rem] px-6 max-sm:overflow-y-scroll">
          <CheckBoxesFilter items={brands} paramName={"brand"} />
        </ScrollArea>
      </section>

      <Separator />
      <section className="px-6">
        <h2 className="mb-2 font-bold text-primary-500">Precio</h2>
        <RangePriceFilter />
      </section>

      <Separator />
      <section className="px-6">
        <h2 className="mb-2 font-bold text-primary-500">Reviews</h2>
        <StarRatingFilter />
      </section>
    </>
  );
}

export default Filters;
