const LargetButton = ({ topText, bottomText, icon }) => {
  return (
    <button
      className="bg-accent-3 text-text-1 w-[133.33px] h-[120px] 
    font-normal text-link flex flex-col items-center justify-center gap-2 px-2.5 py-5 hover:bg-accent-1 hover:text-1 cursor-pointer rounded-sm"
    >
      <img src={icon} alt="icon" />
      <div>
        <span className="leading-[115%] text-center block">{topText}</span>
        <span className="leading-[115%] text-center block">{bottomText}</span>
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
