import * as React from "react";
import "antd/dist/antd.css";
import { Layout as AntLayout, Menu, Icon } from "antd";
import Welcome from "./welcome";
import Products from "./products";

const { Header, Sider, Content } = AntLayout;

const Layout: React.SFC = props => {
  const [leftSideBarToggle, setLeftSideBarToggle] = React.useState(true);
  const [rightSideBarToggle, setRightSideBarToggle] = React.useState(true);

  return (
    <AntLayout>
      <Sider trigger={null} collapsible collapsed={leftSideBarToggle}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>User</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Icon
            className="trigger"
            type={leftSideBarToggle ? "menu-unfold" : "menu-fold"}
            onClick={() => setLeftSideBarToggle(!leftSideBarToggle)}
          />
        </Header>

        {/* Render Main Content here, also routing? */}
        <div style={{ padding: "25px" }}>
          {/* <Welcome/> */}
          <Products />
        </div>
      </AntLayout>
      <Sider collapsedWidth={0} collapsed={rightSideBarToggle}>
        right sidebar
      </Sider>
    </AntLayout>
  );
};

export default Layout;
