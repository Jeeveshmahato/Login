import React, { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='flex flex-row items-center justify-center w-full h-full'>
      <div className='bg-gray-200 p-10 flex flex-col gap-5'>
        <div className='flex gap-2 items-center '>
          <p>Name:</p>
          <input type="text" />
        </div>
        <div className='flex gap-4 items-center'>
          <p>Check</p>
          <input type="checkbox" />
        </div>

        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
          >
            Category
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Male
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Female
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Others
                </a>
              </div>
            </div>
          )}
        </div>

       
        <div className="flex flex-col mt-4">
          <label className="mb-2 text-lg font-bold">Hobbies</label>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="option1"
              value="Music"
              checked={selectedValue === 'Music'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label htmlFor="option1">Music</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="option2"
              value="Movie"
              checked={selectedValue === 'Movie'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label htmlFor="option2">Movie</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="option3"
              value="Videogame"
              checked={selectedValue === 'Videogame'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label htmlFor="option3">Videogame</label>
          </div>

          {/* Display selected value */}
          <div>
            <p className="font-bold">Selected Value:</p>
            <p>{selectedValue}</p>
          </div>
        </div>
        <button className='px-4 py-2 bg-gray-400 hover:bg-gray-700 w-full items-center justify-center'> 
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
