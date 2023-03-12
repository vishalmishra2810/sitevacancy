import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.scss";
import signup from "../../../assets/signup.svg";
import Image from "next/image";
import google from "../../../assets/google.svg";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import Link from "next/link";

const Login = () => {
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
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
          <h1 className={styles.title}> Sign In</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <>
                <Form>
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
                  <button type="submit" className={styles.button}>
                    Sign up
                  </button>
                </Form>
                <div className={styles.or}>
                  <hr />
                  <span>or</span>
                  <hr />
                </div>

                <div className={styles.social_container}>
                  <div className={`${styles.google}`}>
                    <Image src={google} alt="google" width={20} height={20} />
                    Sign up with Google
                  </div>
                  <div className={` ${styles.linkedin}`}>
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      width={20}
                      height={20}
                    />
                    Sign up with LinkedIn
                  </div>
                  <div className={` ${styles.github}`}>
                    <Image src={github} alt="github" width={20} height={20} />
                    Sign up with GitHub
                  </div>
                </div>
                <p className={styles.text}>
                  If you don{"'"}t have an account, you can{" "}
                  <Link href="/signup" className={styles.link}>
                    Sign up
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

export default Login;
