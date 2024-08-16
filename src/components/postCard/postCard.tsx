import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = (prop) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {prop.post.img && (
          <div className={styles.imgContainer}>
            <Image src={prop.post.img} alt="" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>
          {prop.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{prop.post.title}</h1>
        <p className={styles.desc}>{prop.post.body}</p>
        <Link className={styles.link} href={`/blog/${prop.post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
