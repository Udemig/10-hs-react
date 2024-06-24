import { render, screen } from "@testing-library/react";
import Card from ".";

const item = {
  name: "Chocolate",
  imagePath: "/images/chocolate.png",
  id: "bd76",
};

// Prop olarak veri alan bir bileşni test ediyorsak bileşenin aldığı propları test ortamındada göndermemiz gerekir
test("Miktar,başlık ve fotoğraf gelen propa göre ekrana basılır", () => {
  render(
    <Card
      item={item}
      amount={3}
      addToBasket={() => {}}
      removeFromBasket={() => {}}
    />
  );

  // miktar spanını çağır
  const amount = screen.getByTestId("amount");

  // span içereği 3 mi kontrol et
  expect(amount.textContent).toBe("3");

  // chocolate yazısı ekrana geldimi kontrol et
  // getBy elementi bulumazsa hata fırlatır bu yüzden sadece "x" yazı içeriğine sahip element ekranda mı kontrolü yapmak istiyorsak getByText ile elementi çağırmak yeterlidir daha sonrasında expext kullanmaya bile gerek kalmaz
  screen.getByText("Chocolate");

  // resim elementini çağır
  const image = screen.getByAltText("çeşit-resim");

  // resmin kaynağı doğru mu kontrol et
  expect(image).toHaveAttribute("src", "/images/chocolate.png");
});

// todo azalt butonunu aktiflik testleri

// ekle azalt butonlarında çalışıcak fonksiyonların testleri
