import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteService } from '../services/activite/activite.service';
import { ForgetPasswordService } from '../services/ForgetPass/forget-password.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(private activiteservice:ActiviteService,private emailService:ForgetPasswordService, private route:ActivatedRoute,private router:Router) { }
  email:any
  password:any
  password2:any
  code:any

  error:Boolean;
  erreur:String;

  ngOnInit() {

    this.code=this.route.snapshot.params['code']
    console.log(this.code);
  }


  ChangePass(){
    this.error=false
    if(this.password==this.password2){
      if(this.password.length <= 8){
        this.error=true;
        this.erreur="mot de passe trop court"
      
      }
      else{

      this.emailService.ChangePass(this.email, this.password,this.code).subscribe(retour=>{
        if(retour.message=='ok'){
          this.presentAlert();
        }else{
          this.error=true;
          this.erreur=retour.data;
        }
      
      })
    }
  }else{
      this.error=true;
      this.erreur="Mots de passe différents !"
    }

  }


  async presentAlert() {
    Swal.fire({
      title:'Mot de passe changé !',
      text:'Votre mot de passe a été changé avec succès !',
      icon:'success',
      heightAuto: false,
      confirmButtonColor:"#FF7900"
    }).then(()=>{
      this.router.navigate(["/login"]);
    });
  }

  

}
