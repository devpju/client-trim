import { Link } from 'react-router-dom';

const NavigationAuthPage = ({ message, linkTo, linkText }) => {
  return (
    <span className='flex flex-wrap justify-center gap-2 text-[14px] text-[#46474C]'>
      {message}
      <Link className='font-medium text-[#08C7E0]' to={linkTo}>
        {linkText}
      </Link>
    </span>
  );
};
export default NavigationAuthPage;
