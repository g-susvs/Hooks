import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime() * 5,
            description,
            done: false
        }
        
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>

            <input
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                onChange={onInputChange}
                value={description}
            />
            <button
                className="btn btn-primary mt-2"
                type="submit"
            >Crear</button>

        </form>
    )
}
