import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SplashPage() {
	return (
		<React.Fragment>
			<Card>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="" gutterBottom>
						App Text
					</Typography>
				</CardContent>
				<CardActions>
					<Stack spacing={2} direction="row">
						<Button variant="contained" color="">Login</Button>
						<Button variant="outlined" color="">Sign Up</Button>
					</Stack>
					<Stack align="center">
						<Button color="">Continue as a Guest</Button>
					</Stack>
					<Stack spacing={6} direction="row">
						<IconButton aria-label="dark">
							<MoonIcon />
						</IconButton>
						<IconButton aria-label="light">
							<SunIcon />
						</IconButton>
					</Stack>
				</CardActions>
			</Card>
		</React.Fragment>
	)
};

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }
