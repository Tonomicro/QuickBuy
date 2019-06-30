import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-amor',
  templateUrl: './amor.component.html'
})
export class AmorComponent {
  public forecasts: Elogios[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Elogios[]>(baseUrl + 'api/ElogioData/ElogiosMetodo').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface Elogios {
  descricao: string;
}
