import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [data, setData] = useState([]);

  const getAllCardContent = async () => {
    const { data } = await axios.get(
      "https://crudapp-rho.vercel.app/api/cardcontent"
    );
    setData(data.cardContents);
  };

  const deleteCardContent = async (id) => {
    await axios.delete(`https://crudapp-rho.vercel.app/api/cardcontent/${id}`);
    getAllCardContent();
  };

  useEffect(() => {
    getAllCardContent();
  }, []);
  return (
    <div className="container pt-3">
      <ul className="card-list">
        {data.map((item) => (
          <li key={item._id} className="card">
            <img src={item.imageUrl} alt={item.title} />
            <div className="card-body">
              <div className="card-body_top">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="btn-group">
                <button className="btn btn-primary">Edit</button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCardContent(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
