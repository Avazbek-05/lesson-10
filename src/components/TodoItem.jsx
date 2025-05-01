import { useState } from 'react';
import { IconButton, Checkbox, TextField, Box } from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';
import { useTodo } from '../context/TodoContext';

export default function TodoItem({ todo }) {
  const { dispatch } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch({ type: 'UPDATE', payload: { id: todo.id, text: newText } });
    setIsEditing(false);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
      <Checkbox
        checked={!todo.isActive}
        onChange={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
      />
      {isEditing ? (
        <TextField value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span style={{ textDecoration: !todo.isActive ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      <Box>
        {isEditing ? (
          <IconButton onClick={handleUpdate}><Save /></IconButton>
        ) : (
          <IconButton onClick={() => setIsEditing(true)}><Edit /></IconButton>
        )}
        <IconButton onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
}
