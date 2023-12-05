import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../interface/products.interface';
import { InsertAnDgetProductsService } from '../services/insert-an-dget-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public list: Array<Product> = [];
  constructor(
    public insertAndGet: InsertAnDgetProductsService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.insertAndGet.getProduct().subscribe({
      next: (data: Array<Product>) => this.list = data,
      error: (error) => console.log(error),
      complete: () => console.log('Complete!'),
    })
  }

  public remove(i: number): void {
    this.insertAndGet.delProduct(i).subscribe({
      next: () => {
        console.log('Deletado com sucesso');
        this.list = this.list.filter((item) => item.id != i);
      },
      error: (error) => console.log(error),
      complete: () => console.log('Complete!'),
    })
  }
  public edit(i: number): void {
    this.router.navigateByUrl(`/edit/${i}`);
  }
}
