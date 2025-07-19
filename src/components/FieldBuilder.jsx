import React from "react";
import { Input, Button, Select, Space, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const FieldBuilder = ({ fields, onChange }) => {
  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    if (key === "type" && value !== "nested") {
      updatedFields[index].children = [];
    }
    onChange(updatedFields);
  };

  const handleAddField = () => {
    onChange([...fields, { key: "", children: [] }]);
  };

  const handleRemoveField = (index) => {
    const updated = fields.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleNestedChange = (index, children) => {
    const updatedFields = [...fields];
    updatedFields[index].children = children;
    onChange(updatedFields);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <Card key={index} style={{ marginBottom: 12 }} size="small">
          <Space direction="vertical" style={{ width: "100%" }}>
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
              <Input
                placeholder="Field Name"
                value={field.key}
                onChange={(e) => handleFieldChange(index, "key", e.target.value)}
              />
              <Select
                value={field.type}
                style={{ width: 120 }}
                placeholder="Select Type"
                onChange={(val) => handleFieldChange(index, "type", val)}
              >
                
                <Option value="string">String</Option>
                <Option value="number">Number</Option>
                <Option value="nested">Nested</Option>
              </Select>
              <Button
                danger
                icon={<MinusCircleOutlined />}
                onClick={() => handleRemoveField(index)}
              />
            </Space>

            {field.type === "nested" && (
              <div style={{ paddingLeft: 20, borderLeft: "2px solid #eee" }}>
                <FieldBuilder
                  fields={field.children || []}
                  onChange={(children) => handleNestedChange(index, children)}
                />
              </div>
            )}
          </Space>
        </Card>
      ))}

      <Button type="dashed" block icon={<PlusOutlined />} onClick={handleAddField}>
        Add Field
      </Button>
    </div>
  );
};

export default FieldBuilder;
