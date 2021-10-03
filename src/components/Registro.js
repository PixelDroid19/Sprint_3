import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { registerEmailPasswordAndName } from "../actions/actionRegister";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Registro = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      pass1: "",
      pass2: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required(),
      email: Yup.string().email().required(),
      pass1: Yup.string().required(),
      pass2: Yup.string().required(),
    }),
    onSubmit: (formData) => {
      console.log(formData);
      dispatch(
        registerEmailPasswordAndName(
          formData.email,
          formData.pass1,
          formData.nombre
        )
      );
    },
  });

  /* const [formValues, handleInputChange] = useForm({
    nombre: "",
    email: "",
    pass1: "",
    pass2: "",
  });



  const { nombre, email, pass1, pass2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerEmailPasswordAndName(email, pass1, nombre))
  };*/

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          name="nombre"
          onChange={formik.handleChange}
          error={console.log(formik.errors.nombre)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="pass1"
          onChange={formik.handleChange}
        />

        <label>try password</label>
        <input
          type="password"
          placeholder="try password"
          name="pass2"
          onChange={formik.handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
