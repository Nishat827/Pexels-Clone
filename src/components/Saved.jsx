import Loader from "./Loader";

const Saved = ({ saveImg, loader }) => {
  return (
    <>
      <div className="container-fluid text-center" id="top">
        {loader | (saveImg.length === 0) ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {saveImg.map((image) => (
                <div key={image.id} className="items">
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}

        {saveImg.length != 0 && (
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

export default Saved;
