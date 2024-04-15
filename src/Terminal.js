import React from 'react';
import UserInput from './UserInput';

const Terminal = () => {
  return (
    <div className="m-9 w-full md:w-[80%] lg:w-[60%] h-[500px] md:h-[600px] lg:h-[700px] bg-gray-900 rounded-lg p-4 overflow-hidden shadow-2xl shadow-black" id='terminal'>
      <div className="h-full text-yellow-400 overflow-y-auto">
        <div className="flex items-center mb-4">
          <div className="bg-red-500 rounded-full w-3 h-3 mr-2"></div>
          <div className="bg-yellow-500 rounded-full w-3 h-3 mr-2"></div>
          <div className="bg-green-500 rounded-full w-3 h-3"></div>
        </div>
        <hr />
        <br />
        ~&gt; TYPE `help` to see all commands <br/>
        <UserInput />
      </div>
    </div>
  );
};

export default Terminal;
