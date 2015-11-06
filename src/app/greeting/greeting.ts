import {Component} from 'angular2/core';

@Component({
  selector: 'greeting',
  templateUrl: 'app/greeting/greeting.html',
  styleUrls: ['app/greeting/greeting.css']
})
export default class Greeting {
  greeting: String = 'Hello World';
}
