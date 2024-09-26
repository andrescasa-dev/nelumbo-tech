import React from "react";
import Checkbox from "./Checkbox";
import ScrollArea from "./ScrollArea";

function FilterAside() {
  return (
    <aside className="w-[21.938rem] shadow-soft p-6">
      <h3 className="mb-2 text-primary-500 font-bold">Marcas</h3>
      <ScrollArea className="h-[12.063rem] px-6">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
          <div className="flex gap-2.5 items-center">
            <Checkbox id="123" />
            <label htmlFor="123">Apple</label>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}

export default FilterAside;
