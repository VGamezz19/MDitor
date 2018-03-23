import { expect } from "chai";
import File from "../src/File";
import "mocha";

describe("Type File as a File", () => {

  it("Should create new File", () => {
    const type = "file";
    const id = "zsd23e1das";
    const title = "title File";
    const file = new File(type, id, title);

    expect(file);

    expect(file.getId);

    expect(file.getTitle);

    expect(file.getType);

    expect(file.getContent);

    expect(file.setTitle);

    expect(file.setContent);

    expect(file.getType()).to.be.equal(type);

    expect(file.getId()).to.be.equal(id);

    expect(file.getTitle()).to.be.equal(title);

    expect(file).to.be.an.instanceof(File);

  });

  it("Should Update Title", () => {

    const type = "file";
    const id = "zsd23e1das";
    const title = "title File";
    const file = new File(type, id, title);

    expect(file);

    expect(file.getType()).to.be.equal(type);

    expect(file.getId()).equal(id);

    expect(file.getTitle()).equal(title);

    expect(file).to.be.an.instanceof(File);

    const newTitle = "new Title";

    file.setTitle(newTitle);

    expect(file.getTitle()).not.to.be.equal(title);

    expect(file.getTitle()).to.be.equal(newTitle);

  });

  it("Should Create with Content", () => {

    const type = "file";
    const id = "zsd23e1das";
    const title = "title File";
    const content = "initial Content";
    const file = new File(type, id, title, content);

    expect(file);

    expect(file.getType()).to.be.equal(type);

    expect(file.getId()).equal(id);

    expect(file.getTitle()).equal(title);

    expect(file).to.be.an.instanceof(File);

    expect(file.getContent()).not.to.be.equal("");

    expect(file.getContent()).to.be.equal(content);

  });

  it("Should Set Content", () => {

    const type = "file";
    const id = "zsd23e1das";
    const title = "title File";
    const file = new File(type, id, title);

    expect(file);

    expect(file.getType()).to.be.equal(type);

    expect(file.getId()).equal(id);

    expect(file.getTitle()).equal(title);

    expect(file).to.be.an.instanceof(File);

    const newContent = "new content bla bla string";

    file.setContent(newContent);

    expect(file.getContent()).not.to.be.equal("");

    expect(file.getContent()).to.be.equal(newContent);

  });

});

describe("Type File as a Folder", () => {

  it("Should create new Folder", () => {
    const type = "folder";
    const id = "zsd23e1das";
    const title = "title Folder";
    const folder = new File(type, id, title);

    expect(folder);

    expect(folder.getId);

    expect(folder.getTitle);

    expect(folder.getType);

    expect(folder.getFile);

    expect(folder.add);

    expect(folder.remove);

    expect(folder.setTitle);

    expect(folder.getType()).to.be.equal(type);

    expect(folder.getId()).equal(id);

    expect(folder.getTitle()).equal(title);

    expect(folder).to.be.an.instanceof(File);

  });

  it("Should Update Title", () => {

    const type = "folder";
    const id = "zsd23e1das";
    const title = "title Folder";
    const folder = new File(type, id, title);

    expect(folder);

    expect(folder.getType()).to.be.equal(type);

    expect(folder.getId()).equal(id);

    expect(folder.getTitle()).equal(title);

    expect(folder).to.be.an.instanceof(File);

    const newTitle = "new Title";

    folder.setTitle(newTitle);

    expect(folder.getTitle()).not.to.be.equal(title);

    expect(folder.getTitle()).to.be.equal(newTitle);

  });

  it("Should Create with Files", () => {

    const typeFile = "file";
    const idFile = "asdasfasdas";
    const titleFile = "title File";
    const content = "initial Content";

    const file = new File(typeFile, idFile, titleFile, content);

    expect(file);

    expect(file.getType()).to.be.equal(typeFile);

    expect(file.getId()).equal(idFile);

    expect(file.getTitle()).equal(titleFile);

    expect(file).to.be.an.instanceof(File);

    const type = "folder";
    const id = "zsd23e1das";
    const title = "title Folder";

    const folder = new File(type, id, title, undefined, [file]);

    expect(folder);

    expect(folder.getType()).to.be.equal(type);

    expect(folder.getId()).equal(id);

    expect(folder.getTitle()).equal(title);

    expect(folder).to.be.an.instanceof(File);

    folder.add(file);

    expect(folder.files);

    expect(folder.files).length(2);

    expect(folder.getFile(idFile)).to.equal(file);

    expect(folder.getFile(idFile)).to.be.an.instanceof(File);

  });

  it("Should Add Files", () => {

    const typeFile = "file";
    const idFile = "asdasfasdas";
    const titleFile = "title File";
    const content = "initial Content";

    const file = new File(typeFile, idFile, titleFile, content);

    expect(file);

    expect(file.getType()).to.be.equal(typeFile);

    expect(file.getId()).equal(idFile);

    expect(file.getTitle()).equal(titleFile);

    expect(file).to.be.an.instanceof(File);

    const type = "folder";
    const id = "zsd23e1das";
    const title = "title Folder";

    const folder = new File(type, id, title, undefined);

    expect(folder);

    expect(folder.getType()).to.be.equal(type);

    expect(folder.getId()).equal(id);

    expect(folder.getTitle()).equal(title);

    expect(folder).to.be.an.instanceof(File);

    folder.add(file);

    expect(folder.files);

    expect(folder.files).length(1);

    expect(folder.getFile(idFile)).to.equal(file);

    expect(folder.getFile(idFile)).to.be.an.instanceof(File);

  });

  it("Should Remuve Files", () => {

    const typeFile = "file";
    const idFile = "asdasfasdas";
    const titleFile = "title File";
    const content = "initial Content";

    const file = new File(typeFile, idFile, titleFile, content);

    expect(file);

    expect(file.getType()).to.be.equal(typeFile);

    expect(file.getId()).equal(idFile);

    expect(file.getTitle()).equal(titleFile);

    expect(file).to.be.an.instanceof(File);

    const type = "folder";
    const id = "zsd23e1das";
    const title = "title Folder";

    const folder = new File(type, id, title, undefined);

    expect(folder);

    expect(folder.getType()).to.be.equal(type);

    expect(folder.getId()).equal(id);

    expect(folder.getTitle()).equal(title);

    expect(folder).to.be.an.instanceof(File);

    folder.add(file);

    expect(folder.files);

    expect(folder.files).length(1);

    expect(folder.getFile(idFile)).to.equal(file);

    expect(folder.getFile(idFile)).to.be.an.instanceof(File);

    folder.remove(file);

    expect(folder.files).length(0);

    expect(folder.getFile(id)).to.be.equal(undefined);

  });
});

describe("Errors Types Files", () => {
  it("Should throw an error when try to get Content in Folder type", () => {
    const type = "folder";
    const id = "zsd23e1das";
    const title = "title Folder";

    const folder = new File(type, id, title, undefined);

    expect(function () { folder.getContent(); }).to.throw();
  });

  it("Should throw an error when try to set Content in Folder type", () => {
    const type = "folder";
    const id = "zsd23e1das";
    const title = "title Folder";

    const folder = new File(type, id, title, undefined);

    expect(function () { folder.setContent("bla bla bla new content"); }).to.throw();
  });

  it("Should throw an error when try to add new File in File type", () => {
    const typeFile = "file";
    const idFile = "asdasfasdas";
    const titleFile = "title File";
    const content = "initial Content";

    const file = new File(typeFile, idFile, titleFile, content);

    expect(function () { file.add(new File("file", "asda", "asdas", "asd")); }).to.throw();
  });

  it("Should throw an error when try to getFile in File type", () => {
    const typeFile = "file";
    const idFile = "asdasfasdas";
    const titleFile = "title File";
    const content = "initial Content";

    const file = new File(typeFile, idFile, titleFile, content);

    expect(function () { file.getFile("asdsd"); }).to.throw();
  });

  it("Should throw an error when try to remove File in File type", () => {
    const typeFile = "file";
    const idFile = "asdasfasdas";
    const titleFile = "title File";
    const content = "initial Content";

    const file = new File(typeFile, idFile, titleFile, content);

    expect(function () { file.remove(new File("file", "asd", "asd", "asd")); }).to.throw();
  });

  it("Should throw an error when try to new File without Type", () => {
    const idFile = "asdasfasdas";
    const titleFile = "title File";
    const content = "initial Content";

    expect(function () { const file = new File("", idFile, titleFile, content); }).to.throw();
  });

  it("Should throw an error function error", () => {
    const idFile = "asdasfasdas";
    const titleFile = "title File";
    const content = "initial Content";

    const file = new File("file", idFile, titleFile, content);
    expect(function () { file.throwError("testing", "typeTesting"); }).to.throw();
  });
});