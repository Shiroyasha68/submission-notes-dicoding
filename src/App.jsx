import Search from './components/Search.jsx';
import AddNotes from './components/AddNotes.jsx'
import Notes from './components/Notes.jsx'
import NotesArchive from './components/NotesArchive.jsx'
import {getInitialData} from './index.js';
import {useState} from 'react';
import './components/style/index.css';
const App = () => {
  const [getData, setGetData] = useState(getInitialData)
  const [serchParams, setSearchParams] = useState(getData)
  const addNotes = (obj) => {
    setGetData([...getData, obj]);
    setSearchParams([...getData, obj]);
  }
  const onDelete = (id) => {
    const notes= getData.filter(item => item.id !== id);
    if(window.confirm("apakah anda yakin ingin menghapus catatan ini?")) {
      setGetData(notes);
      setSearchParams(notes);
    }
  }
  const onArchive = (id) => {
    const [changeArchive] = getData.filter(item => item.id == id);
    if (changeArchive.archived) {
      changeArchive.archived = false;
      setGetData([...getData]);
    }
    else {
      changeArchive.archived = true;
      setGetData([...getData]);
    }
  }
  const onSearch = (keyword) => {
    const searchResult = getData.filter(item => item.title.toLowerCase().includes(keyword)
     );
     if(keyword == '') {
      setSearchParams(getData);
    }
    else {
      setSearchParams(searchResult);
    }
  }
  return (
      <div id="notes">
        <header>
        <h1>Notes.</h1>
        <Search onSearch={onSearch} />
        </header>
        <main>
          <AddNotes addNotes = {addNotes} />
          <Notes getInitialData={serchParams}
          onDelete={onDelete}
          onArchive={onArchive} />
          <NotesArchive getInitialData = {serchParams}
          onDelete={onDelete}
          onArchive={onArchive}
          />
        </main>

      </div>
  )
}


export default App;