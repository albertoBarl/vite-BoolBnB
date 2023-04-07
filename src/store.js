import { reactive } from "vue";

export const store = reactive({
  apiKey: "98ObIc3GfaoIHmTeR31cHCEP87hLeSmB",
  baseUrl: "http://127.0.0.1:8000",
  tomtomUrl: "https://api.tomtom.com/search/2/geocode/",
  apList: [],
  location: "",
  latitude: "",
  longitude: "",
});
