import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';

// import * as data from './assets/movie-db.json';
const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzVmYTNiMDdlNDY4NGVlNjAzMjI3NzcxYzNlYjMyNCIsInN1YiI6IjY2MzIzNWEzZmU2YzE4MDEyYzJlZjQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VZMVQU-kWXuSMYLOjfo_iITFI9T6DKeVMUkWWyBjhHA'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(public http: HttpClient) { 
    
  }

  getMovie() {
    // return this.http.get<any>('https://www.omdbapi.com/?s=inception&apikey=9fa8af23', options)
    return this.http.get<any>('./assets/movie-db.json')
  }

  getTVShows(){
    return this.http.get('./assets/movie-db.json')
  }
  getRateMovies(){
    return this.http.get('./assets/movie-db.json')
  }
  getBannerImage(){
    return this.http.get('./assets/movie-db.json')
  }
  getBannerVideo(){
    return this.http.get('./assets/movie-db.json')
  }
  getBannerDetail(){
    return this.http.get('./assets/movie-db.json')
  }
  getNowPlayingMovies(){
    return this.http.get('./assets/movie-db.json')
  }
  getPopularMovies(){
    return this.http.get('./assets/movie-db.json')
  }
  getTopRated(){
    return this.http.get('./assets/movie-db.json')
  } 
  getUpcomingMovies(){
    return this.http.get('./assets/movie-db.json')
  }
  
}