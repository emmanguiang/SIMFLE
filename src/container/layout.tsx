import * as React from "react";
import "antd/dist/antd.css";
import { Layout as AntLayout, Menu, Icon } from "antd";
import Welcome from "./welcome";
import Products from "./products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const { Header, Sider, Content } = AntLayout;

const Layout: React.SFC = props => {
  const [leftSideBarToggle, setLeftSideBarToggle] = React.useState(true);
  const [rightSideBarToggle, setRightSideBarToggle] = React.useState(true);

  return (
    <Router>
      <AntLayout>
        <Sider trigger={null} collapsible collapsed={leftSideBarToggle}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            <Menu.Item key="0">
              <Link to="/welcome" className="nav-text">
                <Icon type="video-camera" />
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>User</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/welcome" className="nav-text">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Link>
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

            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/products" component={Products} />
          </div>
        </AntLayout>
        <Sider collapsedWidth={0} collapsed={rightSideBarToggle}>
          right sidebar
      </Sider>
      </AntLayout>
    </Router>

  );
};

export default Layout;
