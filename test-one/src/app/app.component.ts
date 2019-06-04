import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName: string= "";
  response: any;

  constructor(private http: HttpClient){
    
  }

    //observable will capture the response and then arrow function will savev that response captured into the undefined response variable above
  ngOnInit(){

  }

  search(){
    this.http.get('https://api.github.com/users/' + this.userName).subscribe((response) => {
      this.response = response;
      console.log(this.response);
    
    })
  }
}
