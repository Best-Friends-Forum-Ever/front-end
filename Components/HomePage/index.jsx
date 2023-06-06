import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function QuestionStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={1}>
        <Item>Question 1</Item>
        <Item>Question 2</Item>
        <Item>Question 3</Item>
      </Stack>
			<Button variant="contained" color="">Post a Question</Button>
    </Box>
  );
}