import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass']
})
export class HelloComponent implements OnInit {

  constructor(private service: HelloService) { }

  ngOnInit() {
    this.service.call().subscribe(response => console.log(response));
  }

}
