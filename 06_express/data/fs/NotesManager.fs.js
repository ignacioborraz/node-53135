import fs from "fs";
import crypto from "crypto";

class NotesManager {
    constructor() {
        this.path = "./data/fs/files/notes.json";
        this.init();
    }
    init() {
        const exists = fs.existsSync(this.path);
        if (!exists) {
            const stringData = JSON.stringify([], null, 2);
            fs.writeFileSync(this.path, stringData);
        }
    }
    async create(data) {
        try {
            if (!data.text) {
                throw new Error("INGRESE TEXT");
            } else {
                const note = {
                    id: crypto.randomBytes(12).toString("hex"),
                    text: data.text,
                    category: data.category || "to do",
                    date: data.date || new Date(),
                };
                let all = await fs.promises.readFile(this.path, "utf-8");
                all = JSON.parse(all);
                all.push(note);
                all = JSON.stringify(all, null, 2);
                await fs.promises.writeFile(this.path, all);
                return note;
            }
        } catch (error) {
            console.log(error);
            return error
        }
    }
    async read(cat) {
        try {
            let all = await fs.promises.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            cat && (all = all.filter(each => each.category === cat))
            return all
        } catch (error) {
            console.log(error);
            return error
        }
    }
    async readOne(id) {
        try {
            let all = await fs.promises.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            let note = all.find((each) => each.id === id);
            return note;
        } catch (error) {
            console.log(error);
            return error
        }
    }
    async destroy(id) {
        try {
            let all = await fs.promises.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            let note = all.find((each) => each.id === id);
            if (note) {
                let filtered = all.filter((each) => each.id !== id);
                filtered = JSON.stringify(filtered, null, 2);
                await fs.promises.writeFile(this.path, filtered);
            }
            return note;
        } catch (error) {
            console.log(error);
            return error
        }
    }
}

const notesManager = new NotesManager()
export default notesManager