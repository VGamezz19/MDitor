import MarkDown from './'

export default [{
    component: MarkDown,
    name: 'HomaPage MardkDown',
    url: '/',
    props: {
     file: {},
     showInitialMarkDown:true   
    }
},
{
    component: MarkDown,
    name: 'MardkDown with out content',
    url: '/',
    props: {
     file: {},
     showInitialMarkDown:false   
    }
},

{
    component: MarkDown,
    name: 'MardkDown with some file',
    url: '/',
    props: {
     file: { id: 1, title: 'new file (1)', content: '#  It Should view like H1 !! \n ## H2 \n ### H3 \n ...' },
     showInitialMarkDown:false   
    }
}
]