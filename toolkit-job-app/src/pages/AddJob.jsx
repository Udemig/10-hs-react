import AutoInput from "../components/AutoInput";
import Select from "../components/Select";
import { statusOpt, typeOpt } from "../constants";
import SubmitButton from "../components/SubmitButton";

const AddJob = () => {
  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>
        <form>
          <AutoInput label={"Pozisyon"} name="position" />
          <AutoInput label={"Şirket"} name="company" />
          <AutoInput label={"Lokasyon"} name="location" />

          <Select label={"Durum"} options={statusOpt} />
          <Select label={"Tür"} options={typeOpt} />

          <div>
            <SubmitButton text={"Oluştur"} />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
