import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {

  private technos:any = [];

  constructor() { }

  createTechno(techno :any) {
    const newTechno :any = {id: Date.now(), ...techno};
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos);
  }

  getTechnos() {
    return this.technos;
  }

  deleteTechno(techno :any) {
    this.technos = this.technos.filter(t => t.id !== techno.id)
  }

}
