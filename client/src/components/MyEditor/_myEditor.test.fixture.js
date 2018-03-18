import MyEditor from './'
import File from 'mditor-types'

/**
 * Mandatory data type FILE
 */
const file = new File("file", 3, "new File (1)", "#  It Should view like H1 !! \n ## H2 \n ### H3 \n ..")
export default [{
        component: MyEditor,
        name: 'MyEditor with out content',
        url: '/',
        props: {
            file: new File('file', 5, "new File(2)"),
            emitCurrentContent: (content) => console.log(`Content: ${content}`)
        }
    },

    {
        component: MyEditor,
        name: 'MyEditor with some file',
        url: '/',
        props: {
            file,
            emitCurrentContent: (content) => console.log(`Content: ${content}`)
        }
    }
]