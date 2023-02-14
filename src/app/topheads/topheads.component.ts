import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-topheads',
  templateUrl: './topheads.component.html',
  styleUrls: ['./topheads.component.css']
})
export class TopheadsComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

  //display topheadlines data
  topHeadlinesData:any = []
  

  ngOnInit(): void {
    
    this.api.tcHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData= result.articles

      
    })
  }

}
