import React from "react";
/*
    * Normal bir class bir component işlevlerini yerine getiremez.
    * Bir class'ın component(bileşen) olmasını istiyorsak React'ın
    * içerisindeki Component classını miras alırız.

*/
class Pagination extends React.Component {
  // kurucu method
  constructor(props) {
    super(props);

    // class componentlerde state kullanımı
    this.state = {
      isDarkMode: true,
      count: 3,
    };
  }

  //! class componentlerde yaşam döngüsü (lifecycle)

  //* 1.Bileşenin ekrana basılma anı
  componentDidMount() {
    console.log("componentDidMount çalıştı.");
  }
  //* 2.Bileşenin güncellenme anını izleme
  componentDidUpdate() {
    console.log("componentDidUpdate çalıştı.");
  }

  //* 3.Bileşenin ekrandan gitme anını izleme
  componentWillUnmount() {
    console.log("componentWillUnmount çalıştı.");
  }

  //* render methodu ile ekrana basılacak olan arayüzü belirleme
  render() {
    return (
      <div className="d-flex justify-content-center my-5 gap-3">
        <button
          className="btn btn-secondary"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          -
        </button>
        {/* <h1>Sayfa:{this.state.count > 0 && this.state.count}</h1> */}
        <button
          className="btn btn-success"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}
export default Pagination;
