const LargetButton = ({ topText, bottomText, icon, targetId }) => {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="bg-accent-3 text-text-1 h-[120px]
        font-normal text-link flex-1 flex-col items-center justify-center gap-2
        px-2.5 py-5 hover:bg-accent-1 hover:text-1 cursor-pointer rounded-sm
      "
    >
      <div className="size-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center gap-3.5 px-2.5 py-5">
          <img src={icon} alt="icon" className="w-[30px] h-[30px]" />
        </div>

        <div>
          <p className="leading-[115%] text-center block">
            {topText} <br aria-hidden="true" /> {bottomText}
          </p>
        </div>
      </div>
    </button>
  );
};

const SmallButton = () => {
  return (
    <button className="bg-accent-1 hover:bg-accent-3 text-text-1 rounded-[2.5px] px-3.5 py-3 font-sans font-normal text-[10px] leading-[105.8%] tracing-[-2%] cursor-pointer">
      Get started
    </button>
  );
};

const Link = ({ text }) => {
  return (
    <a href="#" target="_blank" rel="noopener noreferrer">
      <p className="font-medium text-link leading-[115%] text-accent-1 hover:underline">
        {text}
      </p>
    </a>
  );
};

export { LargetButton, SmallButton, Link };
