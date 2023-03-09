import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Auth.scss";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../Redux/Slice/UserSlice";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
  cPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  // const cretePost = useSelector((state) => state?.users?.createPost);
  // const error = useSelector((state) => state?.users?.error);
  const isLoading = useSelector((state) => state?.users?.loading);

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
            cPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            dispatch(signUp(values));
          }}
        >
          {({ errors, touched }) => (
            <div>
              <Form>
                <div className="mb-3">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="error-color">{errors.firstName}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Id"
                    className="form-control"
                  />
                  {errors.email && touched.email ? (
                    <div className="error-color">{errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                  {errors.password && touched.password ? (
                    <div className="error-color">{errors.password}</div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <Field
                    name="cPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                  />
                  {errors.cPassword && touched.cPassword ? (
                    <div className="error-color">{errors.cPassword}</div>
                  ) : null}
                </div>
                <Button
                  type="submit"
                  variant="warning"
                  className="btn-Posining"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Submit"}
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
