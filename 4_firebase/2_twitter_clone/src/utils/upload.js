/*
 * Herhangi bir medya içeriğini (foto,video,ses,dosya,belge) veritbanlarına doğrudan kaydetmeyiz. Bu sorunu çözüm olarak medya içeriklerini sadece medya verisi depolaması için tasarlanmış olan yapılarda depolayup medyaya erişmek için kullanılan url adreslerini veritabanında saklarırız.
 */

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

// Bu fonksiyondan beklentimiz dosyayı alıp firebase storage'a yükleyip ardından url'ini return etmesi
const upload = async (file) => {
  // 1) dosya resim değilse veya dosya yoksa fonksiyonu durdur
  if (!file?.type.startsWith("image") || !file) {
    return null;
  }

  // 2) dosyanın yükleniceği konumun referansını al
  const imageRef = ref(storage, v4() + file.name);

  // 3) referansını oluşturduğumuz konuma dosayayı yükle
  await uploadBytes(imageRef, file);

  // 4) yükleninin dosyanın url'ini al ve return et
  return await getDownloadURL(imageRef);
};

export default upload;
