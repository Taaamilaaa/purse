export const GoBackHeader = ({ title, handelGoBack }) => {
    const cbOnClick = () => handelGoBack();
    return (
        <header>
            <button onClick = {cbOnClick} type="button">Go back</button>
            <h2>{title}</h2>         
        </header>
    )
}