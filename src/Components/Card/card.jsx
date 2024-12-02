import languages from '../../languages'
import style from './card.module.css'

export default function Card({ item }) {

    const { id, title, description } = item

    // let description = "Nessun Linguaggio selezionato"

    return (
        <>
            <div>
                <div className={style.card}>
                    <h3 className={style.title}>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>

    )
}