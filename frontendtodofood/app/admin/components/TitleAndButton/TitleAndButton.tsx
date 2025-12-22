import style from './TitleAndButton.module.css'

interface Props {
    title: string,
    titleOfButton: string,
    onCreate : () => void
}

function TitleAndButton({title, titleOfButton, onCreate} : Props) {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>{title}</p>
            <button onClick={onCreate} className={style.button}>{titleOfButton}</button>
        </div>
    )
}

export default TitleAndButton