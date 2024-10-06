import { Button } from '../ui/button';

const GoogleAuthButton = ({ handleAuthWithGoogle }) => {
  return (
    <Button variant='ghost' className='flex items-center gap-3' onClick={handleAuthWithGoogle}>
      <img src='/icons/google.svg' alt='Google' />
      Continue with Google
    </Button>
  );
};
export default GoogleAuthButton;
