import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
function App() {
  const [images, setImages] = useState([]);
  const API_KEY = "wsUT6BzVWxF5hMNcgM0nDWgrnt0TdDGswOStdUerYfEnIMHH930arEr6";
  const [search, setSearch] = useState("nature");
  const [loader, setLoader] = useState(true);
  const [saveImg, setSaveImg] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      setImages(res.data.photos);
      setLoader(false);
    };

    const data = JSON.parse(localStorage.getItem("Images"));
    if (data) {
      setSaveImg(data);
    }
    fetchImage();
  }, [search]);

  useEffect(() => {
    if (saveImg.length != 0) {
      const jsonData = JSON.stringify(saveImg);
      localStorage.setItem("Images", jsonData);
    }
  }, [saveImg]);

  return (
    <>
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                images={images}
                loader={loader}
                setSaveImg={setSaveImg}
                saveImg={saveImg}
              />
            }
          />
          <Route
            path="/saved"
            element={<Saved saveImg={saveImg} loader={loader} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
