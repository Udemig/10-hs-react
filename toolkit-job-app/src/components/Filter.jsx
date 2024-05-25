import { sortOpt, statusOpt, typeOpt } from "../constants";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

const Filter = () => {
  return (
    <div className="filter-sec">
      <h2>Filtreleme Formu</h2>

      <form>
        <div>
          <label>Ara</label>
          <input type="text" />
        </div>
        <Select label="Durum" options={statusOpt} />
        <Select label={"Tür"} options={typeOpt} />
        <Select label={"Sırala"} options={sortOpt} />

        <div>
          <SubmitButton text={"Filtreleri Sıfırla"} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
