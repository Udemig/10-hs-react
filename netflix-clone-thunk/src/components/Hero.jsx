const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">Çıkış Yok</h1>
        <p className="text-start">
          Film, düşen bir uçağın içerisinde yaşam mücadelesi veren bir grup
          insanın yaşadıklarını konu ediniyor.
        </p>
        <p>
          <span>IMDB:</span>
          <span className="text-yellow-400 ms-2 font-semibold">6.4</span>
        </p>

        <div className="flex gap-5">
          <button className="p-2 bg-red-600 rounded hover:bg-red-700">
            Filmi İzle
          </button>
          <button className="p-2 bg-blue-600 rounded hover:bg-blue-700">
            Listeye Ekle
          </button>
        </div>
      </div>
      <div>
        <img
          className="hero-img my-4 object-contain rounded max-h-[300px]"
          src="https://image.tmdb.org/t/p/original/4woSOUD0equAYzvwhWBHIJDCM88.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
