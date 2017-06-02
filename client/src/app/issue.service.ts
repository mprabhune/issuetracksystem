import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Issue} from './issue';
import 'rxjs/add/operator/map';

@Injectable()
export class IssueService {

  constructor(private http: Http) { }

  //retrive issue

  getIssues()
  {
  	return this.http.get('http://localhost:3000/api/issues')
  	 .map(res => res.json());
  }

  addIssue(newIssue)
  {
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/api/issue', newIssue,{headers:headers})
  	 .map(res => res.json());
  }

  deleteIssue(id)
  {
  	return this.http.delete('http://localhost:3000/api/issue/'+id)
  	 .map(res => res.json());
  }
}
