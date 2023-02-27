import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../../Redux/Slice/UserSlice";

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

export default function SignInForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.users?.loading);
  console.log(444, isLoading);
  return (
    <div className="w-25 m-auto">
      <div className="row mb-2">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">User Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            validationSchema={Schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              dispatch(SignIn(values));
            }}
          >
            {({
              touched,
              errors,
              handleChange,
              values,
              handleBlur,
              handleSubmit,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>

                <Button
                  type="submit"
                  variant="warning"
                  className="btn-position-change"
                  disabled={isLoading}
                >
                  {isLoading ? "Please wait..." : "Submit"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
