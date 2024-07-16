import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          Discover the path to your dream career with our innovative job tracking app! 
          Designed to streamline your job search process, our app helps you search for
           opportunities that align with your skills and aspirations. With advanced tracking features,
            you can manage applications, set reminders for follow-ups, and receive real-time updates on
             job postings. Say goodbye to the chaos of manual job hunting and embrace a more organized,
              efficient way to find your perfect job. Let our app be your trusted companion on the journey 
              to professional success!
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
