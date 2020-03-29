import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor() { }

  englishLang(){
    return  [
      {
        "header": "Sri Lanka's Statistics",
        "Infections": "Infections",
        "Deaths": "Deaths",
        "Recoveries": "Recoveries",
        "Global_Deaths": "Global Deaths",
        "Helpful_Links": "Helpful Links\n",
        "HL1": "Health Promotion Bureau",
        "HL2": "Quarantine Unit",
        "HL3": "WHO information about the virus",
        "HL4": "WHO South East Asia",
        "Primary_Data_Sources": "Primary Data Sources\n",
        "P1": "Epidemiology Unit",
        "P2": "Health Promotion Bureau",
        "P3": "Department Of Government Information"
      }
    ]
  }

  tamilLang(){
    return  [
      {
        "header": "இலங்கையின் புள்ளிவிவரம்",
        "Infections": "நோய்த்தொற்றுகள்",
        "Deaths": "மரணங்கள்",
        "Recoveries": "மீட்டெடுப்புகள்",
        "Global_Deaths": "உலகளாவிய மரணங்கள்",
        "Helpful_Links": "பயனுள்ள இணைப்புகள்",
        "HL1": "சுகாதார மேம்பாட்டு பணியகம்",
        "HL2": "தனிமைப்படுத்தப்பட்ட பிரிவு",
        "HL3": "வைரஸ் பற்றிய WHO தகவல்",
        "HL4": "WHO தென்கிழக்கு ஆசியா",
        "Primary_Data_Sources": "முதன்மை தரவு மூலங்கள்",
        "P1": "தொற்றுநோயியல் பிரிவு",
        "P2": "சுகாதார மேம்பாட்டு பணியகம்",
        "P3": "அரசு தகவல் துறை"
      }
    ]
  }

  sinhalaLang(){
    return  [
      {
        "header": "ශ්‍රී ලංකාවේ සංඛ්‍යාලේඛන",
        "Infections": "ආසාදන",
        "Deaths": "මරණ",
        "Recoveries": "සුවය ලැබුවන්",
        "Global_Deaths": "ගෝලීය මරණ",
        "Helpful_Links": "ප්රයෝජනවත් සබැඳුම් ",
        "HL1": "සෞඛ්‍ය ප්‍රවර්ධන කාර්යාංශය",
        "HL2": "නිරෝධායන ඒකකය",
        "HL3": "WHO වෛරසය පිළිබඳ තොරතුරු",
        "HL4": "WHO අග්නිදිග ආසියාව",
        "Primary_Data_Sources": "ප්‍රාථමික දත්ත ප්‍රභවයන්",
        "P1": "වසංගත රෝග විද්‍යා ඒකකය",
        "P2": "සෞඛ්‍ය ප්‍රවර්ධන කාර්යාංශය",
        "P3": "රජයේ තොරතුරු දෙපාර්තමේන්තුව"
      }
    ]
  }


}
