import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
})
export class PersonDeleteComponent implements OnInit {
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peopleService.getPerson(id).subscribe(data => this.person = data);
  }

  confirmDelete(): void {
    this.peopleService.deletePerson(this.person.id).subscribe(() => {
      alert('Simulated delete complete!');
      this.router.navigate(['/people']);
    });
  }
}
