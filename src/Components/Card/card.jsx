import languages from '../../languages'
import style from './card.module.css'

export default function Card() {
    return (
        <div>
            {languages.map((language) => (
                <div className={style.card} key={language.id}>
                    <h3 className={style.title}>{language.title}</h3>
                    {language.description}
                </div>
            ))}
        </div>
    )
}