import { Box, Typography, LinearProgress } from '@mui/material';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { state } = useTodo();
  const { todos } = state;

  const total = todos.length;
  const completed = todos.filter(t => !t.isActive).length;
  const percent = total ? (completed / total) * 100 : 0;

  return (
    <Box mt={4}>
      <Typography variant="h6">Progress: {Math.round(percent)}%</Typography>
      <LinearProgress variant="determinate" value={percent} />
      <Box mt={2}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Box>
    </Box>
  );
}
