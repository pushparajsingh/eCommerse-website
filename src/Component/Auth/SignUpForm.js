import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Auth.scss";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../Redux/Slice/ECommerseSlice";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-25 m-auto">
      <div className="row mb-2">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Sign Up Form</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12"></div>

        <Formik
          initialValues={{
            firstName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            dispatch(addPost(values));
            // console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <div>
              <Form>
                <div class="mb-3">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </div>
                <div class="mb-3">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Id"
                    className="form-control"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <div class="mb-3">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <Field
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                  {errors.passwordConfirmation &&
                  touched.passwordConfirmation ? (
                    <div>{errors.passwordConfirmation}</div>
                  ) : null}
                </div>
                <Button
                  type="submit"
                  variant="warning"
                  className="btn-Posining"
                >
                  Submit
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default SignUpForm;
