
import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme';
import Number from './ovning13';


describe('Number component',()=>{
 
 test('renders without crashing', () => {
 
  //ReactDOM.render(<Number/>);
    shallow(<Number/>);
 });
  
test('renders value ',()=>{
    const num = 20;
    let wrapper = shallow(<Number value={num}/>);
    let actual = wrapper.contains(<p>{num}</p>);
     let expected = true;
     expect(actual).toBe(expected);

});

})//describe