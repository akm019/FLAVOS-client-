import React from 'react';

const Menu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="relative z-30">
      <input
        id="toggleChecker"
        type="checkbox"
        className="hidden"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label
        id="togglerLabel"
        htmlFor="toggleChecker"
        className="cursor-pointer"
      >
        <div className="flex flex-col gap-[0.7em] w-[2.5em] checkboxtoggler">
          <div
            className={`bg-[#df4747] h-[0.2em] rounded-[10em] transition-transform duration-300 line-1 ${
              isMenuOpen ? 'transform rotate-45 translate-y-[1.0em] translate-x-[0.2em]' : ''
            }`}
          ></div>
          <div
            className={`bg-[#df4747] h-[0.2em] rounded-[10em] transition-transform duration-500 line-2 ${
              isMenuOpen ? 'transform rotate-[-45deg] translate-y-0 translate-x-[0.1em]' : ''
            }`}
          ></div>
          <div
            className={`bg-[#df4747] h-[0.2em] rounded-[10em] transition-transform duration-500 line-3 ${
              isMenuOpen ? 'transform scale-x-0 origin-left' : ''
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default Menu;
