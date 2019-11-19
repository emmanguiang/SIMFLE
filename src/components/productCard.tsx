import * as React from "react";
import "antd/dist/antd.css";
import { Row, Col, Carousel, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { IProduct } from "../interfaces/iproduct";

const Product: React.SFC<IProduct> = props => {
  return (
    <Card
      loading={props ? false : true}
      hoverable
      cover={
        <img
          alt="example"
          // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default Product;
