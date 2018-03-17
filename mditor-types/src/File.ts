class File {
    private id: string;
    private type: "folder" | "file";
    public title: string;
    public files?: Array<File>;
    public content?: string;

    constructor(_type: "folder" | "file", _id: string, _title: string, _content?: string, _files?: Array<File>) {

        if (_type !== "folder" && _type !== "file") {

            const type = "new File(type: string, id: string, title: string, content?: string, files?: File)";
            const message = "only accepts 'folder' || 'file'";

            this.throwError(message, type);
        }

        if (_type == "folder") {

            this.files = _files || [];
        }

        if (_type == "file") {

            this.content = _content || "";
        }

        this.id = _id;
        this.title = _title;
        this.type = _type;
    }

    getId(): string { return this.id; }

    getTitle(): string { return this.title; }

    getType(): string { return this.type; }

    getContent(): string | never { return this.type === "file" ? this.content : this.throwError("is not a function", this.getContent.name); }

    getFile(id: string): File | never { return this.type === "folder" ? this.files.find(file => file.id === id) : this.throwError("is not a function", this.getFile.name); }

    setTitle(title: string) { this.title = title; }

    setContent(content: string) { this.type === "file" ? this.content = content : this.throwError("is not a function", this.setContent.name); }

    add(childr: File) { this.type === "folder" ? this.files.push(childr) : this.throwError("is not a function", this.add.name); }

    remove(child: File) {
        if (this.type === "folder") {
            const length = this.files.length;

            for (let i = 0; i < length; i++) {
                if (this.files[i] === child) {
                    this.files.splice(i, 1);
                    return;
                }
            }
        } else {
            this.throwError("is not a function", this.remove.name);
        }

    }

    throwError(message: string, type: string): never { throw new Error("Error: " + type + " " + message); }
}

export default File;