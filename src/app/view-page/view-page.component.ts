import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
// variable creation ,datatype =string, initial value= empty string
  contactId:string=''
  contact:any
  houseId:string=''
  houseName:string=''
    constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

    ngOnInit():void{
      this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);  // {id}- object // output we get in console {contactId: '1002'}
      this.contactId=data.contactId
      console.log(this.contactId); // {id}


      //api call
           this.api.viewContact(this.contactId).subscribe((data:any)=>{
            console.log(data);
            this.contact=data
            this.houseId=data.houseId
            console.log(this.contact); // particular contact details
       // function api call - house name
              this.api.getHouseName(this.houseId).subscribe((data:any)=>{
                console.log(data);  
                this.houseName=data.name
                console.log(this.houseName);
                
              })
            
          })

     })
    }
  }
