import React from 'react';

const NoteSearchBar = ({ query }) => {
  return (
    <div className='note-search'>
      <input type='text' placeholder='Cari catatan ...' onChange={query} />
    </div>
  );
};

export default NoteSearchBar;
