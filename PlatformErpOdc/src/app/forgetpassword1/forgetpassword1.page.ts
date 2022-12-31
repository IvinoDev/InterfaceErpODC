import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ForgetPasswordService } from '../services/ForgetPass/forget-password.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword1',
  templateUrl: './forgetpassword1.page.html',
  styleUrls: ['./forgetpassword1.page.scss'],
})
export class Forgetpassword1Page implements OnInit {

  email:any;
  error:Boolean;
  erreur:String;
  constructor(private emailService:ForgetPasswordService,private router:Router) { }

  ngOnInit() {
  }

  sendMail(){
    this.error=false;
    this.emailService.SendEmail(this.email).subscribe(retour=>{
      console.log(retour)
      if(retour.message=='ok'){
        this.presentAlert();
      }else if(retour.message=="errorUser"){
        this.error=true;
        this.erreur=retour.data


      }else{
        this.error=true;
        this.erreur="Erreur du serveur !"
      }
    })
  }

  async presentAlert() {
    Swal.fire({
      title:'Email envoyé !',
      text:'Veuillez verifiez votre boite de reception !!',
      icon:'success',
      heightAuto: false,
      confirmButtonColor:"#FF7900"
    })
  }

}
