import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-generator',
  templateUrl: './invoice-generator.component.html',
  styleUrls: ['./invoice-generator.component.css']
})
export class InvoiceGeneratorComponent implements OnInit {

  constructor() { }
  currentDate = new Date();
  ngOnInit(): void {
  }

}
