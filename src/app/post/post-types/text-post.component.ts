import { Component, Input } from '@angular/core';

import { TextPost } from '../post';

@Component({
    selector: 'text-post',
    template: `
      <div class="card-body">
        <h3 *ngIf="content.title" class="card-title">
          {{content.title}}
        </h3>
        {{content.body}}
      </div>`
})

export class TextPostComponent {
    @Input() content: TextPost;
}
