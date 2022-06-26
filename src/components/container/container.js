import './container.css'
import Content from '../content/content'
import Button from '../button/button'


const Container = (props) => {
    return (
        <section className={'container'}>

            <Button label={'baixar CV'} />
            <Content>
                <p style={{ color: props.fontColor }}>{props.text.toUpperCase()}</p>
            </Content>
        </section>
    )

}

Container.defaultProps = {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi",
    fontColor: "gray"
}

export default Container