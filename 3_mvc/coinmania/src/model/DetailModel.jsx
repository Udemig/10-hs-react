import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdOutlinePriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockLine } from "react-icons/ri";

export class DetailModel {
  constructor(coin, history) {
    // coin verisi
    this.coin = coin;

    // kartlar verisi
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: this.coin?.supply,
      },
      {
        icon: <MdOutlinePriceChange />,
        label: "Fiyat (USD)",
        value: this.coin?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim (%)",
        value: this.coin?.changePercent24Hr,
      },
      {
        icon: <RiStockLine />,
        label: "24s Hacim (%)",
        value: this.coin?.volumeUsd24Hr,
      },
    ];

    // fiyat geçmişi verisi
    this.chartData = {
      labels: history.map((item) => new Date(item.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "fiyat",
          data: history.map((item) => item.priceUsd),
        },
      ],
    };
  }
}
