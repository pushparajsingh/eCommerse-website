import React, { useState } from "react";
import { Form, FormControl, FormLabel, Col, Button } from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from "formik";

const SignupSchema = Yup.object().shape({
  // firstName: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
  // lastName: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Atleast 6 characters long")
    .max(50, "Too Long")
    .required(),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const SignUpForm = () => {
  // const [valid, setValid] = useState(false);
  // const [formValues, setFormValues] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   terms: false
  // });
  const jobs = [
    "cleaner",
    "accountant",
    "plumber",
    "roof cleaner",
    "office cleaner",
  ];

  const validateJob = (value, props) => {
    console.log("validateJobs value", value);
    console.log("validateJobs props", props);
  };

  const handleSubmit = (values, event) => {
    // event.preventDefault();
    // event.stopPropagation();
    console.log(jobs);
    const job = jobs.filter((job) => job === values.job);
    console.log("job", job);
    if (job.length <= 0) {
      event.setFieldError("job", "Please select from the list");
    } else {
      console.log(values);
      console.log("form submit values", event);
    }

    // const form = event.currentTarget;
    // console.log(event.value);
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // console.log("form", form);

    // setValid(true);
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setFormValues({
  //     ...formValues,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <Formik
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      // validatenOnBlur={false}
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        job: "",
        terms: false,
      }}
      // handleChange={handleChange}
      // isValid={validated}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        isValidating,
      }) => (
        <Form
          // className="needs-validate"
          noValidate
          onSubmit={(event) => handleSubmit(event)}
        >
          <Form.Row>
            <Form.Group as={Col} sm="12" controlId="validationFormik01">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@example.com"
                name="email"
                value={values.email}
                // defaultValue="Mark"
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              {touched.email && errors.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              )}
              <Form.Control.Feedback type="valid">
                Valid email
              </Form.Control.Feedback>
            </Form.Group>
            {/* </Form.Row>
          <Form.Row> */}
            <Form.Group as={Col} sm="12" controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* </Form.Row>
          <Form.Row> */}
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                isValid={!errors.confirmPassword && touched.confirmPassword}
                isInvalid={touched.confirmPassword && errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/* </Form.Row>
          <Form.Row> */}
            <Form.Group as={Col} md="6" controlId="validationFormik06">
              <Form.Label>Job</Form.Label>
              <Form.Control
                type="text"
                placeholder="for eg. Cleaner, Plumber etc..."
                name="job"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.job}
                isValid={!errors.job && touched.job}
                isInvalid={touched.job && errors.job}
                validate={validateJob}
              />
              <Form.Control.Feedback type="invalid">
                {errors.job}
              </Form.Control.Feedback>

              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              name="terms"
              label="Terms and Condition"
              feedback="Agree to Terms and Condition"
              value={values.terms}
              onChange={handleChange}
              isValid={!errors.terms && touched.terms}
              isInvalid={touched.terms && !!errors.terms}
              id="validationFormik0"
            />
            <Form.Control.Feedback type="valid">
              Terms Accepted
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Accept Terms
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
