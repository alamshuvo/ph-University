
// import { ReactNode } from 'react';
// import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
// import {Form} from 'antd'

//  type TFromConfig = {
//     defaultValues? : Record<string,any>,
//     resolver ? : any
//  }
// type TFromProps ={
//     onSubmit : SubmitHandler<FieldValues>;
//     children : ReactNode
// }& TFromConfig
// const PhForm = ({onSubmit,children,defaultValues,resolver}: TFromProps) => {
//     const fromConfig: TFromConfig = {};
//     if (defaultValues) {
//         fromConfig[`defaultValues`] = defaultValues;
//     }
//     if (resolver) {
//         fromConfig[`resolver`] = resolver;
//     }
    
//     const methods = useForm()
//     return (
//         <FormProvider {...methods}>
//         <Form layout='vertical' onFinish={methods.handleSubmit(onSubmit)}>
//          {children}
//         </Form>
//         </FormProvider>
//     );
// };

// export default PhForm;

import { Form } from 'antd';
import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PHForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }

  if (resolver) {
    formConfig['resolver'] = resolver;
  }

  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;