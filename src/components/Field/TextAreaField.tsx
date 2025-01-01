import { InputProps } from 'antd';
import React from 'react';
import { Field } from 'formik';
import TextArea from 'antd/es/input/TextArea';

const TextAreaField = ({ name, ...props }: InputProps) => {
  return (
    <div className="ValidationField TextAreaField">
      <Field
        as={TextArea}
        name={name}
        id={name}
        size="large"
        styles={{ width: '100%' }}
        autoSize={{ minRows: 4, maxRows: 10 }}
        {...props}
      />
    </div>
  );
};

export default React.memo(TextAreaField);
