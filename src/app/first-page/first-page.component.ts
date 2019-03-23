import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  users: Object;

  constructor(private data: DataService) { }


  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }


}



