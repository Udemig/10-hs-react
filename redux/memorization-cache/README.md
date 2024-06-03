# Memorization

- Memorization bir optimizasyon tekniğidir.
  Daha önce hesaplanmış bir veriyi ya da daha önce render edilmiş bir bileşen tekrardan gerektiğinde
  yeniden hesaplama yapmak yerine ilk hesaplamadaki verileri saklarız ve saklanan verileri kullanırız.
  Bu sayede gereksiz hesaplamaların önüne geçmiş oluruz.Performansı arttırız.Sayfa yüklenme sürelerini
  kısaltırız.

# useMemo()

- Daha önce yapılan hesaplamaların sonuçlarını hafızada tutar.
- Bu sayede her render sırasında tekrar hesaplama yapmak yerine daha önceki yapılan ve arabellekte tutulan hesaplama sonucunu alarak gereksiz hesaplamaların önüne geçer.

# useCallBack()

- Daha önce oluşturulan bir fonksiyonu hafızada tutar.

# React.memo()

- Daha önce ekrana basılan bir bileşeni hafızada tutar.
