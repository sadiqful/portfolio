import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Sadiq Mustapha.
        </h1>
        <p className={styles.desc}>
        Abubakar Sadiq Mustapha is a poet, storyteller, documentary photographer and community developer. 
        Experienced in using books, photography, and arts in driving social change from girl-child education, gender-based violence to youth participation in politics.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
