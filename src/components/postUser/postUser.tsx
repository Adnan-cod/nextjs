import styles from "./postUser.module.css";
import Image from "next/image";
import { getUser } from "@/lib/data";
// FETCH DATA WITH AN API

const PostUser = async ({ userId }) => {
  // FETCH DATA WITH AN API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.image ? user.image : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
