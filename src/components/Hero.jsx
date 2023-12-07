import Button from "./Button";
function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-5 sm:min-h-[50vh] md:min-h-[60vh] items-center justify-between md:mx-32 mx-8 sm:my-20 my-10">
      <div className="space-y-5">
        <p className="sm:text-5xl text-4xl">
          <span className="font-bold">Onedeck is your remote </span>
          <span className="font-bold text-yellow-400">
            conference calling tool
          </span>
        </p>
        <p className="font-normal text-slate-500">
          Onedeck is a service that allows you to create beautiful, online, and
          encrypted video calls for you and your remote team.
        </p>
        <Button>Try for free</Button>
        <div className="flex flex-row gap-4">
          <p className="text-slate-500">5.0 Rating based on reviews from: </p>
          <span>
            <img src="src\assets\Capterra Logo.svg" alt="" />
          </span>
          <span>
            <img src="src\assets\AlternativeTo Logo.svg" alt="" />
          </span>
        </div>
      </div>
      <div className="w-auto hidden sm:flex justify-end items-end">
        <img
          src="src\assets\Hero Image.png"
          alt="image"
          className="resize-none w-[80%] h-[80%] md:w-[65%] md:h-[65%]"
        />
      </div>
    </div>
  );
}

export default Hero;
