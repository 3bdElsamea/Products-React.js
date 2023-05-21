import axiosInstance from "./../../Axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Nav from "../../SharedUi/Nav/Nav";

const ProductDetails = (props) => {
  const productId = useParams().userId;
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      setProductDetails(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return productDetails ? (
    <>
      <Nav />
      <div className="product-details">
        <div className="product-details__image my-2">
          <img src={productDetails.thumbnail} alt="product" />
        </div>
        <div className="product-details__info">
          <h1 className={"border border-5 bg-dark text-warning"}>
            {productDetails.title}
          </h1>
          <h3 className={"border border-5 bg-warning text-dark"}>
            {productDetails.brand}
          </h3>
          <h4 className={"border border-5 bg-dark text-warning"}>
            {productDetails.description}
          </h4>
          <h3 className={"border border-5 bg-warning text-dark"}>
            Price : {productDetails.price} $
          </h3>
          <h3 className={"border border-5 bg-dark text-warning"}>
            Rating : {productDetails.rating}
          </h3>
          <h3 className={"border border-5 bg-warning text-dark"}>
            Discount : {productDetails.discountPercentage} %
          </h3>
          <h3 className={"border border-5 bg-dark text-warning"}>
            Category : {productDetails.category}
          </h3>
          {/*  Stock*/}
          <h3 className={"border border-5 bg-warning text-dark"}>
            Stock : {productDetails.stock}
          </h3>
          {/*  Gallery*/}
          <div className="product-details__gallery border border-5 border-warning">
            <h1 className={"border border-5 bg-dark text-warning"}>Gallery</h1>
            <div className="product-details__images">
              {productDetails.images?.map((image) => (
                <img src={image} alt="product" className=" imgGrid" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <p>loading</p>
  );
};

export default ProductDetails;
