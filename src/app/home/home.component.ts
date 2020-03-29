import { Component, OnInit } from '@angular/core';
import {CoronaDetailsService} from '../corona-details.service';
import {LangService} from '../lang.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Infections: any;
  Deaths: any;
  Recoveries: any;
  globalDeaths: any;

  headerTxt;
  InfectionsTxt;
  DeathsTxt;
  RecoveriesTxt;
  Global_DeathsTxt;
  Helpful_LinksTxt;
  HL1Txt;
  HL2Txt;
  HL3Txt;
  HL4Txt;
  Primary_Data_SourcesTxt;
  P1Txt;
  P2Txt;
  P3Txt;



  constructor(private service:CoronaDetailsService,private lang:LangService) {
   let selectLang = localStorage.getItem('lang');
   if(selectLang !== null){
     this.common(selectLang);
   }else{
     setTimeout(()=>{
       document.getElementById('selectLang').click();
     },100);
   }
  }

  ngOnInit(): void {
    this.service.coronaDetails().subscribe(result=>{
      if(result.success){
        this.Infections = result.data.local_total_cases;
        this.Deaths = result.data.local_deaths;
        this.Recoveries = result.data.local_recovered;
        this.globalDeaths = result.data.global_deaths;
      }
    });

  }

  selectLang(ev) {
    this.common(ev.target.value);
  }

  common(type){
    switch (type) {
      case "0" :
        localStorage.setItem('lang','0');

        this.headerTxt = this.lang.englishLang()[0].header;
        this.InfectionsTxt = this.lang.englishLang()[0].Infections;
        this.DeathsTxt= this.lang.englishLang()[0].Deaths;
        this.RecoveriesTxt= this.lang.englishLang()[0].Recoveries;
        this.Global_DeathsTxt= this.lang.englishLang()[0].Global_Deaths;
        this.Helpful_LinksTxt= this.lang.englishLang()[0].Helpful_Links;
        this.HL1Txt= this.lang.englishLang()[0].HL1;
        this.HL2Txt= this.lang.englishLang()[0].HL2;
        this.HL3Txt= this.lang.englishLang()[0].HL3;
        this.HL4Txt= this.lang.englishLang()[0].HL4;
        this.Primary_Data_SourcesTxt= this.lang.englishLang()[0].Primary_Data_Sources;
        this.P1Txt= this.lang.englishLang()[0].P1;
        this.P2Txt= this.lang.englishLang()[0].P2;
        this.P3Txt= this.lang.englishLang()[0].P3;
        break;
      case "1":
        localStorage.setItem('lang','1');

        this.headerTxt = this.lang.englishLang()[0].header;
        this.InfectionsTxt = this.lang.englishLang()[0].Infections;
        this.DeathsTxt= this.lang.englishLang()[0].Deaths;
        this.RecoveriesTxt= this.lang.englishLang()[0].Recoveries;
        this.Global_DeathsTxt= this.lang.englishLang()[0].Global_Deaths;
        this.Helpful_LinksTxt= this.lang.englishLang()[0].Helpful_Links;
        this.HL1Txt= this.lang.englishLang()[0].HL1;
        this.HL2Txt= this.lang.englishLang()[0].HL2;
        this.HL3Txt= this.lang.englishLang()[0].HL3;
        this.HL4Txt= this.lang.englishLang()[0].HL4;
        this.Primary_Data_SourcesTxt= this.lang.englishLang()[0].Primary_Data_Sources;
        this.P1Txt= this.lang.englishLang()[0].P1;
        this.P2Txt= this.lang.englishLang()[0].P2;
        this.P3Txt= this.lang.englishLang()[0].P3;

        break;

      case "2":
        localStorage.setItem('lang','2');
        this.headerTxt = this.lang.sinhalaLang()[0].header;
        this.InfectionsTxt = this.lang.sinhalaLang()[0].Infections;
        this.DeathsTxt= this.lang.sinhalaLang()[0].Deaths;
        this.RecoveriesTxt= this.lang.sinhalaLang()[0].Recoveries;
        this.Global_DeathsTxt= this.lang.sinhalaLang()[0].Global_Deaths;
        this.Helpful_LinksTxt= this.lang.sinhalaLang()[0].Helpful_Links;
        this.HL1Txt= this.lang.sinhalaLang()[0].HL1;
        this.HL2Txt= this.lang.sinhalaLang()[0].HL2;
        this.HL3Txt= this.lang.sinhalaLang()[0].HL3;
        this.HL4Txt= this.lang.sinhalaLang()[0].HL4;
        this.Primary_Data_SourcesTxt= this.lang.sinhalaLang()[0].Primary_Data_Sources;
        this.P1Txt= this.lang.sinhalaLang()[0].P1;
        this.P2Txt= this.lang.sinhalaLang()[0].P2;
        this.P3Txt= this.lang.sinhalaLang()[0].P3;
        break;

      case "3":
        localStorage.setItem('lang','3');
        this.headerTxt = this.lang.tamilLang()[0].header;
        this.InfectionsTxt = this.lang.tamilLang()[0].Infections;
        this.DeathsTxt= this.lang.tamilLang()[0].Deaths;
        this.RecoveriesTxt= this.lang.tamilLang()[0].Recoveries;
        this.Global_DeathsTxt= this.lang.tamilLang()[0].Global_Deaths;
        this.Helpful_LinksTxt= this.lang.tamilLang()[0].Helpful_Links;
        this.HL1Txt= this.lang.tamilLang()[0].HL1;
        this.HL2Txt= this.lang.tamilLang()[0].HL2;
        this.HL3Txt= this.lang.tamilLang()[0].HL3;
        this.HL4Txt= this.lang.tamilLang()[0].HL4;
        this.Primary_Data_SourcesTxt= this.lang.tamilLang()[0].Primary_Data_Sources;
        this.P1Txt= this.lang.tamilLang()[0].P1;
        this.P2Txt= this.lang.tamilLang()[0].P2;
        this.P3Txt= this.lang.tamilLang()[0].P3;
        break;
    }
  }

  openSelectLang() {
    document.getElementById('selectLang').click();
  }
}
