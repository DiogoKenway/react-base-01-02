import './button.css'

const showLabel = label => alert(`A Label desse Botão é ${label}`)

const Button = ({ label }) =>
(
    <button onClick={() => showLabel(label)} className='btn'>{label}</button>
)


export default Button