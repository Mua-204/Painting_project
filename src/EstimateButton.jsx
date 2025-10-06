import React from 'react'

const EstimateButton = ({ children }) => {
  return (
    <button className="mr-6 border-4  h-[56px] w-54 rounded-4xl hover:bg-[#440472] hover:text-white text-[18px] font-bold hover:border-none">
      {children}
    </button>
  );
}

export default EstimateButton
