import { FilterCheckbox, RangeSlider } from ".";
import { Input } from "../ui";
import { Title } from "./title";
import React from "react";

type Props = {
  className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="500"
            min={500}
            max={10000}
            defaultValue={500}
          />
          <Input type="number" min={500} max={10000} placeholder="10000" />
        </div>
        <RangeSlider min={500} max={10000} step={10} value={[500, 10000]} />
      </div>

      <div className="mt-5">
        <p className="font-bold mb-3">Фильтрация</p>
      </div>
    </div>
  );
};
