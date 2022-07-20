import React from 'react';

const ArchiveButton = ({ onArchive, id }) => {
  return (
    <>
      <button
        className='note-item__archive-button'
        onClick={() => onArchive(id)}
      >
        Archive
      </button>
    </>
  );
};

export default ArchiveButton;
