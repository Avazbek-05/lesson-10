import { Container, Typography } from "@mui/material";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom mt={3}>
          MUI Todo List
        </Typography>
        <TodoForm />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}

export default App;
