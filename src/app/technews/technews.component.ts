import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  techNewsData:any=[] 

  constructor( private api:TcnewsapiService ) { }

  ngOnInit(): void {

    this.api.tcTechNews().subscribe((result)=>{
      console.log(result.articles);
      this.techNewsData= result.articles

      
    })
  }

}
