import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import queryString from "query-string";
import "./printing.css";
import Data from "../../../resources/printing.json";
import BannerComponent from "../components/Banner/Banner.component";
export default function PrintingPage(props) {
  const search = queryString.parse(props.location.search);
  const query = search.q;
  const [product, setProduct] = useState([]);
  const [banner, setBanner] = useState();
  useEffect(() => {
    if (query) {
      setProduct([]);
      if (Data[query]) {
        setBanner(Data[query]?.banner);
        for (let item of Data[query]?.lists) {
          setProduct((product) => [...product, item]);
        }
      }
    }
  }, [query]);
  const lists = product.map((e, index) => {
    if (product.length > 3) {
      return (
        <Grid item lg={3} md={3} xs={12} key={index}>
          <div className="img-product">
            <img src={e.image} width="100%" height="100%" />
          </div>
          <div className="name-product">
            <span>{e.name}</span>
          </div>
          <div className="content-product">
            <ul>
              {e.content.map((content) => {
                return <li key={content}>{content}</li>;
              })}
            </ul>
          </div>
        </Grid>
      );
    } else {
      return (
        <Grid item lg={4} md={4} xs={12} key={index}>
          <div className="img-product">
            <img src={e.image} width="100%" height="100%" />
          </div>
          <div className="name-product">
            <span>{e.name}</span>
          </div>
          <div className="content-product">
            {e.content.map((content) => {
              return <span key={content}>{content}</span>;
            })}
          </div>
        </Grid>
      );
    }
  });
  return (
    <Grid id="main">
      <BannerComponent banner={banner} />
      <div className="product">
        <div class="dot-line"></div>
        <Grid container spacing={2}>
          {lists}
        </Grid>
      </div>
      {/* {
                "name":"",
                "image":"",
                "content":[""]
            } */}
    </Grid>
  );
}
