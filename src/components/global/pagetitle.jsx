import styles from "@/styles/Pagetitle.module.css";
import Image from "next/image";

export default function PageTitle({
  title,
  isImage = false,
  thumb = "",
  classname = "",
}) {
  return (
    <section className={`${styles.pagetitle} ${classname}`}>
      <h2 className="animate__animated animate__fadeInUp">
        {isImage ? (
          <>
            <span className={styles.thumb}>
              <Image src={thumb} alt={title} fill sizes="100%,100%" />
            </span>
            <span className={styles.content}>{title}</span>
          </>
        ) : (
          title
        )}
      </h2>
    </section>
  );
}
