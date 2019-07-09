import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: Observable<User>;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log('init');
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => (console.log(users), this.users = users));
  }

  onUserSelect(user) {
    this.selectedUser = user;
  }

}
