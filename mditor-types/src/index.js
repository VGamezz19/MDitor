"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var File =
/*#__PURE__*/
function () {
  function File(_type, _id, _title, _content, _files) {
    _classCallCheck(this, File);

    Object.defineProperty(this, "id", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "type", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "title", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "files", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "content", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });

    if (_type !== "folder" && _type !== "file") {
      var type = "new File(type: string, id: string, title: string, content?: string, files?: File)";
      var message = "only accepts 'folder' || 'file'";
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

  _createClass(File, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      return this.type === "file" ? this.content : this.throwError("is not a function", this.getContent.name);
    }
  }, {
    key: "getFile",
    value: function getFile(id) {
      return this.type === "folder" ? this.files.find(function (file) {
        return file.id === id;
      }) : this.throwError("is not a function", this.getFile.name);
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.title = title;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.type === "file" ? this.content = content : this.throwError("is not a function", this.setContent.name);
    }
  }, {
    key: "add",
    value: function add(childr) {
      this.type === "folder" ? this.files.push(childr) : this.throwError("is not a function", this.add.name);
    }
  }, {
    key: "remove",
    value: function remove(child) {
      if (this.type === "folder") {
        var length = this.files.length;

        for (var i = 0; i < length; i++) {
          if (this.files[i] === child) {
            this.files.splice(i, 1);
            return;
          }
        }
      } else {
        this.throwError("is not a function", this.remove.name);
      }
    }
  }, {
    key: "throwError",
    value: function throwError(message, type) {
      throw new Error("Error: " + type + " " + message);
    }
  }]);

  return File;
}();

var _default = File;
exports.default = _default;