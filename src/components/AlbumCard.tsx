import { AlbumCardSetupEntry } from "../types";
import styles from "./AlbumCard.module.css";

function AlbumCard({ props }: { props: AlbumCardSetupEntry[]}): any {
  return (
    <div className={`${styles.outerDiv}`}>
      {props.map((entry: any) => {
        return (
          <div className={`${styles.cardDiv}`}>
            <img className={`${styles.cover}`} src={entry?.cover} alt={entry?.alt} />
            <p className={`${styles.title}`}>{entry?.title}</p>
            <p className={`${styles.year}`}>Year: {entry.year}</p>
            <p className={`${styles.tracks}`}>Tracks: {entry.tracks}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AlbumCard;
