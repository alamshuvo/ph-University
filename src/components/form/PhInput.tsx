import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const PhInput = ({ type, id, name, label }) => {
  const { register } = useFormContext();
  return (
    <div style={{marginBottom:"20px"}}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={id} />}
      />
     
    </div>
  );
};

export default PhInput;
