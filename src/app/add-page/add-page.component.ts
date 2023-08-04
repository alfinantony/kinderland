import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/Model/myContact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent {

  allHouses:any=[];
  houseName:string=''
  contact:MyContact={}
 constructor(private api:ApiService,private router:Router){
  this.contact.houseId="Select a House"
 }


 ngOnInit():void{
  this.api.getAllHouses().subscribe((data)=>{
    console.log(data);
  this.allHouses=data
  })
 }
 addcontact(){
  this.api.addContact(this.contact).subscribe((data)=>{
    this.router.navigateByUrl('/front/home')
  })
 }
}
