import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString : string[]= ['Ram', 'Shyam', 'Hari', 'Gopal'];

  // COMMUNICATE BETWEEN TWO COMPONENTS :
  // Take the search keyword from one child SearchComponent. 
  // SetSearchText in this parent component. 
  // And then pass it to another child productListComponent
  searchText:string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSearchText(value: string){
    this.searchText = value;
  }
}
