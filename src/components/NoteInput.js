import React from 'react';

class NoteInput extends React.Component {
  state = { title: '', body: '' };

  onTitleChangeHandler = e => {
    const titleSlice = e.target.value.slice(0, 50);
    this.setState(prevState => {
      return {
        prevState,
        title: titleSlice,
      };
    });
  };

  onBodyChangeHandler = e => {
    this.setState(prevState => {
      return {
        prevState,
        body: e.target.value,
      };
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addNotes(this.state);
  };

  render() {
    return (
      <div className='note-input'>
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className='note-input__title__char-limit'>
            Sisa Karakter: {50 - this.state.title.length}
          </p>
          <input
            type='text'
            className='note-input__title'
            placeholder='Ini adalah judul ...'
            required
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
            onKeyUp={this.onKeyUpHandler}
          />
          <textarea
            className='note-input__body'
            type='text'
            placeholder='Tuliskan catatanmu di sini ...'
            required
            onChange={this.onBodyChangeHandler}
          ></textarea>
          <button type='submit'>Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
