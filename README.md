# Hooks

**useState:** Se utiliza para actualizar el estado de la aplicación.

**useEffect:** Permite realizar efectos secundarios en los componentes.

**useRef:** Permite mantener un valor y cambiarlo sin que dispare un rederización al realizar un cambio.

**useLayoutEffect:** Similar al useEffect pero este hook se ejecuta antes de que la pantalla se actualize visualmente a diferencia del useEffect que se ejecutas despues.

**useMemo:** Memoriza un valor, recomendado cuando se tiene tareas pesadas, que se pueden memorizar y no ser llamadas otra vez.

**useCallback:** Memoriza funciones.

**useReducer:** Es un alternativa al **useState**, a menudo es usado cuando se tiene una lógica compleja que involucra múltiples subvalores o cuando el próximo estado depende del anterior.