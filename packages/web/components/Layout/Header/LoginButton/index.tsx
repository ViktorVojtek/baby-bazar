import { Icon } from 'shared/components/Icon';
import { Button } from './LoginButton.styled';

export default function LoginButton() {
  const handleLogin: () => void = () => {
    // eslint-disable-next-line no-console
    console.log('Login');
  };

  return (
    <Button onClick={handleLogin}>
      <Icon src="/user-avatar.svg" />
      Login
    </Button>
  );
}
