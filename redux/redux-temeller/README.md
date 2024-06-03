## State Yönetimi

- State:Uygulamadaki bileşenlerin sahip olduğu bilgi ve özellikler.

- Prop Drilling:Bileşenlerin yukarıdan aşağıya veri taşımasıdır.

- Context: Uygulamadaki state'i bütün bileşenler tarafından erişilebilen ve oluşturduğumuz merkezlerden yönettiğimiz state yönetim aracıdr.

- Redux:Bileşenlerin sahip olduğu ve merkezi olarak tutulması gereken state'lerin yönetildiği merkezi state yönetim aracıdır.

## Neden Context yerine Redux kullanırız?

- Kod tekrarını önler
- Performansı daha iyidir
- Bileşen içerisindeki karışıklığı azaltır
- Hata ayıklama daha kolaydır
- Orta ve büyük ölçekli projelerde state yönetimini daha kolay hale getirir

## Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposu

2. Reducer: Aksiyondan aldığı talimate göre store'da tutulan state'in nasıl değişeceğine karar veren fonksiyondur.

3. Action: Store'daki state'i güncellemek için reducer'a gönderdiğimiz nesnedir.(Emir)

- - Action iki değere sahip bir nesnedir:
- type(zorunlu):Action'ın görevini tanımlayan string
- payload(opsiyonel):Action'ın verisi

4. Dispatch(Sevketmek):Action'un gerçekleştiğini reducer'a haber veren method

## Redux Kurulum Aşamaları

- `redux` ve `react-redux` paketleri indirilir(npm i redux react-redux)
