function Footer() {
  return (
    <div className="space-y-12 md:mx-32 sm:mx-10 mx-8 mb-5">
      <p className="text-center text-slate-500 ">
        Trusted by 3+ millions people at companies like
      </p>
      <div className="flex flex-row flex-wrap sm:mx-32 mx-10 items-center justify-center gap-10 sm:w-auto h-auto w-[50%] pr-[3rem]">
        <div className="flex flex-row sm:gap-10 gap-3">
          <img src="src\assets\Netflix Logo.svg" alt="" />
          <img src="src\assets\Shopify Logo.svg" alt="" />
        </div>
        <div className="flex flex-row sm:gap-10 gap-3">
          <img src="src\assets\Spotify Logo.svg" alt="" />
          <img src="src\assets\Walmart Logo.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
