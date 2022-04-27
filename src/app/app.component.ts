import {Component, OnInit} from '@angular/core';
import {ismenetlevel} from "./ismenetlevel";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IsmenetlevelService} from "./ismenetlevel.service";
import {NgForm} from "@angular/forms";
import {Isauto} from "./isauto";
import {IsautoService} from "./isauto.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public ismenetlevelek: ismenetlevel[];
  public editMenetlevel: ismenetlevel;
  public deleteMenetlevel?: ismenetlevel;
  public editMenetlevelAr: ismenetlevel;
  public osszar?: any;

  public isautok: Isauto[];


  constructor(private IsmenetlevelService: IsmenetlevelService, private IsautoService: IsautoService) {
  }

  ngOnInit() {
    this.getISmenetlevelek();
    this.getAutos();
  }

  public getAutos(): void {
    this.IsautoService.getAutos().subscribe(
      (response: Isauto[]) => {
        this.isautok = response;
        console.log(this.isautok);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getISmenetlevelek(): void {
    this.IsmenetlevelService.getISmenetlevelek().subscribe(
      (response: ismenetlevel[]) => {
        this.ismenetlevelek = response;
        console.log(this.ismenetlevelek);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onISmenetlevel(addForm: NgForm): void {
    document.getElementById('add-menetlevel-form')?.click();
    this.IsmenetlevelService.addISmenetlevel(addForm.value).subscribe(
      (response: ismenetlevel) => {
        console.log(response);
        this.getISmenetlevelek();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateISmenetlevel(ismenetlevelek: ismenetlevel): void {
    this.IsmenetlevelService.updateISmenetlevel(ismenetlevelek)?.subscribe(
      (response: ismenetlevel) => {
        console.log(response);
        this.getISmenetlevelek();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateISmenetlevelAr(sorszam: number): void {
    this.IsmenetlevelService.updateISmenetlevelAr(sorszam)?.subscribe(
      (response: ismenetlevel) => {
        console.log(response);
        this.getISmenetlevelek();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUpdateisautoAr(id: number): void {
    this.IsautoService.updateISautoAr(id)?.subscribe(
      (response: Isauto) => {
        console.log(response);
        this.getAutos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onUpdateisautoKm(id: number): void {
    this.IsautoService.updateISautoKm(id)?.subscribe(
      (response: Isauto) => {
        console.log(response);
        this.getAutos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllAr(sorszam: number): number {
    this.osszar = this.IsmenetlevelService.getAllAr(sorszam)?.subscribe(
      (response: ismenetlevel) => {
        console.log(response);
        this.getISmenetlevelek();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    return this.osszar;
  }

  public onDeleteISmenetlevel(sorszam: number): void {
    this.IsmenetlevelService.deleteISmenetlevel(sorszam).subscribe(
      (response: void) => {
        console.log(response);
        this.getISmenetlevelek();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(ismenetlevelek: ismenetlevel, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editMenetlevel = ismenetlevelek;
      button.setAttribute('data-target', '#updatemenetlevelModal');
    }
    if (mode === 'delete') {
      this.deleteMenetlevel = ismenetlevelek;
      button.setAttribute('data-target', '#deletemenetlevelModal');
    }
    if (mode === 'updatear') {
      this.editMenetlevelAr = ismenetlevelek;
      button.setAttribute('data-target', '#updatemenetlevelarModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onOpenModal2(ismenetlevelek: ismenetlevel | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addmenetlevelModal');
    }
    container?.appendChild(button);
    button.click();
  }

  /*public onOpenModal3(isautok: Isauto, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'getosszkm') {
      button.setAttribute('data-target', '#osszarModal');
    }
  }*/
}
