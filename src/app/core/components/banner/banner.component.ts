import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
 
  bannerTitle = 'Freelancer';
  bannerDetails = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga non, ut assumenda quia et enim asperiores molestias quod quis beatae perspiciatis. Enim, obcaecati. Sequi, natus. Tenetur, minima dignissimos incidunt odit obcaecati aliquid facere ad unde nulla molestiae qui sint repellendus explicabo. Animi quibusdam facilis accusamus, inventore debitis porro! Quod!';

}
