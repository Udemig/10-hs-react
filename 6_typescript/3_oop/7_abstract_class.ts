/*
 * Abstract Class (Soyut Sınıf)

 * Abstract class'lar sınıflar için birebir şema görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların özelliklerini, methodlarını ve bunların tiplerini belirleriz.
 
 * Soyut sınıfların doğrudan örnekleri oluşturulumazlar. Bu soyut sınıflar bir nevi sınıflar için tip tanımıdır. 
*/

// Soyut sınıf
abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}

  // normal bir method
  takePicture() {
    console.log("fotoğraf çekildi");
  }

  // soyut bir method
  abstract share(send_to: string): void;
}

// new TakePhoto() // soyut sınıftan doğrudan örnek OLUŞTURULAMAZ
// abstract class'ın özelliklerini ve methodlarını miras alan yeni bir class oluşturup. Oluşturduğumuz bu class'ın içerisinde yarım kalan görevi tanımlanmamış olan methodlarını tanımla
class Instagram extends TakePhoto {
  constructor(cameraMode: string, filter: string, username: string) {
    super(cameraMode, filter);
  }

  // abstract class'de oluşturlan ama görevini tanımlanmayan methodun görevini tanımla (implement)
  share(send_to: string): void {
    console.log("Çekilen fotoğraf hikaye olarak paylaşılıyor");
  }
}

const insta = new Instagram("ön kamera", "gece", "furkanevin");
insta.takePicture();
insta.share("test hesabı");

// soyut sınıfı 2. kez miras alma
class Twitter extends TakePhoto {
  constructor(tweet_id: number) {
    super("ön kamera", "doğa");
  }

  share(send_to: string): void {
    console.log("Çekilen fotoğrad tweet olarak paylaşıldı");
  }
}
