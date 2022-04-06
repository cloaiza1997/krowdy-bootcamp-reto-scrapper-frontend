export const URL_API =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "https://reto-scrapper-backend.herokuapp.com/";

export const URL_API_SCRAPPER = URL_API + "scrap/profiles";
export const URL_API_PROFILES = URL_API + "profiles";
