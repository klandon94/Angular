import { Component, OnInit } from '@angular/core';
import {ListingService} from "../listing.service";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-new-listing',
	templateUrl: './new-listing.component.html',
	styleUrls: ['./new-listing.component.css']
})

export class NewListingComponent implements OnInit {
	private listing;
	private listings;
  private uid;
  private errors;

	constructor(private ls:ListingService,private us:UserService,private router:Router){
		this.listing = {
			title:"",
			description:"",
			price:"",
			location:"",
			img:""
		};
    this.listings = [];
    this.errors = [];
	}

	ngOnInit(){
		if(localStorage.getItem("uid") == "undefined"){
			this.router.navigateByUrl("/");
		}else{
			this.us.findById(localStorage.getItem("uid"),(data)=>{
				this.listings = data.listings;
			});
		}
	}

	create(){
		this.ls.create(this.listing,(data)=>{
			if (data.errors || data.message){
        this.errors.push(data.message);
      }
      else{
        this.listings.push(data);
      }
		});
	}

	onDelete(data){
		let index;

		for(let i=0; i<this.listings.length;i++){
			if(this.listings[i]._id == data._id){
				index = i;
			}
		}

		this.listings.splice(index,1);
	}
}