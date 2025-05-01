import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useTodo } from '../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { dispatch } = useTodo();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({
        type: 'ADD',
        payload: { id: Date.now(), text, isActive: true },
      });
      setText('');
    }
  };

  return (
    <Box display="flex" gap={2} mt={2}>
      <TextField
        label="Todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAdd}>Add</Button>
    </Box>
  );
}
