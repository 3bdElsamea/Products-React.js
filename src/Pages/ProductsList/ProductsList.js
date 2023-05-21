import { Link } from "react-router-dom";
import axiosInstance from "./../../Axios";
import { useEffect, useState } from "react";
import "./ProductsList.css";
import Nav from "../../SharedUi/Nav/Nav";

const ProductsList = () => {
  const [ProductsList, setProductsList] = useState([]);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    await axiosInstance
      .get("/products")
      .then((res) => {
        setProductsList(res.data.products);
      })
      .catch((err) => console.log(err));
  };

  return ProductsList ? (
    <section>
      <Nav />
      <div className="container  m-auto ">
        <div className="row">
          {ProductsList.map((product) => (
            <div className="col-3 my-2 ">
              <div className="card text-center ">
                {/*  Card Thumbnail*/}
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-header text-warning">
                  {product.title.length > 30
                    ? product.title.substring(0, 20) + "..."
                    : product.title}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.brand}</h5>
                  <p className="card-text">
                    {product.description.length > 50
                      ? product.description.substring(0, 50) + "..."
                      : product.description}
                  </p>
                  <Link to={`/product-details/${product.id}`}>
                    <button className="btn btn-outline-dark text-warning">
                      Product Details
                    </button>
                  </Link>
                </div>
                <div className="card-footer text-muted">{product.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <p>loading</p>
  );
};

export default ProductsList;
