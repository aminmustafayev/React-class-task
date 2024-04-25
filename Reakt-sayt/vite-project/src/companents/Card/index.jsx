import "./index.css";

const Card = ({ data, setdata }) => {
  const handleDelete = (id) => {
    if (window.confirm("Delete It?")) {
      const target = data.filter((x) => x.id != id);
      setdata([...target]);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((e) => (
            <div className="col-lg-4" key={e.id}>
              <div className="card text-center">
                <img src={e.Image} alt="" />
                <h2>{e.title}</h2>
                <p>${e.price}</p>
                <button
                  onClick={() => handleDelete(e.id)}
                  className="btn btn-danger w-25 m-auto mb-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
