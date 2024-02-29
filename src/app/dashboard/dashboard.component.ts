import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: string = ''; 
  departments: { name: string, seats: boolean[] }[] = [
    { name: 'Department 1', seats: this.generateSeats() },
    { name: 'Department 2', seats: this.generateSeats() },
    
  ];

  constructor(private userService: UserService,private router: Router) { 
  }

  ngOnInit(): void {
    this.userService.getUserName().subscribe(userName => {
      this.userName = userName;
    });
  }

  generateSeats(): boolean[] {
    const seats = new Array(50); 
    for (let i = 0; i < seats.length; i++) {
      seats[i] = Math.random() < 0.5; 
    }
    return seats;
  }

 
  countFilledSeats(seats: boolean[]): number {
    return seats.filter(seat => seat).length;
  }

  
  countNotFilledSeats(seats: boolean[]): number {
    return seats.filter(seat => !seat).length;
  }

  logout(): void{
    this.router.navigateByUrl('/login');
  }
}
