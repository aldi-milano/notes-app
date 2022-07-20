import React from 'react';
import NoteSearchBar from './NoteSearchBar';

const NoteHeader = ({ query }) => {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <NoteSearchBar query={query} />
    </div>
  );
};

export default NoteHeader;
