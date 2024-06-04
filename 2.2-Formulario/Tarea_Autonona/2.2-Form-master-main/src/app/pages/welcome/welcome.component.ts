import { Component, OnInit } from '@angular/core';
import {EmployeesComponent} from "../../components/employees-form/employees-form.component";
import { ProductsFromComponent } from '../../components/products-form/products-form.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    EmployeesComponent,
    ProductsFromComponent
  ],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
