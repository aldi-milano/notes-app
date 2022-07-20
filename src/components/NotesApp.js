import React from 'react';
import NotesList from './NotesList';
import NoteInput from './NoteInput';

import { getInitialData } from '../utils/index';
import NoteHeader from './NoteHeader';
import ArchiveList from './ArchiveList';

class NotesApp extends React.Component {
  state = { notes: getInitialData(), keyword: '' };

  onAddNotesHandler = ({ title, body }) => {
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes,
          {
            // id: +new Date().getMilliseconds(),
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  };

  onDeleteNoteHandler = id => {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  };

  onArchivedHandler = id => {
    const newNotes = [...this.state.notes];
    const noteIndex = this.state.notes.findIndex(note => note.id === id);
    newNotes[noteIndex].archived = true;
    this.setState({ notes: newNotes });
  };

  unArchivedHandler = id => {
    const newNotes = [...this.state.notes];
    const noteIndex = this.state.notes.findIndex(note => note.id === id);
    newNotes[noteIndex].archived = false;
    this.setState({ notes: newNotes });
  };

  onSearchHandler = str => {
    this.setState({ keyword: str.target.value });
  };

  render() {
    return (
      <>
        <NoteHeader
          onSearch={this.onSearchHandler}
          notes={this.state.notes}
          query={this.onSearchHandler}
          keyword={this.state.keyword}
        />
        <div className='note-app__body'>
          <NoteInput addNotes={this.onAddNotesHandler} />
          <h2>Catatan Aktif</h2>
          <NotesList
            keyword={this.state.keyword}
            notes={this.state.notes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchivedHandler}
          />
          <h2>Arsip</h2>
          <ArchiveList
            onDelete={this.onDeleteNoteHandler}
            unArchive={this.unArchivedHandler}
            notes={this.state.notes}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
