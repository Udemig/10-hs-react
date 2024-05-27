export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "36.668286",
    bl_lng: "46.943013",
    tr_lat: "42.540389",
    tr_lng: "26.827639",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "17bfa31bbbmsh1355592a7405f9bp1dd229jsnd7e87c1e1260",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};
