import { Component, OnInit, OnDestroy } from '@angular/core'
import { Person, SearchService } from '../shared'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string
  searchResults: Array<Person>
  sub: Subscription

  @Output()
  public onSelection: EventEmitter<ComboBoxNodeControl> = new EventEmitter<ComboBoxNodeControl>();

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    @Inject(forwardRef(() => ComboBoxControl) private _comboBox: ComboBoxControl)
  ) {}

  ngOnInit(): void {
    let test: number = 1;
    console.log(test);
    // this does something
    this.sub = this.route.params.subscribe(params => {
      if (params['term']) {
        this.query = decodeURIComponent(params['term'])
        this.search(1, null)
      }
    })
  }

  /**
   * Comment
   * @param param1
   * @param param2
   */
  search(param1: number, param2: Test): void {
    this.searchService.search(this.query).subscribe(
      (data: any) => {
        this.searchResults = data
        console.dir(param1);
      },
      error => console.log(error)
    )
  }

  public ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
    let actionBarRect = (this._actionBar.nativeElement as HTMLElement).getBoundingClientRect();
    let closeButtonRect = (<HTMLElement>this._closeButton.nativeElement).getBoundingClientRect();

    console.log(actionBarRect);
  }

}


const html = String.raw;

const doSomething = () => html`
  <div on-click="${(e) => console.log(e)}"></div>
`

interface Test {
  param: string;
}
