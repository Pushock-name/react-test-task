import s from './Description.module.scss';


const Description = ({text, ...props}) => {

    return (
        <span className={s.Description}>
            {text}
        </span>
    )
}

export default Description;