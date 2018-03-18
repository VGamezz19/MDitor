import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../src/components/';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

const match = {match:'/', params: {}, path: '/'}

it('Main aplication rendering', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><App match={match} /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Should create and Match same Snapshot', () => {
    const component = renderer.create(
        <MemoryRouter><App match={match}/></MemoryRouter>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
