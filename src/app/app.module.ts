import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { FormsModule } from '@angular/forms';
import { Ngcomponent } from './component/NGFOR/product.component';
import { NglistComponent } from './component/nglist/nglist.component';
import { NgTableComponent } from './component/ng-table/ng-table.component';
import { NgCardComponent } from './component/ng-card/ng-card.component';
import { TabComponentComponent } from './component/tab-component/tab-component.component';
import { LikeCompComponent } from './component/like-comp/like-comp.component';
import { SkillsComponent } from './component/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Ngcomponent,
    NglistComponent,
    NgTableComponent,
    NgCardComponent,
    TabComponentComponent,
    LikeCompComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
