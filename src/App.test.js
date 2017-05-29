import React from 'react';
import ReactDOM from 'react-dom';
import{ shallow} from 'enzyme';
import App from './App.js';
import Number from './ovning13.js'

  //smoke test
it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	//shallow(<App/>).render();
});

test('shallow render', () => {
	shallow(<App/>);
});
	
test('renders heading', () => {
	// <h1>Hello</h1>
	let wrapper = shallow(<App/>);
	let actual = wrapper.contains(<h1>Salam Mona</h1>);
	let expected = true;
	expect(actual).toBe(expected);
})