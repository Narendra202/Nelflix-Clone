import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent,BannerComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {

  name = JSON.parse(sessionStorage.getItem('LoginUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('LoginUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('LoginUser')!).email;

  constructor(private authService:AuthService, private movieService : MovieService){}


  ngOnInit(): void {
    this.movieService.getMovie().subscribe(resp => {
      console.log(resp);
      
    })
  }

  signOut(){
    sessionStorage.removeItem('LoginUser'); 
    this.authService.signOut();
  }
}
