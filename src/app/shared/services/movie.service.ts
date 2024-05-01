import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';

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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzVmYTNiMDdlNDY4NGVlNjAzMjI3NzcxYzNlYjMyNCIsInN1YiI6IjY2MzIzNWEzZmU2YzE4MDEyYzJlZjQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VZMVQU-kWXuSMYLOjfo_iITFI9T6DKeVMUkWWyBjhHA'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public http: HttpClient) { }

  getMovie() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
  }
}