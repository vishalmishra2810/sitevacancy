import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./SignupForm.module.scss";
import signup from "../../../assets/signup.svg";
import Image from "next/image";
import Link from "next/link";

const SignupForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    google: "",
    github: "",
    linkedin: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    google: Yup.string(),
    github: Yup.string(),
    linkedin: Yup.string(),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.left_container}>
          <Image src={signup} alt="signup" width={400} height={500} />
        </div>
        <div className={styles.right_container}>
          <h1 className={styles.title}>Sign up</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <>
                <Form>
                  <div className={styles.field}>
                    <label htmlFor="name">Name</label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      className={styles.input}
                    />
                    {errors.name && touched.name && (
                      <div className={styles.error}>{errors.name}</div>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className={styles.input}
                    />
                    {errors.email && touched.email && (
                      <div className={styles.error}>{errors.email}</div>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="password">Password</label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className={styles.input}
                    />
                    {errors.password && touched.password && (
                      <div className={styles.error}>{errors.password}</div>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className={styles.input}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className={styles.error}>
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                  <button type="submit" className={styles.button}>
                    Sign up
                  </button>
                </Form>
                <p className={styles.text}>
                  Already have an account?{" "}
                  <Link href="/login" className={styles.link}>
                    Login
                  </Link>
                </p>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
