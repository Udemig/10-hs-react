import { useEffect } from "react";
import { colors } from "../../utils/constants";
import { FilterProps } from "./size";
import { useSearchParams } from "react-router-dom";

const Color = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();

  // state her değiştiğinde urldeki parametreleri güncelle
  useEffect(() => {
    if (selected.length > 0) {
      // seçili eleman varsa aralarına , koyup urle ekle
      params.set("color", selected.join(","));
    } else {
      // seçili eleman yoksa urldeki parametreyi kaldır
      params.delete("color");
    }
    setParams(params);
  }, [selected]);

  // üzerine tıklanan numara state'de yoksa ekle varsa kaldır
  const toggle = (color: string) => {
    const found = selected.includes(color);

    if (!found) {
      setSelected([...selected, color]);
    } else {
      setSelected(selected.filter((i) => i !== color));
    }
  };

  return (
    <div>
      <h2 className="mb-4">Renkler</h2>

      <div className="grid grid-cols-5 gap-4">
        {colors.map((color) => {
          // numara seçili mi?
          const found = selected.includes(color.id);

          return (
            <div
              onClick={() => toggle(color.id)}
              style={{ background: color.code }}
              className={`py-2 px-4 rounded-md cursor-pointer transition hover:bg-zinc-400 text-transparent select-none  ${
                found ? "ring-[4px]" : ""
              }`}
            >
              .
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
