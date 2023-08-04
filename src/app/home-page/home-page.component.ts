import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyContact } from 'src/Model/myContact';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  allContacts:MyContact[]=[] // initially assigned as zero
  searchKey:string=''
// heading='Contact Details'
url='https://cdn3d.iconscout.com/3d/premium/thumb/stylish-boy-8024435-6430704.png'

    constructor(private api:ApiService){}
      ngOnInit():void{
       this.getAllContacts()
      }
      getAllContacts(){
        this.api.getAllContacts().subscribe((data:any)=>{
          console.log(data);
          this.allContacts=data //array of contacts

        }) 
    }
    nameChange(){
      alert('name change')
    }
    Search(event:any){
      console.log(event.target.value);
      this.searchKey=event.target.value
    }
    deleteContact(contactId:any){
      this.api.deleteContact(contactId).subscribe((data:any)=>{
        this.getAllContacts()
        alert('Contact deleted')
      })
    }
}
