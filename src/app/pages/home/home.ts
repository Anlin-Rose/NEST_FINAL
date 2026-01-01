import { Component } from '@angular/core';
import { Carousal } from "../../components/carousal/carousal";
import { Cards } from '../../components/cards/cards';

@Component({
  selector: 'app-home',
  imports: [Carousal, Cards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}