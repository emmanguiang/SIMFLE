import * as React from "react";
import "antd/dist/antd.css";
import { Row, Col, Carousel, Card } from "antd";
import Meta from "antd/lib/card/Meta";

import { IProduct } from "../interfaces/iproduct";
import { Stocks } from "../dummies/products";
import { IProductStock } from "../interfaces/istocks";

const Products: React.SFC = props => {
  return (
    <Row gutter={[16, 16]} justify="space-around">
      {Stocks.products.map((product: IProductStock) => {
        return (
          <Col xs={24} sm={8} md={12} lg={12} xl={10}>
            <Card
              // loading={true}
              hoverable
              // style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title={product.product.name}
                description={`${product.remaining} available`}
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Products;
