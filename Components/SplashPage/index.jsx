import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const SplashPage = () => (
  <Card>
    <Card.Title title="Forum" subtitle="Questions/Answers" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Forum</Text>
      <Text variant="bodyMedium">Questions/Answers</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Log In</Button>
      <Button>Sign Up</Button>
			<Button>Continue As Guest</Button>
    </Card.Actions>
  </Card>
);

export default SplashPage;