import React, { useState } from "react";
import FieldBuilder from "./components/FieldBuilder";
import JSONPreview from "./components/JSONPreview";
import { Layout, Typography, Row, Col } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [fields, setFields] = useState([
    {
      key: "",
      children: [],
    },
  ]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#001529", padding: "10px 20px" }}>
        <Title style={{ color: "#fff", margin: 0 }} level={3}>
          JSON Schema Builder
        </Title>
      </Header>

      <Content style={{ padding: 24, maxWidth: 1200, margin: "auto" }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <FieldBuilder fields={fields} onChange={setFields} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <JSONPreview fields={fields} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
