import CreateNode from './CreateNode';
// import styles from './Notes.module.css';

type NoteType = {
  id: string;
  Task: string;
  Done: string;
  Due_Date: string;
};

async function getNotes(): Promise<NoteType[]> {
  const res = await fetch('http://127.0.0.1:8090/api/collections/Collection1/records?page=1&perPage=30');
  const data = await res.json();
  return data?.items as NoteType[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return(
    <div className='bg-gray-800 h-screen font-press-start'>
      <div className='bg-black m-3 mt-10 p-2 border-4 outline-doubl rounded-md w-5/6'>
      
        <h1 className='text-white text-4xl pb-3'>Dailies</h1>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Done</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {notes?.map((note) => (
              <Note key={note.id} note={note} />
            ))}
          </tbody>
        </table>
        

        <CreateNode />

      </div>

    </div>
  );
}

function Note({ note }: { note: NoteType }) {
  const { Task, Done, Due_Date} = note;

  return (
    <tr className='text-white'>
      <td>{Task}</td>
      <td>{Done}</td>
      <td>{Due_Date}</td>
    </tr>
  );
}
