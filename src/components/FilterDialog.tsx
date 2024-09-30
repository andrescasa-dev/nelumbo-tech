import Button from "@/components/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/Dialog";
import { brands } from "@/data";
import { cn } from "@/utils/utilsClient";
import { ListFilter } from "lucide-react";
import Filters from "./Filters";

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
          className={
            "flex h-fit w-[21.938rem] flex-col gap-5 bg-white py-6 shadow-soft"
          }
        >
          <Filters brands={brands} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FilterDialog;
