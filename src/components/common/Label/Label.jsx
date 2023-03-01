import s from './Label.module.scss';


const Label = ({text, ...props}) => {

    return (
        <div className={s.Label}>
            <label for={props.for}>{text}</label>
        </div>
    )
}

export default Label;