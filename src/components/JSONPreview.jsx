import React from "react";
import { Card } from "antd";

const buildJSON = (fields) => {
  const result = {};
  fields.forEach((field) => {
    if (!field.key) return;
    if (field.type === "nested") {
      result[field.key] = buildJSON(field.children || []);
    } else {
      result[field.key] = field.type === "string" ? "sample text" : 0;
    }
  });
  return result;
};

const JSONPreview = ({ fields }) => {
  const json = buildJSON(fields);
  return (
    <Card title="📄 JSON Preview" style={{ width: 400 }}>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </Card>
  );
};

export default JSONPreview;
