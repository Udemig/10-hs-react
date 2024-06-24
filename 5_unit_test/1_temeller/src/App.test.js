// App.test.js: App bileşenin testlerinin yazıldığı dosya
// Bir dosyanın test dosyası odluğunu .test.js/jsx uzantılarından anlayabilirsiniz.

/*
 * Unit Test

 * Yazdığımız dinamik olan bütün react bileşenlerini test edicez.
 
 * Bu sayede kod değişikliği yapıldığında , yaptığımız değişiklikleri githuba göndermden önce testleri çalıştırığ her şeyin doğru çalışıtığından emin olabilir. Büyük projelerde her işlevi el ile kontrol etmek çok fazla zman alır ve gözden bir şey kaçırma ihtimali yüksektir. Bu yüzden unit test ile bileşenler görevlerini yerine getiriyor mu diye tek tek her bileşenin testi yazılır.
 
 * Kod değişkliği yapıldığında yeni kodlar githuab gönderilmeden önce testler çalıştırılır ve her şeyind doğru çalıştığından emin olunur. Bu sayede her değişklikte bütün projeyi el ile kontrol etmeye gerek kalmaz 
 */

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Button from "./Button";

// bir fonksiyonun veya bileşenin unit testini yazmak için "test" veya "it" methodu kullanılır.
// test methodu 2 parametre alır
// 1) string > testin açıklaması
// 2) fonksiyon > testin yapıldığı yer
test("react öğren linki ekrana basılır", () => {
  // test edilecek olan bileşeni test ortamında "ekrana basılır"
  render(<App />);

  // bileşeni tarayıcıda ekrana basıyor olsaydık document.querySelector(a) vb. methodlar kullanarak elementi çağırırdıık ama uni testteki render methodu tarayıcıda değil donanımızda çalışır bundan dolayı document yerine screen ve queryselector getelementby id yerinine de farklı methodlar kullanırız.
  const linkElement = screen.getByText("React Öğren");

  // çağrılan elementten beklenitimiz test edicez
  expect(linkElement).toBeInTheDocument();
});

//
//
//
// buton bileşeni için test
test("Buton tıklanma olayında renk ve yazı değişir", () => {
  // 1) test edilecek olan bileşen render edilir
  render(<Button />);

  // 2) test edilcek elementi çağır
  const button = screen.getByRole("button");

  // 3) buton rengi kırmızıdır
  expect(button).toHaveStyle({ background: "red" });

  // 4) butonun içinde "Maviye Çevir"
  expect(button).toHaveTextContent("Maviye Çevir");

  // 5) butona tıkla
  fireEvent.click(button);

  // 6) butonun rengi mavidir
  expect(button).toHaveStyle({ background: "aqua" });

  // 7) butonun içinde "Kırmızıya Çevir"
  expect(button).toHaveTextContent("Kırmızıya Çevir");

  // 8) butona tekrar tıkla
  fireEvent.click(button);

  // 9) buton rengi kırmızıdır
  expect(button).toHaveStyle({ background: "red" });

  // 10) butonun içinde "Maviye Çevir"
  expect(button).toHaveTextContent("Maviye Çevir");
});
