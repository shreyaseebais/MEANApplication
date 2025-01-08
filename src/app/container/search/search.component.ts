import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  // Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // @ViewChild(arg1, arg2)
  // arg1= read(used to read different tokens from queried element) , arg2= static(it determines whe the query is resolved)
  // static: true = if you want to assign the static property immediately 
  // static: false = if you want to assign the static property only after changeDetectionStrategy
  // default value = true
  @ViewChild('searchInput', {static: true}) searchInputEl: ElementRef;

  // updateSearchText(inputEl : HTMLInputElement){
  //   this.searchText = event.target.value;
  //   this.searchText = inputEl.value;
  // }

  updateSearchText(){
      this.searchText = this.searchInputEl.nativeElement.value;
      this.searchTextChanged.emit(this.searchText)
  }
}
