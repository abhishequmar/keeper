import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./Note";
import notes from "./notes";

function createNotes(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      
      <Note title={notes[0].title} content={notes[0].content}/>
      <Footer />
    </div>
  );
}

export default App;
