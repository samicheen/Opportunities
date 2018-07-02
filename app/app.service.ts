import { Injectable } from "@angular/core";
import { Http, Headers, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Config } from "./config";
import { Opportunity } from "./opportunity";

@Injectable()
export class OpportunityListService {
  baseUrl = Config.apiUrl + "appdata/" + Config.appKey + "/opportunities";

  constructor(private http: Http) {}

  getOpportunities() {
    return this.http.get(this.baseUrl, {
      headers: this.getCommonHeaders()
    })
    .map(res => res.json())
    .map(data => {
      let opportunityList = [];
      data.forEach((opportunity) => {
        opportunityList.push(new Opportunity(opportunity.id, opportunity.name));
      });
      return opportunityList;
    })
    .catch(this.handleErrors);
  }

  getCommonHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", Config.authHeader);
    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}