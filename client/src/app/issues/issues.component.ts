import { Component, OnInit } from '@angular/core';
import {IssueService} from '../issue.service';
import {Issue} from '../issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  providers: [IssueService]
})
export class IssuesComponent implements OnInit {
	issues: Issue[];
	issue: Issue;
	issuename:string;
	summary:string;
	description:string;
	assignedby:string;
	regionname:string;
	resolution:string;

  constructor(private issueService: IssueService) { }

  addIssue()
  {
    const newIssue = {
      issuename: this.issuename,
      summary: this.summary,
      description: this.description,
      assignedby: this.assignedby,
      regionname: this.regionname,
      resolution: this.resolution
    }
    this.issueService.addIssue(newIssue)
      .subscribe(issue =>{
        this.issues.push(issue);
    this.issueService.getIssues()
     .subscribe( issues =>
      this.issues = issues);
      });
  }

  deleteIssue(id:any)
  {
    var issues = this.issues;
    this.issueService.deleteIssue(id)
      .subscribe(data =>{
        if(data.n==1)
        {
          for(var i = 0; i< issues.length; i++)
          {
            if(issues[i]._id == id)
            {
              issues.splice(i,1);
            }
          }
        }
      this.issueService.getIssues()
     .subscribe( issues =>
      this.issues = issues);
      })

  }

  ngOnInit() {
  this.issueService.getIssues()
     .subscribe( issues =>
      this.issues = issues);
  }

}
