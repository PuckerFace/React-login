import ImageBackground from '../components/ImageBackground';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
    <section className="flex p-6 drop-shadow-2xl lg:flex-row flex-col  h-full items-center lg:items-stretch">
      <SignUp />
      <ImageBackground />
    </section>
  );
};

export default SignUpPage;
