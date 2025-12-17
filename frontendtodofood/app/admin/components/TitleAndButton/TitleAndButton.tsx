import style from './TitleAndButton.module.css'

interface Props {
    title: string,
    titleOfButton: string
}

function TitleAndButton({title, titleOfButton} : Props) {
    return (
        <div className={style.containerPrincipal}>
            <p className={style.title}>{title}</p>
            <button className={style.button}>{titleOfButton}</button>
        </div>
    )
}

export default TitleAndButton