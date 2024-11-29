import languages from '../../languages'
import style from './button.module.css'

export default function Button() {
    return (
        <ul className={style.buttons}>
            {languages.map((language) => (
                <li key={language.id}>
                    <button className={style.btn}>{language.title}</button>
                </li>
            ))}
        </ul>
    )
}