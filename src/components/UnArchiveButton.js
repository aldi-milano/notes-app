import React from 'react';

const UnArchiveButton = ({ unArchive, id }) => {
  return (
    <>
      <button
        className='note-item__archive-button'
        onClick={() => unArchive(id)}
      >
        Pindahkan
      </button>
    </>
  );
};

export default UnArchiveButton;
