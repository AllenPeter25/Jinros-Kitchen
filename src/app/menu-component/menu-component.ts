import {AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-menu-component',
  imports: [
    CommonModule
  ],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.less',
  standalone: true
})
export class MenuComponent implements AfterViewInit {

  @ViewChild("zomato")
  zomatoTemplate!: TemplateRef<unknown>

  @ViewChild("swiggy")
  swiggyTemplate!: TemplateRef<unknown>

  platforms: {
    name?: string,
    color?: string,
    svg?: TemplateRef<unknown>,
    url: string
  }[] = [];

  menus = [
    {
      category: "Wraps",
      items: [
        {
          name: "Jinro's Spicy Chicken Wrap",
          description: "Spicy chicken, crunchy veggies, lettuce and our signature sauce.",
          price: 129
        },
        {
          name: "Paneer Fajita Wrap",
          description: "Sauteed paneer, fajita veggies, lettuce and creamy sauce.",
          price: 109
        },
        {
          name: "Cheesy Chicken Wrap",
          description: "Indulge in a warm, soft tortilla filled with succulent chicken and oozing cheese, creating a perfect cheesy delight.",
          price: 135
        }
      ]
    },
    {
      category: "Burgers",
      items: [
        {
          name: "Crispy Chicken Burger",
          description: "Savour the delight of a perfectly golden, crunchy chicken fillet nestled in a soft bun, topped with fresh toppings and creamy sauce.",
          price: 130
        },
        {
          name: "Aloo Tikki Burger",
          description: "Crispy aloo tikki, lettuce, onions and mint mayo.",
          price: 99
        }
      ]
    },
    {
      category: "Snacks And Sides",
      items: [
        {
          name: "Chicken Strips",
          description: "[4 pieces] Crispy chicken strips served with dip.",
          price: 135
        },
        {
          name: "Paneer Popcorn",
          description: "Crispy, golden paneer bites with a kick.",
          price: 95
        }
      ]
    }
  ]

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.platforms = [{
      name: "Zomato",
      color: "#E23744",
      svg: this.zomatoTemplate,
      url: "https://www.zomato.com/bangalore/jinros-kitchen-1-hennur-bangalore/order"
    },
      {
        name: "Swiggy",
        color: "#FC8019",
        svg: this.swiggyTemplate,
        url: 'https://www.swiggy.com/city/bangalore/jinros-kitchen-geddalahalli-rest1383814'
      }]

    this.cdr.detectChanges();
  }
}
