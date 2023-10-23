import styles from "./story.module.scss";
import storiesData from "./story.json";

export default function StoryHub() {
  return (
    <div className={styles.story}>
      <div className={styles.container}>
        {storiesData.map((story: any, index:number) => (
          <div className={styles.storyCard} key={index}>
            <h2>{story.title}</h2>
            <p className={styles.author}>By {story.author}</p>
            <p>{story.content}</p>
            <p className={styles.date}>Published on {story.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
