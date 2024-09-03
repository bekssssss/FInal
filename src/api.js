import axios from "axios";

export const $api = axios.create({
    baseURL: "https://ash2521.pythonanywhere.com/"
});