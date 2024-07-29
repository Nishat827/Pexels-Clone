import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="nav mt-3">
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("nature");
            navigate("/");
          }}
        >
          Nature
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("travel");
            navigate("/");
          }}
        >
          Travel
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("city");
            navigate("/");
          }}
        >
          city
        </div>
        <div
          className="button btn btn-outline-secondary mx-3"
          onClick={() => {
            setSearch("car");
            navigate("/");
          }}
        >
          Car
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("fashion");
            navigate("/");
          }}
        >
          Fashion
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("animal");
            navigate("/");
          }}
        >
          Animal
        </div>
        <div
          className="button btn btn-outline-info text-line mx-3"
          onClick={() => {
            setSearch("technology");
            navigate("/");
          }}
        >
          Technology
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("finance");
            navigate("/");
          }}
        >
          Bussiness & Finance
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("tokyo");
            navigate("/");
          }}
        >
          Tokyo
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("dubai");
            navigate("/");
          }}
        >
          Dubai
        </div>
        {location.pathname == "/saved" ? (
          <div
            className="button btn btn-outline-warning  mx-3"
            style={{
              backgroundColor: "blueviolet",
              color: "white",
              border: "none",
              boxShadow: "1px 1px 1px blueviolet",
            }}
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btn-outline-warning  mx-3"
            style={{
              backgroundColor: "blueviolet",
              color: "white",
              border: "none",
              boxShadow: "1px 1px 1px blueviolet",
            }}
            onClick={() => navigate("/saved")}
          >
            Saved
          </div>
        )}
      </div>

      <div className="container my-4" style={{ width: "780px" }}>
        {location.pathname === "/" && (
          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-dark text-light"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setSearch(e.target.value)}
              style={{}}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

// wsUT6BzVWxF5hMNcgM0nDWgrnt0TdDGswOStdUerYfEnIMHH930arEr6
