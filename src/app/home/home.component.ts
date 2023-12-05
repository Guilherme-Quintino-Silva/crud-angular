import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/products.interface';
import { InsertAnDgetProductsService } from '../services/insert-an-dget-products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public obj: Product = {
    product: '',
    value: null,
    description: ''
  }
  public buttonDisabled: boolean = true;
  public onList!: Observable<any>;
  public sendProductTrue: boolean = false;
  constructor(
    public insertAndGet: InsertAnDgetProductsService
  ) { }

  ngOnInit(): void {
  }
  public dispareFunction() {
    if (this.obj.product !== '' && Number(this.obj.value) > 0 && this.obj.description !== '') {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }
  public sendForm() {
    this.insertAndGet.insertProduct(this.obj).subscribe({
      next: () => {
        console.log('Deu tudo certo com o envio do metodo Post!')
        this.sendProductTrue = true;
        if (this.sendProductTrue) {
          this.obj = {
            product: '',
            value: null,
            description: ''
          }
          setTimeout(() => {
            this.sendProductTrue = false;
          }, 3000);
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
}
