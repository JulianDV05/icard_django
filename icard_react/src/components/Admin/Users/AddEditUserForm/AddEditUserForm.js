import React from "react";
import { form, Button, Checkbox } from "semantic-ui-react";
import { useFormik} from "formik";
import * as Yup from "yup";
import { useUser } from "../../../../hooks";
import "./AddEditUserForm.scss";

export function AddEditUserForm(props) {
    const { onClose, onRefetch, user} = props;
    const { addUser, updateUser } = useUser ();
    const formik= useFormik ({
        initialValues: initialValues(user),
        validationSchema: Yup.object( user ? updateSchame() : newSchame()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                if (user) await updateUser(user.id, formValue);
                else await addUser(formValue);
                onRefetch ();
                onClose();

            } catch (error) {
                console.error(error)
            }
        },
    });
    return(
        <Form className="add-edit-user-form" onSubmit={formik.handleSubmit}>
            <Form.Input 
            name="username" 
            placeholder="Nombre de usuario" 
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.error.username}
            />
            <Form.Input 
            name="email" 
            placeholder="Correo electronico"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.error.email}
            />
            <Form.Input 
            name="first_name" 
            placeholder="nombre"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={formik.error.first_name}
            />
            <Form.Input 
            name="last_name" 
            placeholder="apellido"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.error.last_name}
            />
            <Form.Input 
            name="password" 
            type="password" 
            placeholder="contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.error.password}
            />

            <div className="add-edit-user-form_active">
                <Checkbox 
                toggle 
                checked={formik.values.is_active} 
                onChange={(_ , data) => 
                    formik.setFieldValue('is_active', data.checked)}
                /> 
                Usuario activo

            </div>

            <div className="add-edit-user-form_staff">
                <Checkbox 
                toggle 
                checked={formik.values.is_staff} 
                onChange={(_ , data) => formik.setFieldValue('is_staff', data.checked)}
                /> Usuario administrador

            </div>

            <Button 
            type ="submit" 
            primary 
            fluid 
            content ={user ? "Actualizar" : "Crear"}
            />

        </Form>
        
    );
}

function initialValues (data) {
    console.log (data);
    console.log (typeof data?.is_active);
    return {
        username: data?.username || "",
        email: data?.email || "",
        first_name: data?.first_name || "",
        last_name: data?.last_name || "",
        password: data?.password || "",
        is_active: data?.is_active ? true : false,
        is_staff:data?.is_staff  ? true : false,
    }
}

function newSchame(){
    return{
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name:Yup.string(),
        last_name:Yup.string(),
        password:Yup.string().required(true),
        is_active:Yup.bool().required(true),
        is_staff:Yup.bool().required(true),
    }
}

function updateSchame(){
    return{
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name:Yup.string(),
        last_name:Yup.string(),
        password:Yup.string(),
        is_active:Yup.bool().required(true),
        is_staff:Yup.bool().required(true),
    }
}