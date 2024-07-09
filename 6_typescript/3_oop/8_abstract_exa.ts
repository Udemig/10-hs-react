// Soyut Bir Parent Class
abstract class MusicPlayer {
  constructor(public apiUrl: string) {}

  getMusics() {
    console.log(this.apiUrl + " api'ından müzikler alındı");
  }

  abstract playMusic(name: string): void;
}

// Child Class
class Spotify extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " spotify'dan çalınıyor...");
  }
}

// Child Class
class AppleMusic extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " apple music'den çalınıyor...");
  }
}

const spo = new Spotify("www.api.spoty.com");
spo.getMusics();
spo.playMusic("test");

const apple = new AppleMusic("www.apple.api.com");
apple.getMusics();
apple.playMusic("selam");
