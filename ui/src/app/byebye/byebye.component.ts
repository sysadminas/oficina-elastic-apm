import { Component, OnInit } from '@angular/core';
import { ByebyeService } from './byebye.service'

@Component({
  selector: 'app-byebye',
  templateUrl: './byebye.component.html',
  styleUrls: ['./byebye.component.sass']
})
export class ByebyeComponent implements OnInit {

  constructor(private service: ByebyeService) { }

  ngOnInit() {
    this.service.call().subscribe(response => console.log(response));
  }

}
