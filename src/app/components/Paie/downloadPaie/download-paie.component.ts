import {Component, OnInit} from '@angular/core';
import * as jsPDF from 'jspdf'
@Component({
  selector: 'download-paie',
  templateUrl: './download-paie.component.html',
  styleUrls: ['./download-paie.component.scss']
})
export class DownloadPaieComponent implements OnInit {
  download:boolean=false;
  constructor() {


  }
ngOnInit(): void {
}

  downloadPaie(event:any){

    let doc = new jsPDF();



      doc.addHTML(document.getElementById('123'), function () {

        doc.save('document' + "RegularPaymentDetails.pdf");
        this.download=true;
      });

  }
}
