const BotaoProps = (props) => {
    console.log("props", props);
return (
    <>
    <button onClick={() => props.onClick(props.mensagemNoClique + "World")}>{props.children}</button>
    </>
)
}
export default BotaoProps;