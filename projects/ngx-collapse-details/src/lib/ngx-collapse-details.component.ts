import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ngx-collapse-details',
  template: `
    <main [ngStyle]="{ width: width }">
      <details>
        <summary
          #asHover
          [ngStyle]="{
            'background-color': bgColor,
            color: color,
            'border-radius': borderRadius,
            border: border,
            'box-shadow': boxShadow
          }"
          (mouseenter)="setHoverBgAndColor($event)"
          (mouseleave)="setHoverBgAndColor($event)"
        >
          {{ summary }}
        </summary>
        <div class="content">
          <ng-content></ng-content>
        </div>
      </details>
    </main>
  `,
  styles: [
    `
      main {
        margin: 0;
      }

      summary {
        padding: 0.9em;
        margin-bottom: 1em;
       /* margin: 0 calc(0.625rem * -1); */
        cursor: pointer;
        outline: none;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        font-size: 1.188rem;
      }

      details[open] summary ~ * {
        animation: open 0.5s ease-in-out;
      }

      details > summary::after {
        content: '+';
      }

      details[open] > summary::after {
        content: '-';
      }

      details > summary::-webkit-details-marker {
        content: '';
      }
      @keyframes open {
        from {
          opacity: 0;
          margin-top: -10px;
        }
        to {
          opacity: 1;
          margin-top: 0;
        }
      }

      .content {
        margin-bottom: 2em;
      }
    `,
  ],
})
export class NgxCollapseDetailsComponent {
  @ViewChild('asHover') asHover!: ElementRef;

  @Input() summary = 'ngx-summary-details';
  @Input() width = '60%';
  @Input() bgColor = '#ff6347';
  @Input() color = '#1c1c1c';
  @Input() bgHover = '#ffa500';
  @Input() colorHover = '#000';
  @Input() borderRadius = '0.3em';
  @Input() border!: string;
  @Input() boxShadow = '0 3px 10px rgb(0 0 0 / 0.2)';

  constructor(private rendered2: Renderer2) {}

  public setHoverBgAndColor(event: MouseEvent): void {
    const asHover = this.asHover.nativeElement;
    if (event.type === 'mouseenter') {
      this.rendered2.setStyle(asHover, 'backgroundColor', this.bgHover);
      this.rendered2.setStyle(asHover, 'color', this.colorHover);

      this.rendered2.setStyle(asHover, 'transition', '500ms linear');
    } else if (event.type === 'mouseleave') {
      this.rendered2.setStyle(asHover, 'backgroundColor', this.bgColor);
      this.rendered2.setStyle(asHover, 'color', this.color);
    }
  }
}
