import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './store/reducers/reminders';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('reducers', () => {
	let state;
	state = reducers({'2020-02-01':[{id:'07d7f8d0-4ab2-11ea-99cb-0b7e3cac4c05',time:'1:00 am',description:'u77iu6',color:'#e73434'}],'2020-02-08':[{id:'33441fa0-4ab5-11ea-99cb-0b7e3cac4c05',time:'',description:'grtg',color:'#882e2e'},{id:'4b60bb90-4ab8-11ea-99cb-0b7e3cac4c05',time:'12:00 am',description:'blah blah',color:'#000'}],'2020-02-05':[{id:'62316170-4ab9-11ea-99cb-0b7e3cac4c05',time:'2:02 am',description:'my remindererer',color:'#000'}]}, {type:'UPDATE_REMINDER',reminder:{date:'2020-02-05',time:'2:04 am',description:'my remindererer',color:'#000',id:'62316170-4ab9-11ea-99cb-0b7e3cac4c05'}});
	expect(state).toEqual({'2020-02-01':[{id:'07d7f8d0-4ab2-11ea-99cb-0b7e3cac4c05',time:'1:00 am',description:'u77iu6',color:'#e73434'}],'2020-02-08':[{id:'33441fa0-4ab5-11ea-99cb-0b7e3cac4c05',time:'',description:'grtg',color:'#882e2e'},{id:'4b60bb90-4ab8-11ea-99cb-0b7e3cac4c05',time:'12:00 am',description:'blah blah',color:'#000'}],'2020-02-05':[{id:'62316170-4ab9-11ea-99cb-0b7e3cac4c05',time:'2:04 am',description:'my remindererer',color:'#000'}]});
});
