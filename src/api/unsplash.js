import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID f68535254fadf0418056edcf34597feeb2cf8364d4c35ed1d1c62568904741e9"
  }
});
