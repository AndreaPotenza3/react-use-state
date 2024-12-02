import style from './button.module.css'

export default function Button({ item, callback = () => { }, className = '' }) {

    const { id, title, description } = item

    return (
        <li>
            <button onClick={callback} className={`${style.btn} ${className}`}>{title}</button>
        </li>
    )
}



