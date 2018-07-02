import { Component, OnInit } from "@angular/core";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { OpportunityListService } from "./app.service";
// import { Push } from 'kinvey-nativescript-sdk/push';

Kinvey.init({
    appKey: 'kid_BJikuOHzm',
    appSecret: 'a5a270bb56a542f1829e50d3b67d7dd9'
});

Kinvey.ping()
    .then((response) => {
        console.log(`Kinvey Ping Success. Kinvey Service is alive, version: ${response.version}, response: ${response.kinvey}`);
    })
    .catch((error) => {
        console.log(`Kinvey Ping Failed. Response: ${error.description}`);
    });

  // Push.register({
  //   android: {
  //     senderID: '1033284604825'
  //   },
  //   ios: {
  //     alert: true,
  //     badge: true,
  //     sound: true
  //   }
  // })
  //   .then((deviceToken: string) => {
  //     // ...
  //   })
  //   .catch((error: Error) => {
  //     // ...
  //   });

  // Push.onNotification((data: any) => {
  //   // ...
  // });

@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
  providers: [OpportunityListService]
})
export class AppComponent implements OnInit {
  public opportunityList: Array<Object> = [];

  constructor(private opportunityListService: OpportunityListService) {}

  ngOnInit() {
    this.opportunityListService.getOpportunities()
      .subscribe(opportunities => {
        opportunities.forEach((opportunity) => {
          this.opportunityList.push(opportunity);
        });
      });
  }

}
