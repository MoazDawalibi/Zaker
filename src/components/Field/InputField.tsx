import { Input, InputProps } from 'antd';
import React from 'react';
import { Field } from 'formik';

const InputField = ({ name, ...props }: InputProps) => {
  return (
    <div className="ValidationField w-100">
      <Field
        as={Input}
        name={name}
        id={name}
        size="large"
        styles={{ width: '100%' }}
        {...props}
      />
    </div>
  );
};

export default React.memo(InputField);
