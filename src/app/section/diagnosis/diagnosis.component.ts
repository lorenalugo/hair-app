import { Component, OnInit } from '@angular/core';

import { User } from '../../user';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  constructor( public productService: ProductService ) {}

  ngOnInit() {
  }
  
  step2:boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  submitted: boolean = false;
  end: boolean = false;
  result = [];
//diagnosis options array
  hairTypes = ['Fine/Thin', 'Normal', 'Coarse'];

  hairIs = ['Straight', 'Wavy', 'Curly', 'Kinky'];

  hairConditions = ['natural', 'colored', 'extreme straightened', 'highlights', 'permanent'];

  hairWishes = ['brighteness', 'wavy natural', 'No dandruff', 'natural smoothing no-frizz', 'color protection', 'strong', 'brighteness strong', 'deep hydratation', 'radiant color brighteness'];
  
  model = new User ('', this.hairTypes[0], this.hairIs[0], this.hairConditions[0], this.hairWishes[0]);
//buttons methods
  secondStep() {
    this.step2 = true;
    document.getElementById('step-1').style.display = "none";
  }

  thirdStep() {
    this.step3 = true;
    this.step2 = false;

  }

  fourthStep() {
    this.step4 = true;
    this.step3 = false;

  }

  onSubmit() { 
  	this.submitted = true; 
  	this.step4 = false;
  	this.end = false;
  	let keys = Object.keys(this.productService.products);//gets products object keys [colored, natural, permanent, highlights...]
    let index:any = keys.filter((item => {
        return item == this.model.condition
        }
    ));
    
    //compare the choice with the products object

    for(let x in this.productService.products[index]){
    	if(this.productService.products[index][x].key == this.model.wish){
    		this.result[0]=(this.productService.products[index][x].characteristics);
    		this.result[1]=(this.productService.products[index][x].image);
    		this.end = true;
    	}
    }
    //if it doesn't find a result, look for another match
    while(this.end == false) {
    	for(let x in this.productService.products[index]){
    	if(this.productService.products[index][x].key == "strong" || this.productService.products[index][x].key == "deep hydratation"){
    		this.result[0]=(this.productService.products[index][x].characteristics);
    		this.result[1]=(this.productService.products[index][x].image);
    		this.end = true;
    	}
    }
    }

    
  }
goBack(){
	this.submitted = false;
}
}
