import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(data => this.people = data);
  }

  edit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  delete(id: number) {
    this.router.navigate(['/delete', id]);
  }
}
