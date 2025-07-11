import React from 'react';

type AlertProps = {
  message: string;
  type?: string;
  showAlert:boolean;
  setShowAlert:React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Alert({ message, type = 'success',showAlert,setShowAlert }: AlertProps) {
    
  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-md text-sm font-medium text-white z-50 ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      }`}
    >
      {message}
      <button
        className="ml-4 text-white font-bold"
        onClick={() => setShowAlert(!showAlert)}
      >
        ✕
      </button>
    </div>
  );
}