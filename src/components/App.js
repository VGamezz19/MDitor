import React, { Component } from 'react';
import './App.scss';
import CircleButton from './CircleButton'
import Sidenav from './Sidenav'

// import MarkDown from './MarkDown/MarkDown'
import MyEditor from './MyEditor/'
import MarkDown from './MarkDown'

class App extends Component {
  constructor() {
    super();
    this.state = {
      mdSrc: '',
      folders: [{
        title: 'new Folder1',
        files: [{ title: 'terst file1' }, { title: 'terst file2' }]
      }, {
        title: 'new Folder2',
        files: [{ title: 'terst file1' }, { title: 'terst file2' }]
      }]

    }
  }
  onChangeEditor = (mdSrc) => {
    this.setState({ mdSrc })
  }

  newFolder = (title) => {
    this.setState(prevState => ({
      folders: [...prevState.folders, { title, files: [] }]
    }))
  }

  onRenameFolder = (titleRenamed) => {
    console.log(titleRenamed)
  }

  handlerMyEditor = (mdSrc) => this.setState({ mdSrc })

  render() {
    return (
      <section className="App">
        <article>
          <Sidenav
            buttonTriggerStyle={{ buttonClassName: 'grey lighten-2', iconClassName: null, icon: 'menu' }}
            buttonDropStyle={{ buttonClassName: null, iconClassName: 'black-font', icon: 'close' }}
            user={{ name: 'Victor', surname: 'Gamez' }}
            folders={this.state.folders}
            setNewFolder={this.newFolder}
            onRenameFolder={this.onRenameFolder} />

          <CircleButton ButtonClassName='grey lighten-2' IconClassName='black-font' icon='edit' />
        </article>
        <div className='MarkDownEdited'>
          {/* <MarkDown markdownSrc={this.state.mdSrc} />
          <Editor setMD={this.onChangeEditor} /> */}

           <MarkDown src={this.state.mdSrc} />
          <MyEditor handlerMyEditor={this.handlerMyEditor} />

        </div>
      </section>
    );
  }
}

export default App;
