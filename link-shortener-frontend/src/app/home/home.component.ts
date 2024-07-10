import { Component, OnInit } from '@angular/core';
import { LinkShortenerService } from '../link-shortener.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string = ''; // Inicializar la propiedad

  constructor(private linkShortenerService: LinkShortenerService) { }

  ngOnInit(): void {
    this.linkShortenerService.getWelcomeMessage().subscribe({
      next: (data: string) => this.message = data,
      error: (err: any) => console.error(err)
    });
  }
}
