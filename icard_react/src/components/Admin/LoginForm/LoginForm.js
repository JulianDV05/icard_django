import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
<<<<<<< HEAD
import { loginApi } from "../../../api/user"
=======
import { toast } from "react-toastify";
import { loginApi } from "../../../api/user";
import { useAuth } from "../../../hooks";
>>>>>>> develop
import "./LoginForm.scss";

export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: intialValues(),
    validationSchema: Yup.object(validationSchema()),
<<<<<<< HEAD
    onSubmit: async(formValue) => {
      try{
        const response = await loginApi(formValue);
        const { access } = response;
        console.log(access);
      }catch(error){
        console.log("error");
        console.log(error);
=======
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        login(access);
      } catch (error) {
        toast.error(error.message);
>>>>>>> develop
      }
    },
  });

  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder="Correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type="submit" content="Iniciar sesión" primary fluid />
    </Form>
  );
}

function intialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
