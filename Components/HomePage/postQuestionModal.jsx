import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const card = (
	<React.Fragment>
		<CardContent>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<div>
					<TextField
						id="standard-textarea"
						label="What is your question?"
						placeholder="What is the meaning of life?"
						multiline
						maxRows={4}
						variant="standard"
					/>
				</div>
			</Box>
		</CardContent>
		<CardActions>
			<Button>Post</Button>
		</CardActions>
	</React.Fragment>
);

export default function PostQuestion() {
	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant="outlined">{card}</Card>
		</Box>
	);
}