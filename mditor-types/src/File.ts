/**
 *
 * DataType File, composite pattern
 * https://en.wikipedia.org/wiki/Composite_pattern
 *
 * @version 1.0.0
 */
class File {
    private id: string;
    private type: "folder" | "file";
    public title: string;
    public files?: Array<File>;
    public content?: string;

    constructor(_type: "folder" | "file", _id: string, _title: string, _content?: string, _files?: Array<File>) {

        if (_type !== "folder" && _type !== "file") {

            this.throwError("new File(type: string, id: string, title: string, content?: string, files?: File)", "only accepts 'folder' || 'file'");
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

    /**
     *
     * method getId
     *
     * Compatibility with File and Folder Type
     *
     * @returns {String} get this.id
     *
     * @version 1.0.0
     */
    getId(): string { return this.id; }

    /**
     *
     * method getTitle
     *
     * Compatibility with File and Folder Type
     *
     * @returns {String} get this.title
     *
     * @version 1.0.0
     */
    getTitle(): string { return this.title; }

    /**
     *
     * method getType
     *
     * Compatibility with File and Folder Type
     *
     * @returns {String} get this.type
     *
     * @version 1.0.0
     */
    getType(): string { return this.type; }

    /**
     *
     * method getContent
     *
     * Compatibility only with File Type
     *
     * @returns {String} get this.content
     *
     * @throws {Error} - mandatory Type File
     *
     * @version 1.0.0
     */
    getContent(): string | never { return this.type === "file" ? this.content : this.throwError("is not a function", this.getContent.name); }

    /**
     *
     * method getFile
     *
     * Compatibility only with Folder Type
     *
     * @param {String} id - id from retrieved file
     *
     * @returns {File} get retrieve file
     *
     * @throws {Error} - mandatory Type Folder
     *
     * @version 1.0.0
     */
    getFile(id: string): File | never { return this.type === "folder" ? this.files.find(file => file.id === id) : this.throwError("is not a function", this.getFile.name); }

    /**
     *
     * method setTitle
     *
     * Compatibility with Folder and File Type
     *
     * @param {String} title - set title
     *
     * @version 1.0.0
     */
    setTitle(title: string) { this.title = title; }

    /**
     *
     * method getFile
     *
     * Compatibility only with File Type
     *
     * @param {String} id - id from retrieved file
     *
     * @returns {File} get retrieve file
     *
     * @throws {Error} - mandatory Type File
     *
     * @version 1.0.0
     */
    setContent(content: string) { this.type === "file" ? this.content = content : this.throwError("is not a function", this.setContent.name); }

    /**
     *
     * method add
     *
     * Compatibility only with Folder Type
     *
     * @param {File} childr  children file type file to add
     *
     * @throws {Error} - mandatory Type Folder
     *
     * @version 1.0.0
     */
    add(childr: File) { this.type === "folder" ? this.files.push(childr) : this.throwError("is not a function", this.add.name); }

    /**
     *
     * method remove
     *
     * Compatibility only with Folder Type
     *
     * @param {File} child  children file type file to remove
     *
     * @throws {Error} - mandatory Type Folder
     *
     * @version 1.0.0
     */
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

    /**
     *
     * method throwError
     *
     * @param {String} message descriptive message about error
     * @param {String} type type error or name error
     */
    throwError(message: string, type: string): never { throw new Error("Error: " + type + " " + message); }
}

export default File;