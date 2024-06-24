import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Koşulların onaylanma durumuna göre buton aktifliği", () => {
  // 1) test edilecek bileşen render edilir
  render(<Form />);

  // 2) gerekli elementlerı çağır (checkbox | button)
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  // 3) checkbox tiklenmemişmi kontrol et
  expect(checkbox).not.toBeChecked();

  // 4) buton inaktif mi kontrol et
  expect(button).toBeDisabled();

  // 5) checbox'ı tikle
  fireEvent.click(checkbox);

  // 6) buton aktif mi kontrol et
  expect(button).toBeEnabled();

  // 7) checbox'tan tiki kaldır
  fireEvent.click(checkbox);

  // 8) buton inaktif mi kontrol et
  expect(button).toBeDisabled();
});

test("Butonun hover durumuna göre bildirim gözükür", () => {
  // 1) formu renderla
  render(<Form />);

  // 2) gerekli elementleri al
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const alert = screen.getByText(/size gerçekten/i);

  // 3) bildirimin ekranda olmadığını kontrol et
  expect(alert).not.toBeVisible();

  // 4) checkboxı tikle
  fireEvent.click(checkbox);

  // 5) mouse'u butonun üzerine getir
  fireEvent.mouseEnter(button);

  // 6) ekranda bildirim var mı kontrol et
  expect(alert).toBeVisible();

  // 7) mouse'u butondan çek
  fireEvent.mouseLeave(button);

  // 8) bildirimin ekranda olmadığını kontrol et
  expect(alert).not.toBeVisible();
});
