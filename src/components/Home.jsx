import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

const Home = ({ images, loader, setSaveImg, saveImg }) => {
  const saveImage = (img) => {
    let flag = true;
    if (saveImg !== null && saveImg.length > 0) {
      for (let i = 0; i < saveImg.length; i++) {
        if (saveImg[i].id === img.id) {
          flag = false;
          toast.info("Image alread saved!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          break;
        }
      }
    }
    if (flag) {
      setSaveImg([...saveImg, img]);
      //Using-ReactToastify
      toast("🦄 Image Saved!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container-fluid text-center" id="top">
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="items"
                  onClick={() => saveImage(image)}
                >
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {images.length != 0 && (
          <a
            href="#top"
            className="btn btn-warning my-5"
            style={{
              backgroundColor: "palevioletred",
              color: "white",
              border: "none",
            }}
          >
            Back to Top
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
