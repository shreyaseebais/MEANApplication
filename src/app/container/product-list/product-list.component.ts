import { Component, Input } from '@angular/core';
import { Product } from '../Models/Product';
// import * as data from '../../../assets/data/product-list.json';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {  
  selectedProduct : Product;
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      discountPrice:110,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name:  "Adidas",
      description: "Lorem ipsum ",
      brand: "ADIDAS",
      gender: "WOMEN",
      category: "FOOTBALL",
      price: 190,
      discountPrice:170,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
      slug: "club-c-revenge-mens"
    },
    {
      id: 3,
      name: "Club C Revenge Mens",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: false,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$",
      slug: "sk80-low"
    },
    {
      id: 4,
      name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
      description: "Lorem ipsum ",
      brand: "Vans",
      gender: "MEN",
      category: "FOOTBALL",
      price: 160,
      discountPrice:120,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
      slug: "michael-feburary-sk8-hi"
    },
    {
      id: 5,
      name: "Nike Mercurial Superfly 7 Pro MDS FG",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",
      slug: "sk80-low"
    },
    {
      id: 6,
      name: "Nike Phantom Vision Elite Dynamic Fit FG",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "KIDS",
      category: "FOOTBALL",
      price: 185,
      is_in_inventory: false,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
      slug: "sk80-low"
    },
    {
      id: 7,
      name: "Nike Mercurial Vapor 13 Elite FG",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      price: 700,
      discountPrice:500,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
      slug: "sk80-low"
    },
    {
      id: 8,
      name: "Nike Joyride Run Flyknit",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 500,
      is_in_inventory: false,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
      slug: "sk80-low"
    },
    {
      id: 9,
      name:  "Nike Air Zoom Pegasus 37",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 250,
      discountPrice:210,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
      slug: "sk80-low"
    },
    {
      id: 10,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 11,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 12,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: false,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 13,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 14,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 15,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem ipsum ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      size: [6,7,8,9],
      color: ["White","Blue", "Black"],
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
  ];

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p=> p.is_in_inventory === true).length;
  totalProductOutOfStock = this.products.filter(p=> p.is_in_inventory === false).length;

  //Take this input from parent ContainerComponet and  use search accordingly in the products. 
  @Input() searchText: string = '';
  selectedFilterRadioButton : string= 'all';

  onFilterChanged(value: string){
    console.log('onFilterChanged() called ')
    this.selectedFilterRadioButton = value;
  }
}
