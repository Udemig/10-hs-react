import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  /*
    ! react router dom
    * Tarayıcıdaki url'e göre ekrana hangi bileşenin basılacağını belirler.
    * react router dom tarayıcıdaki url'e window nesnesi ile erişir.
  
  */
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
