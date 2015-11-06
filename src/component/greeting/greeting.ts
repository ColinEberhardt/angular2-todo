import {Component} from 'angular2/angular2';

@Component({
  selector: 'greeting',
  templateUrl: 'component/greeting/greeting.html',
  styleUrls: ['component/greeting/greeting.css']
})
export default class Greeting {
  greeting: String = 'Hello World';
}
