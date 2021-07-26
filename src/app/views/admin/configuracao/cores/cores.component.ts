import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cores',
  templateUrl: './cores.component.html',
  styleUrls: ['./cores.component.css']
})
export class CoresComponent implements OnInit {

  isLoading = false;

  pedidos = [];
  config = {
    color: null,
    tituloInicio: null,
    titulo: null,
    subtitle: null,
    textos: null,
    iconeSide: null,
    iconeNav: null,

  };

  constructor(
    private afs: AngularFirestore,
  ) { }

  carregar() {
    this.afs.firestore.collection('config').doc('config').get()
    .then((d) => {
      this.config = JSON.parse(JSON.stringify(d.data())) ;
    })
  }

  ngOnInit() {
    // this.afAuth.signInAnonymously().then(() => {
      this.carregar()
    // })
  }

  salvar(){
    this.afs.firestore.collection('config').doc('config').update(this.config)

        setTimeout(() => {
      this.isLoading = false;
    }, 4000);
    
    this.isLoading = true;
  }
}
