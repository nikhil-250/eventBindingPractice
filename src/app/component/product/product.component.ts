import { Component, OnInit } from "@angular/core";





@Component({
    // selector:`app-product`,
    // selector:`[app-product]`,
    selector:`.app-product`,
    templateUrl:`product.component.html`,
    styleUrls:[`./product.component.scss`],
})
export class ProductComponent implements OnInit{
    isDisabled:boolean = true;
    cartProductStatus:string = `No product is added to the cart`;
    cardProductNumber:number = 0
    searchValue = ``
    searchValue2 = ``
    ngOnInit(): void {
        setTimeout(() => {
            this.isDisabled = false
        }, 1000);
    }
    onAdd(){
        this.cardProductNumber++;
        this.cartProductStatus=`${this.cardProductNumber} is added to the cart`
    }
    onRemove(){
        this.cardProductNumber--
       if(this.cardProductNumber === 0){
        this.cartProductStatus = `No item is added in the cart`
       }else{
        this.cartProductStatus=`${this.cardProductNumber} is added to the cart`
       }
    }
    onSerach(eve:Event){
         this.searchValue = (eve.target as HTMLInputElement).value
    }
}   