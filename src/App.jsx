import React, { useState } from "react";
import FieldBuilder from "./components/FieldBuilder";
import JSONPreview from "./components/JSONPreview";
import { Layout, Typography } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [fields, setFields] = useState([]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#001529", padding: "10px 20px" }}>
        <Title style={{ color: "#fff", margin: 0 }} level={3}>
          JSON Schema Builder
        </Title>
      </Header>

      <Content style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
        <FieldBuilder fields={fields} onChange={setFields} />
        <div style={{ marginTop: 24 }}>
          <JSONPreview fields={fields} />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
