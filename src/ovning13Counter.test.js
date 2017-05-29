import Counter from './ovning13Counter.js';
import React from 'react';
import { shallow } from 'enzyme';

//Describe kan användas för att gruppera test som hör ihop
describe('Counter component test suite', () => {
	// Börja med en prototyp!
	// initial value: 2
	// om increase fungerar
	// om decrease fungerar
	// - om värdet är större än noll
	// - värdet är noll eller mindre
	
	test('initial value: 2', () => {
		let wrapper = shallow(<Counter />);
		let actual = wrapper.state('number');
		let expected = 2;
		expect(actual).toBe(expected);
		
		let index = wrapper.html().indexOf(expected);
		expect( index ).toBeGreaterThan( -1 );
	})
	
	test('increase increases value', () => {
		let wrapper = shallow(<Counter />);
		wrapper.find('button.increase').simulate('click');
		let actual = wrapper.state('number');
		let expected = 3;
		expect(actual).toBe(expected);
	});
	
		test('decrease decreases value when over 0', () => {
		let wrapper = shallow(<Counter />);
		wrapper.find('button.decrease').simulate('click');
		let actual = wrapper.state('number');
		let expected = 1;
		expect(actual).toBe(expected);
	});
	test('decrease when 0 or lower', () => {
		let wrapper = shallow(<Counter />);
		wrapper.setState({ number: 0 });
		wrapper.find('button.decrease').simulate('click');
		let actual = wrapper.state('number');
		let expected = 0;
		expect(actual).toBe(expected);
	})
	
})
