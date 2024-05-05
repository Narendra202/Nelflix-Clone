import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({ required: true }) userImg : string = '';
  @Input({ required: true }) userName : string = ''
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"];

  // @Input() SignOutUser(){};
}
