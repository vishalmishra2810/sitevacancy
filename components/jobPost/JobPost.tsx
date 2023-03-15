import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./JobPost.module.scss";

const JobPostForm = () => {
  const initialValues = {
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    location: "",
    salary: "",
  };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Required"),
    jobTitle: Yup.string().required("Required"),
    jobDescription: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    salary: Yup.string().required("Required"),
  });

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={styles.job_post}>
      <div className={styles.container}>
        <h1>Post a Job</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.field}>
                <label htmlFor="companyName">Company Name</label>
                <Field type="text" name="companyName" />
                <ErrorMessage name="companyName" component="div" />
              </div>
              <div className={styles.field}>
                <label htmlFor="jobTitle">Job Title</label>
                <Field type="text" name="jobTitle" />
                <ErrorMessage name="jobTitle" component="div" />
              </div>
              <div className={styles.field}>
                <label htmlFor="jobDescription">Job Description</label>
                <Field as="textarea" name="jobDescription" />
                <ErrorMessage name="jobDescription" component="div" />
              </div>
              <div className={styles.field}>
                <label htmlFor="location">Location</label>
                <Field type="text" name="location" />
                <ErrorMessage name="location" component="div" />
              </div>
              <div className={styles.field}>
                <label htmlFor="salary">Salary</label>
                <Field type="text" name="salary" />
                <ErrorMessage name="salary" component="div" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submit_button}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default JobPostForm;
