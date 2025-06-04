import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
})
export class PersonEditComponent implements OnInit {
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

  save(): void {
    this.peopleService.updatePerson(this.person.id, this.person).subscribe(() => {
      alert('Simulated update complete!');
      this.router.navigate(['/people']);
    });
  }
}
