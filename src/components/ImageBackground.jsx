import image2 from '../assets/image2.jpg';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import star from '../assets/star.png';

const ImageBackground = () => {
  return (
    <div
      className=" min-h-screen bg-cover bg-no-repeat flex justify-end flex-col p-6    w-screen "
      style={{ backgroundImage: `url(${image2})` }}
    >
      <h2 className="text-white text-3xl lg:text-5xl font-bold w-4/5 mb-6 ">
        Start turning your ideas into reality.
      </h2>
      <p className="text-neutral-200  mb-6 w-4/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        tempora voluptatum? Natus veritatis animi aut? Eius sed eum corrupti
        officiis!
      </p>
      <div className="flex lg:items-center items-start lg:gap-4 lg:flex-row gap-2 flex-col">
        <div className="flex my-5">
          <img
            src={person1}
            alt=""
            className="size-12 rounded-full object-cover"
          />
          <img
            src={person2}
            alt=""
            className="size-12 rounded-full object-cover"
          />
          <img
            src={person3}
            alt=""
            className="size-12 rounded-full object-cover"
          />
        </div>
        <div className="text-white">
          <div className="flex gap-2">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>5.0</p>
          </div>
          <p>from 200+ reviews</p>
        </div>
      </div>
    </div>
  );
};

export default ImageBackground;
