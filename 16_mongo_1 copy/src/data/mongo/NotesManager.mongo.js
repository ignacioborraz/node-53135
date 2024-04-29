import Note from "./models/note.model.js";
import Manager from "./Manager.mongo.js";

const notesManager = new Manager(Note);
export default notesManager;
