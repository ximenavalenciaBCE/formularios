import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-normal',
  imports: [FormsModule],
  templateUrl: './normal.html',
  styleUrl: './normal.css'
})
export class Normal {

  name:string="";
  names:string[] = [];

  enviar(){
    if (this.name.trim()){
      this.names.push( this.name.trimEnd());
      this.name = "";
      console.log(this.names);
    }
  }
}
