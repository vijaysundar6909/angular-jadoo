import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  messages = '';
  message: BehaviorSubject<string>;
  private _listners = new Subject<string>();
  constructor(private http: HttpClient) {
    this.message = new BehaviorSubject(this.messages);
  }
  
  listen(): Observable<string> {
    return this._listners.asObservable();
  }
  nextmessage(data: string) {
    this.message.next(data);
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }
  public category = [
    {
      img: "assets/img/image-3.svg",
      head: "Calculated Weather",
      para: "A paragraph is a series of sentences that are organized and coherent. "
    },
    {
      img: "assets/img/image-5.png",
      head: "Best Flights",
      para: "A paragraph is a series of sentences that are organized and coherent. "
    },
    {
      img: "assets/img/image-4.png",
      head: "Local Events",
      para: "A paragraph is a series of sentences that are organized and coherent. "
    },
    {
      img: "assets/img/image-5.png",
      head: "Customization",
      para: "A paragraph is a series of sentences that are organized and coherent. "
    },
  ]

  public selling = [
    {
      img: "assets/img/image-14.jpg",
      place: "Rome, Italy",
      price: "5,42K",
      trip: "10 Days Trip"
    },
    {
      img: "assets/img/image-15.jpg",
      place: "London, UK",
      price: "42k",
      trip: "10 Days Trip"
    },
    {
      img: "assets/img/image-16.jpg",
      place: "Full Europe",
      price: "22k",
      trip: "10 Days Trip"
    },
  ]
  public header = [
    {
      head: "Destinations"
    },
    {
      head: "Hotel"
    },
    {
      head: "Flights"
    },
    {
      head: "Bookings"
    },
    {
      head: "Login"
    },
    {
      head: "Signup"
    },
    {
      head: "EN"
    },
  ]


}
