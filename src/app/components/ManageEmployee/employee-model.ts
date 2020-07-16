import {DemandeConge} from '../demandeCongé/demande-model';

export class Employee {
   code:any;
   matricule:string;
   nom:string;
   prenom:string;
   cin:any;
   dateEntree:any;
   nbrEnfants:number;
   dateNaiss:any;
   email:string;
   numTel:any;
   situationFamiliale:string;
   soldeConge:any;
   droitAnnuel:any;
   bulletinPaie:string;
   sexe:string;
   diplome:Diplome;
   address:Adresse;
   demandeConge:DemandeConge;
   fonction:Fonction;
   service:Service;
  comment:string;

}
export class Adresse {
  postalCode: string;
  country: string;
  city: string;
  principalAdress: string;


}
export class Diplome{
   libelle:string;
   typeDiplome:string;
}

export class Fonction{
   nom:string;
}
export class Service{
  libelle:string
}
