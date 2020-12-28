import { MovieData } from '../../types'
import styles from './SearchResult.module.css'
import Button from 'react-bootstrap/Button'
export type SearchResultProps = {
    movieData: MovieData,
    onNominate: () => void,
    nominated?: boolean
}

export default function SearchResult({ movieData, onNominate, nominated }: SearchResultProps) {
    return (
        <div className={styles.card}>
            {
                movieData.Poster === "N/A" ?
                <div className={styles.svg}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    fill="currentColor"
                    className={`bi bi-file-image`}
                    viewBox="0 0 16 16">
                    <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
                </svg>
                </div>
                :
                <img
                    className={styles.img}
                    src={movieData.Poster}
                    alt={movieData.Title} />
            }
            {/* <img
                className={styles.img}
                src={movieData.Poster}
                alt={`${movieData.Title}`} /> */}
            <div className={styles.text}>
                <h4 className={styles.movieTitle}>{movieData.Title}</h4>
                <p className={styles.movieYear}>{movieData.Year}</p>
                <Button variant={"outline-dark"} className={styles.btn} onClick={onNominate} disabled={!!nominated}>Nominate</Button>
            </div>
        </div>
    )
}