import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from '../../core/components/header/header.component';
import { BannerComponent } from '../../core/components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/model/video.content.interface';
import { Observable, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent,BannerComponent,MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {

  name = JSON.parse(sessionStorage.getItem('LoginUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('LoginUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('LoginUser')!).email;
  // bannerDetails = new Observable<any>();

  movies : IVideoContent[] = [];
  tvShows : IVideoContent[] = [];
  nowPlayingMovies : IVideoContent[] = [];
  popularMovies : IVideoContent[] = [];
  topRatedMovies : IVideoContent[] = [];
  upcomingMovies : IVideoContent[] = [];
  ratedMovies : IVideoContent[] = [];

  sources = [
    this.movieService.getMovie(),
    this.movieService.getTVShows(),
    this.movieService.getRateMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated()
  ]
  constructor(protected authService:AuthService, private movieService : MovieService){}
  

  ngOnInit(): void {
    forkJoin(this.sources).pipe(
      map(([movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated]) => {
      //  this.bannerDetails = this.movieService.getBannerDetail();
        return {movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated}
      })
    ).subscribe((res:any) =>{
      this.movies =  res.movies as IVideoContent[];
      this.tvShows = res.tvShows as IVideoContent[];
      this.ratedMovies = res.ratedMovies as IVideoContent[];
      this.nowPlayingMovies = res.nowPlaying as IVideoContent[];
      this.upcomingMovies = res.upcoming as IVideoContent[];
      this.popularMovies = res.popular as IVideoContent[];
      this.topRatedMovies = res.topRated as IVideoContent[];

    })
    
  }

  signOut(){
    sessionStorage.removeItem('LoginUser'); 
    this.authService.signOut();
  }
}
