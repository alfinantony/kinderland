import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/Model/myContact';
import { MyGroup } from 'src/Model/myHouse';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit{
  contactId:any;
contact:MyContact={}
house:MyGroup[]=[] as MyGroup[]

    constructor(private activatedRoute:ActivatedRoute,private api:ApiService, private route:Router){}
    ngOnInit():void{
      this.activatedRoute.params.subscribe((data:any)=>{
        console.log(data);
        console.log(data.Id);
        this.contactId=data['Id']
        console.log(this.contactId);
        this.api.viewContact(this.contactId).subscribe((data:any)=>{
          console.log(data);
          this.contact=data
          })
          this.api.getAllHouses().subscribe((data:any)=>{
            console.log(data);
            this.house=data
        })
        
      })
    }

    updateContact(){
      this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
        console.log(data);
        this.route.navigateByUrl('/front/home')
      })
    }
}
