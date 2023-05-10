import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() align: 'text-left' | 'text-center' | 'text-right' = 'text-center';

  code!: string;
  showCode: boolean = false;

  options = [
    { label: 'Left', value: 'text-left' },
    { label: 'Center', value: 'text-center' },
    { label: 'Right', value: 'text-right' },
  ];

  onChangeAlign(alignment: string) {
    this.align = alignment as typeof this.align;
    this.updateCode();
  }

  onShowCode() {
    this.showCode = !this.showCode;
  }

  updateCode() {
    this.code = `
    <div class="hero min-h-[30rem] bg-base-200 rounded-box mb-4">
      <div class="hero-content ${this.align}">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>`;
  }

  ngOnInit() {
    this.updateCode();
  }
}
