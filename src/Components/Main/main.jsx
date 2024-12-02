import style from './main.module.css'
import Button from '../Button/button'
import languages from '../../languages'
import Card from '../Card/card'
import { useState } from 'react'



export default function Main() {

    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0)

    function setLanguage(i) {
        if (i === currentLanguageIndex) {
            setCurrentLanguageIndex(-1)
            return
        }
        setCurrentLanguageIndex(i)
    }

    return (

        <>
            <main>
                <div className={style.container}>
                    <ul className={style.buttons}>
                        {languages.map((language, i) => (
                            <li key={language.id}>
                                <Button className={i === currentLanguageIndex ? style.active : ''} item={language} callback={() => setLanguage(i)} />
                            </li>
                        ))}
                    </ul>
                    {currentLanguageIndex !== -1 ? <Card item={languages[currentLanguageIndex]} /> : <div className={style.card}>Nessun linguaggio selezionato</div>}
                </div>
            </main>
        </>

    )
}