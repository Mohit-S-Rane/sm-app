import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Jim Beam', email: 'jim@example.com' },
    { id: 4, name: 'Jack Daniels', email: 'jack@example.com' }
  ];

  constructor(private router: Router) {
    this.router.navigate(['dashboard', 'client-master'])
    console.log('is logged');
   }

  ngOnInit(): void {
    
  }
}
