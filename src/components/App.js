import React, { Component } from 'react';
import './App.scss';
import CircleButton from './CircleButton'
import Sidenav from './Sidenav'
import MarkDown from './MarkDown/MarkDown'



class App extends Component {
  render() {
    return (
      <section className="App">
        <article>
          <Sidenav
            buttonTriggerStyle={{ buttonClassName: 'grey lighten-2', iconClassName: null, icon: 'menu' }}
            buttonDropStyle={{ buttonClassName: null, iconClassName: 'black-font', icon: 'close' }}
            user={{name:'Victor', surname:'Gamez'}} 
            folders={[{
              title:'new Folder1',
              files: [{title: 'terst file1'},{title: 'terst file2'}]
            },{
              title:'new Folder2',
              files: [{title: 'terst file1'},{title: 'terst file2'}]
            }]}/>
            
          <CircleButton ButtonClassName='grey lighten-2' IconClassName='black-font' icon='edit' />
        </article>
        <div className='MarkDownEdited'>
          <MarkDown />
        </div>
      </section>
    );
  }
}

export default App;
