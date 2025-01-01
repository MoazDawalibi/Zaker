import { Form, Formik } from 'formik';
import React from 'react';
import InputField from '../Field/InputField';
import TextAreaField from '../Field/TextAreaField';

const Right = () => {
  const handleSubmit = () => {};
  return (
    <div className="Right">
      <h1>تواصل معنا بسرعة</h1>
      <Formik initialValues={handleSubmit} onSubmit={handleSubmit}>
        <Form>
          <div className="Forms">
            <InputField name="name" placeholder="أدخل الاسم" />
            <InputField name="email" placeholder="أدخل البريد الإلكتروني" />
            <InputField name="number" placeholder="هاتفك" />
            <InputField name="company" placeholder="شركتك" />
            <TextAreaField name="message" placeholder="رسالة" />
          </div>
          <button className="scale">ارسل رسالة</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Right;
