import styles from "./story.module.scss";

export default function StoryHub() {
  return (
    <div className={styles.story}>
      <div className={styles.container}>
        <h1>Frequently Asked Questions</h1>
        <div className={styles.question}>
          <h2>What kind of jobs do you offer?</h2>
          <p>
            We offer a variety of jobs in different fields, including tech,
            finance, marketing, and more.
          </p>
        </div>
        <div className={styles.question}>
          <h2>How do I apply for a job?</h2>
          <p>
            You can apply for a job by submitting your resume and cover letter
            on our website.
          </p>
        </div>
        <div className={styles.question}>
          <h2>What happens after I submit my application?</h2>
          <p>
            We will review your application and contact you if we think you
            would be a good fit for the position.
          </p>
        </div>
        <div className={styles.question}>
          <h2>Do you offer remote work?</h2>
          <p>
            Yes, we offer both remote and in-person work options for some of our
            positions.
          </p>
        </div>
      </div>
    </div>
  );
}
