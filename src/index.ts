// Style import

import { getWeather } from "./networking/weather";
import "./styles/main.scss";
import {
  buttonClick,
  buttonTemperature,
  butttonLanguageEs,
  butttonLanguageEn,
  displayLanguage,
  getCity,
  updateInteface,
} from "./dom-manipulation/domManipulation";

export const displayWeather = async () => {
  const city = getCity();
  if (city) {
    const weather = await getWeather(city);
    updateInteface(weather);
  }
};

if (buttonClick) buttonClick.addEventListener("click", displayWeather);

if (buttonTemperature)
  buttonTemperature.addEventListener("change", function () {
    displayWeather();
  });

if (butttonLanguageEs)
  butttonLanguageEs.addEventListener("click", function () {
    displayLanguage("es");
    (document.getElementById("language_es") as HTMLInputElement).className = "active";
    (document.getElementById("language_en") as HTMLInputElement).classList.remove("active");
  });
if (butttonLanguageEn)
  butttonLanguageEn.addEventListener("click", function () {
    displayLanguage("en");
    (document.getElementById("language_en") as HTMLInputElement).className = "active";
    (document.getElementById("language_es") as HTMLInputElement).classList.remove("active");
  });
