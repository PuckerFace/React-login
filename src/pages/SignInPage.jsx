import ImageBackground from '../components/ImageBackground';
import SignIn from '../components/SignIn';

const SignInPage = () => {
  return (
    <section className="flex p-6 drop-shadow-2xl lg:flex-row flex-col  h-full items-center lg:items-stretch">
      <ImageBackground />
      <SignIn />
    </section>
  );
};

export default SignInPage;
