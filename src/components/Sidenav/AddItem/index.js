import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AddItem from './AddItem'
import './AddItem.scss'

export default AddItem


/**
 * Exporting Cosmos Fixture
 */
function AddItemFixture() {
    return <MuiThemeProvider>
            <AddItem/>
        </MuiThemeProvider>
}

export { AddItemFixture }