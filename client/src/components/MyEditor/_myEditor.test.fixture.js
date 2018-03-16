import MyEditor from './'

export default [
{
    component: MyEditor,
    name: 'MyEditor with out content',
    url: '/',
    props: {
     file: {},
     emitCurrentContent:(content) => console.log(`Content: ${content}`)
    }
},

{
    component: MyEditor,
    name: 'MyEditor with some file',
    url: '/',
    props: {
     file: { id: 1, title: 'new file (1)', content: '#  It Should view like H1 !! \n ## H2 \n ### H3 \n ...' },
     emitCurrentContent:(content) => console.log(`Content: ${content}`) 
    }
}
]