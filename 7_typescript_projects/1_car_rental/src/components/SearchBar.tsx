import { FormEvent, useMemo, useState } from "react";
import ReactSelect from "react-select";
import { makes } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const Button = ({ designs }: { designs?: string }) => {
  return (
    <button className={`ml-3 ${designs}`}>
      <img src="/search.svg" width={40} height={40} />
    </button>
  );
};

const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const [make, setMake] = useState<string>(params.get("make") as string);
  const [model, setModel] = useState<string>(params.get("model") as string);

  // sayfa her rende olduğunda useMemo sayesinde gereksiz yere tekrar hesaplama yapmayacak
  const options = useMemo(() => makes.map((make) => ({ label: make, value: make })), []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // urldeki parametreleri güncelle
    setParams({ make: make.toLowerCase(), model: model.toLowerCase() });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          placeholder="Marka Seçiniz"
          className="w-full text-black"
          options={options}
          onChange={(selected) => selected && setMake(selected.value)}
          defaultValue={{
            label: params.get("make") as string,
            value: params.get("make") as string,
          }}
        />
        <Button designs="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <img width={25} className="absolute ml-4" src="model-icon.png" />
        <input
          className="searchbar__input rounded text-black"
          placeholder="örn:Civic"
          type="text"
          onChange={(e) => setModel(e.target.value)}
          value={model}
        />
        <Button designs="sm:ml-6" />
      </div>
    </form>
  );
};

export default SearchBar;
