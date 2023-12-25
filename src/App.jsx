import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedHobby, setSelectedHobby] = useState('');
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState('');

  const handleDropdownChange = (value) => {
    setSelectedValue(value);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Use the selectedValue from the dropdown
    setMessage(`Name:${firstName}    Gender:${selectedValue} Hobbies:${selectedHobby}`);

    // Reset form fields
    setFirstName('Nil');
    setSelectedValue('Male');
    setSelectedHobby('Football');
  };

  return (
    <div className='flex flex-row items-center justify-center w-full h-full'>
      <div className='bg-gray-200 p-10 flex flex-col gap-5'>
        <form onSubmit={handleSubmit}>
          <div className='flex gap-2 items-center'>
            <p>Name:</p>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="Name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className='flex gap-4 items-center'>
            <p>Check</p>
            <input type="checkbox" />
          </div>
          <div className="flex flex-col mt-4">
            <label className="mb-2 text-lg font-bold">Hobbies</label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="option1"
                value="Music"
                checked={selectedHobby === 'Music'}
                onChange={(event) => setSelectedHobby(event.target.value)}
                className="mr-2"
              />
              <label htmlFor="option1">Music</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="option2"
                value="Movie"
                checked={selectedHobby === 'Movie'}
                onChange={(event) => setSelectedHobby(event.target.value)}
                className="mr-2"
              />
              <label htmlFor="option2">Movie</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="option3"
                value="Videogame"
                checked={selectedHobby === 'Videogame'}
                onChange={(event) => setSelectedHobby(event.target.value)}
                className="mr-2"
              />
              <label htmlFor="option3">Videogame</label>
            </div>
          </div>
          <div className="relative inline-block my-4 text-left">
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
                  <button
                    type="button"
                    onClick={() => handleDropdownChange('Male')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDropdownChange('Female')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Female
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDropdownChange('Others')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Others
                  </button>
                </div>
              </div>
            )}
          </div>
          <button
            type="submit"
            className='px-4 py-2 bg-gray-400 hover:bg-gray-700 w-full items-center justify-center'
          >
            Submit
          </button>
          <br />
          <br />
          <h2>{message}</h2>
        </form>
      </div>
    </div>
  );
};

export default App;
