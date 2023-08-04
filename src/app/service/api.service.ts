import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/Model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl ='http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }

  //get function for get all contact
  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl)
  }

  //api call for fetching particular details

  viewContact(contactId:any){
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }

  getHouseName(houseId:any){
    return this.http.get('http://localhost:3000/house/'+houseId)
  }
//function for fetch all groups from localhost:3000/group
getAllHouses(){
  return this.http.get('http://localhost:3000/house')
}

//function for adding new contacts to server
addContact(contactBody:any){
  return this.http.post(this.baseUrl,contactBody)
}

//function to delete the contact
deleteContact(contactId:any){
  return this.http.delete(`${this.baseUrl}/${contactId}`)
}
//function for updating contact from server
updateContact(contactId:any,contactBody:any){
  return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
}
}
