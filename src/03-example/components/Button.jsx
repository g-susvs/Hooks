
export const Button = ({ func, disabled, content }) => {
    return (
        <button
            onClick={() => func()}
            className="btn btn-primary ms-2"
            disabled={disabled}> {content} </button>
    )
}
