import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
   emp:any=[];
  constructor( private UserService1:UserService) { }

  ngOnInit() {
	      this.emp=this.UserService1.getAllUsers().subscribe((data)=>{
               return this.emp=data;			  
                 });


             }
            }
