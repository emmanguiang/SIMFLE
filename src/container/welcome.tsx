import * as React from "react";
import "antd/dist/antd.css";
import { Row, Col, Carousel, Card } from "antd";
import Meta from "antd/lib/card/Meta";

const Welcome: React.SFC = props => {
  return (
    <Row gutter={[16, 16]} justify="space-around">
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Carousel autoplay>
          <div>
            <h3>1 Placeholder</h3>
          </div>
          <div>
            <h3>2 Placeholder</h3>
          </div>
          <div>
            <h3>3 Placeholder</h3>
          </div>
          <div>
            <h3>4 Placeholder</h3>
          </div>
        </Carousel>
      </Col>
      <Col xs={24} sm={16} md={12} lg={12} xl={14}>
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
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
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
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    </Row>
  );
};

export default Welcome;
