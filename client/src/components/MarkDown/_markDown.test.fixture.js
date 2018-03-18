import MarkDown from './'
import File from 'mditor-types'

/**
 * Mandatory data type FILE
 */
const file = new File("file", 3, "new File (1)", "#  It Should view like H1 !! \n ## H2 \n ### H3 \n ..")
const fileEmpty = new File("file", 4, "new File(2)")

export default [{
        component: MarkDown,
        name: 'HomaPage MardkDown',
        url: '/',
        props: {
            file: fileEmpty,
            showInitialMarkDown: true
        }
    },
    {
        component: MarkDown,
        name: 'MardkDown with out content',
        url: '/',
        props: {
            file: fileEmpty,
            showInitialMarkDown: false
        }
    },

    {
        component: MarkDown,
        name: 'MardkDown with some file',
        url: '/',
        props: {
            file,
            showInitialMarkDown: false
        }
    }
]