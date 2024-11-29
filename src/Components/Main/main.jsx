import style from './main.module.css'
import Button from '../Button/button'
import Card from '../Card/card'


export default function Main() {
    return (
        <main>
            <div className={style.container}>
                <Button />
                <Card />
            </div>
        </main>
    )
}