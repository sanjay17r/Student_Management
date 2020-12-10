

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Sangwin Gawande';


	studentsList = [
	{	
		id : 1,
		first_name : "test",
		last_name : "test",
		email : "test@test.com",
		phone : 1111111111,
		department : "Science"
	},
	{
		id : 2,
		first_name : "test1",
		last_name : "test1",
		email : "test1@teat1.com",
		phone : 2222222222,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "test2",
		last_name : "test2",
		email : "test2@test2.com",
		phone : 3333333333,
		department : "Science"
	},
	{
		id : 4,
		first_name : "test3",
		last_name : "test3",
		email : "test3@test3.com",
		phone : 4444444444,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "test4",
		last_name : "test4",
		email : "test4@test4.com",
		phone : 5555555555,
		department : "Engineering"
	}
	];

	constructor() {

		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
