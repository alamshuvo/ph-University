import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const PhInput = ({ type, id, name, label }) => {
  const { register } = useFormContext();
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={id} size="large"/>
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PhInput;
