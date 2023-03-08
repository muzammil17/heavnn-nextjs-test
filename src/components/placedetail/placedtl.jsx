import styles from "@/styles/Place.module.css";
import Image from "next/image";

export default function PlaceDetail({ thumb, title }) {
  return (
    <>
      <div className={styles.placedetail}>
        <span className={styles.thumb}>
          <Image src={thumb} alt={title} fill sizes="100%,100%" />
        </span>
        <h2>
          Veterinary services
          <span>(for dogs and cats)</span>
        </h2>
      </div>
    </>
  );
}
