/*
 Herkes içerisnde en az 1:
 string
 number
 booelan
 array
 object
 tuple
 union type
 any
 string literal > 
 tiplerinde veri barındıran bir özel tip oluştursun ve bu oluştuturulan tipi en az bir kere kullansın.
*/

type X = {
  key1: string;
  key2: number;
  key3: any;
  durum: "paketleniyor" | "dağıtımda" | "teslim edildi";
};

const değişken: X = {
  key1: "merhaba",
  key2: 355,
  key3: 123,
  durum: "paketleniyor",
};

// İLK CEVAP:
type kitap = {
  adi: string | number;
  konu: string;
  sayfa: number;
  varmi: boolean;
  tur: "korku" | "dram" | "aksiyon" | "fantastik" | "distopik";
  yazar: any;
};

const kitaplik: kitap = {
  adi: 1984,
  konu: "baskici devlet",
  sayfa: 318,
  varmi: true,
  tur: "distopik",
  yazar: "George Orwel",
};

// 2. CEVAP:

type footballer = {
  name: string;
  mevki: "kale" | "defans" | "orta saha" | "Forvet";
  yaş: number;
  evcil_hayvan: boolean;
  çocuklarının_isimleri: string[];
  memleketi: string | number;
  baba_adı: any;
};

const footballer = {
  name: "ahmet",
  mevki: "defans",
  yaş: 32,
  evcil_hayvan: false,
  çocuklarının_isimleri: ["ali", "ayşe"],
  memleketi: "ankara",
  baba_adı: "veli",
};

// 3.CEVAP
type kisi = {
  name: string;
  soyad: string;
  yas: number;
  evli: boolean;
  calisma_durumu: "calişiyor" | "calismiyor";
};

const kisi2 = {
  name: "emine",
  soyad: "kılıç",
  yas: 34,
  evli: true,
  calisma_durumu: "calişiyor",
};

// 4.cevap
type Bilgisayar = {
  marka: string;
  model: string | number;
  yil: number;
  dizüstü: boolean;
  özellikler: string[];
  boyutlar: [number, number, number];
  ek_özellikler:
    | "Dokunmatik Ekran"
    | "Arka Aydınlatmalı Klavye"
    | "Parmak İzi Okuyucu";
  ek_bilgi: any;
};

const bilgisayar: Bilgisayar = {
  marka: "Lenovo",
  model: "ThinkPad X1 Carbon",
  yil: 2023,
  dizüstü: true,
  özellikler: ["16GB RAM", "512GB SSD", "Intel i7"],
  boyutlar: [32, 22, 1.5],
  ek_özellikler: "Arka Aydınlatmalı Klavye",
  ek_bilgi: "Bu bilgisayar yüksek performanslı işler için uygundur.",
};

type motor = {
  marka: string;
  model: string | number;
  yil: number;
  sogutma: "Hava" | "Su" | "Yağ";
  ABS: boolean;
  Ozellikler: {
    silindir_sayisi: number;
    quick_shifter: boolean;
    motor_hacmi: number;
  };
  degisenler: string[];
  diger: any;
};

const R25: motor = {
  marka: "Yamaha",
  model: "R25",
  yil: 2022,
  sogutma: "Su",
  ABS: true,
  Ozellikler: {
    silindir_sayisi: 2,
    quick_shifter: false,
    motor_hacmi: 250,
  },
  degisenler: ["hava filtresi", "debriyaj balatası"],
  diger: { durum: "sifir" },
};

type film = {
  adi: string | number;
  türü: string;
  vizyon_tarihi: string;
  yönetmen: string;
  senarist: string[];
  yapımı: number;
  süre: number;
};

const esaret: film = {
  adi: "Esaretin Bedeli",
  türü: "DRAM",
  vizyon_tarihi: "10 Mart 1995",
  yönetmen: "Frank Darabont",
  senarist: ["Stephen King", "Frank Darabont"],
  yapımı: 1994,
  süre: 142,
};

type klup = {
  adi: string;
  toplamUyeSayisi: number;
  aktif: boolean;
  uyeler: string[];
  gorevler: object;
  faaliyetAlanlari: [string, string, string];
  uyelikTipleri: "normal" | "premiem" | "standart";
  katilim: any;
}

const mTravel: klup = {
  adi: "Gezi",
  toplamUyeSayisi: 248,
  aktif: true,
  uyeler: ["Can", "Elif", "Hasan", "Çetin"],
  gorevler: {},
  faaliyetAlanlari: ["Eğitim", "Danışmanlık", "Araştırma"],
  uyelikTipleri: "normal",
  katilim: "online",
};
