import CheckBoxesFilter from "./CheckBoxesFilter";
import RangePriceFilter from "./RangePriceFilter";
import ScrollArea from "./ScrollArea";
import Separator from "./Separator";
import StarRatingFilter from "./StarRatingFilter";

interface FilterAsideProps {
  brands: Item[];
}

function FilterAside({ brands }: FilterAsideProps) {
  return (
    <aside className="w-[21.938rem] shadow-soft flex flex-col gap-5 py-6 bg-white h-fit">
      <section className="px-6">
        <h3 className="mb-2 text-primary-500 font-bold">Marcas</h3>
        <ScrollArea className="h-[12.063rem] px-6">
          <CheckBoxesFilter items={brands} paramName={"brand"} />
        </ScrollArea>
      </section>

      <Separator />
      <section className="px-6">
        <h3 className="mb-2 text-primary-500 font-bold">Precio</h3>
        <RangePriceFilter />
      </section>

      <Separator />
      <section className="px-6">
        <h3 className="mb-2 text-primary-500 font-bold">Reviews</h3>
        <StarRatingFilter />
      </section>
    </aside>
  );
}

export default FilterAside;
