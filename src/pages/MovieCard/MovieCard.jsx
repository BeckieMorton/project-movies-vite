import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  const voteAverage = movie.vote_average;
  const overView = movie.overview;
  const title = movie.title;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.vote}> </p>
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt="Movie poster"
        />
        <div className={styles.textContainer}>
          <div className={styles.titleAndVote}>
            <p className={styles.title}>{title}&nbsp;&nbsp;</p>
            <span className={styles.voteSpan}>
              ⭐ {voteAverage.toFixed(1)}&nbsp;
            </span>
          </div>
          {/*added a new div and class for title and vote cuz i struggeled getting it on the same line. *Elba */}
          <p className={styles.overView}>{overView}</p>
        </div>
      </div>
    </div>
  );
};
