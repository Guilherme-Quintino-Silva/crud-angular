import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/products.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertAnDgetProductsService } from '../services/insert-an-dget-products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public buttonDisabled: boolean = true;
  public id!: string | null;
  public obj: any;
  public onSpinnerBollean: boolean = true;
  constructor(
    public route: ActivatedRoute,
    public insertAndGet: InsertAnDgetProductsService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.insertAndGet.readProduct(this.id).subscribe({
      next: (data: Array<Product>) => {
        this.obj = data;
        setTimeout(() => {
          this.onSpinnerBollean = false;
        }, 1000);
      },
      error: (error) => console.log(error),
      complete: () => console.log('Complete!'),
    })
  }
  public editForm(): void {
    this.insertAndGet.updateProduct(this.id, this.obj).subscribe({
      next: () => console.log('Sucesso!'),
      error: (error) => console.log(error),
      complete: () => 'Sucessfully'
    })
  }
  public exitForm() {
    this.router.navigate(['/list']);
  }

  public dispareFunction() {
    if (this.obj.product !== '' && Number(this.obj.value) > 0 && this.obj.description !== '') {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }
}
