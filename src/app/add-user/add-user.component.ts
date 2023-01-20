import { UserServiceService } from './../shared/service/user-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor(
    private userService: UserServiceService // il faut probablement injecter un service ici !
  ) {}

  ngOnInit() {}

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      // on utilise le service ici pour ajouter l'utilisateur;
      this.el.nativeElement.value = '';
      this.userService.addUser(Array(username));
    }
  }
}
