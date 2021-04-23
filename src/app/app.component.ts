import { Component } from '@angular/core';
import { Cedula } from './Models/cedula';
import { RequestCedula } from './Models/request-cedula';
import { AppServiceService } from './services/app-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GaP-Cedula';
  selectedFile: any = null;
  cedula: Cedula;
  fileName = "";
  requestCedula: RequestCedula;


  constructor(private appservice: AppServiceService) { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.fileName = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(reader.result)
      const file = reader.result;
      const string = JSON.stringify(file);
      this.selectedFile = JSON.parse(string)
    };
  }
  onUpload() {
    this.requestCedula = new RequestCedula();
    let data = this.selectedFile.split(",")[1];
    this.requestCedula.base64String = data;
    // console.log("Data="+JSON.stringify(this.requestCedula));
    this.appservice.post(this.requestCedula).subscribe(resp1 => {
      this.cedula = resp1;
      console.log(this.cedula);
      // let activo = funcionario.activo;
    })

  }

}
