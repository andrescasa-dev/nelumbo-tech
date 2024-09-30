import Button from "@/components/Button";
import CheckBoxesFilter from "@/components/CheckBoxesFilter";
import { Dialog, DialogContent, DialogTrigger } from "@/components/Dialog";
import RangePriceFilter from "@/components/RangePriceFilter";
import StarRatingFilter from "@/components/StarRatingFilter";
import { brands } from "@/data";
import { cn } from "@/utils/utilsClient";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ListFilter } from "lucide-react";

function FilterDialog({ className }: { className: string }) {
  return (
    <Dialog>
      <DialogTrigger className={cn(className)} asChild>
        <Button
          variant="secondary"
          shape="pill"
          size="small"
          fullWidth={true}
          className="justify-center"
        >
          filters <ListFilter className="size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent
        title="filtros"
        description="filtra para encontrar tu producto"
      >
        <div
          className={cn(
            "flex h-fit w-[21.938rem] flex-col gap-5 bg-white py-6 shadow-soft",
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FilterDialog;
