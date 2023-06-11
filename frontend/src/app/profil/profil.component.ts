import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
  currentUser: any


  ngOnInit(): void {
    //récupération du user connecté dans le localStorage du navigateur
    const userString = localStorage.getItem('currentUser')
    if(userString){
      //converstion des données du user sous forme de chaine de caractère en objet
      this.currentUser = JSON.parse(userString)
    }
  }                                       


}
