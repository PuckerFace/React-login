import ImageBackground from '../components/ImageBackground';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
    <section className="flex  drop-shadow-2xl lg:flex-row flex-col  items-center lg:items-stretch  size-full ">
      <SignUp />
      <ImageBackground />
    </section>
  );
};

export default SignUpPage;
