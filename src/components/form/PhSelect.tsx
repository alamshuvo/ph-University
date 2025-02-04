import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPhSelectProps = {
    label: string;
    name: string;
    options?: { value: string; label: string ,disabled?:boolean}[] | undefined;
    disabled?:boolean;
    mode?:'multiple'|undefined

}
const PhSelect = ({ label,name,options,disabled,mode }:TPhSelectProps) => {
  return (
    <Controller
    name={name}
      render={( {field,fieldState:{error}}) => (
        <Form.Item label={label}>
          <Select
          mode={mode}
            style={{ width: "100" }}
           {...field}
           options={options}
           size="large"
           disabled={disabled}
          />
          {error && <span style={{color:'red'}}>{error.message}</span>}
        </Form.Item>
        
      )}
    />
  );
};

export default PhSelect;
