import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private http:HttpClient) { }
  

  //top Headlines API URL

  topHeadlinesNews ="https://newsapi.org/v2/top-headlines?country=in&apiKey=a4d4df9e3fa34105a19dce3456c4118a";

//tech news api url
techNews="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a4d4df9e3fa34105a19dce3456c4118a";

//business news api url
businessNews ='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a4d4df9e3fa34105a19dce3456c4118a'
  


tcBusiness():Observable<any>{
  return this.http.get(this.businessNews)
}


  tcHeadlines():Observable<any>{
    return this.http.get(this.topHeadlinesNews)
  }

  tcTechNews():Observable<any>{
    return this.http.get(this.techNews)
  }


}
