import { LoaderCircle } from 'lucide-react';
import { Button } from '../ui/button';

const SubmitButton = ({ isLoading, type }) => {
  return (
    <Button className='bg-[#5F48EA] hover:bg-[#5F48EA] hover:opacity-90'>
      {isLoading && <LoaderCircle className='mr-2 animate-spin' />}
      {type}
    </Button>
  );
};
export default SubmitButton;
