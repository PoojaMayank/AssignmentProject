import {Component} from '@angular/core';
import {ApiService} from './api.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
 

  spinner:boolean=false;
  loaded:boolean=true;
  tableloaded:boolean=true;
  tablespinner:boolean=false;
  
  dataSource=[];
  displayedColumns: string[] = ['full_name', 'language'];
  hidden:boolean=false;;
  UserData:any=[];
  
  flag:boolean=false;
  
  sort:string;

  value:string='-';

  Total:any;
  constructor(private service:ApiService){}
  

  onSearch(search){
    this.spinner=true;
    this.loaded=true;
    this.service.getUser(search).subscribe(data=>{
        this.setTable(data);
      });
  }

  Details(username){
    this.tablespinner=true;
    this.tableloaded=true;
    this.service.userDetails(username).subscribe(data=>{
     
      this.UserData=data;
      
      this.tableloaded=false;
      this.tablespinner=false;
      
    });
  }

  setTable(data){
    if(this.flag){
      this.Total=data.total_count;
      this.onSelectionChange(this.sort,data.items);
      this.spinner=false;
      this.loaded=false;  
    }
    else{
      this.Total=data.total_count;
      this.dataSource=data.items;
      this.spinner=false;
      this.loaded=false;  
    }
  }
 

  onSelectionChange(sort:string,data){
    this.loaded=true;
    this.spinner=true;
    this.sort=sort;
    this.flag=true;
    if(data.length!=0){
      if(sort.toUpperCase()==='ASC'){
        this.dataSource=data.sort(function(a, b){
          var nameA=a.login.toLowerCase(), nameB=b.login.toLowerCase()
          if (nameA < nameB) 
              return -1 
          if (nameA > nameB)
              return 1
          return 0 
      });
      this.loaded=false;
      this.spinner=false;
    }
    else if(sort.toUpperCase()==='DSC'){
      this.dataSource=data.sort(function(a, b){
        var nameA=a.login.toLowerCase(), nameB=b.login.toLowerCase()
        if (nameA > nameB) 
            return -1 
        if (nameA < nameB)
            return 1
        return 0 
     });
     this.loaded=false;
     this.spinner=false;
    }
    else if(sort.toUpperCase()==='RANK_ASC'){
      this.dataSource=this.service.sortBy(data,'score', ['asc'])
      this.loaded=false;
      this.spinner=false;
    }
    else{
      this.dataSource=this.service.sortBy(data,'score', ['desc'])
      this.loaded=false;
      this.spinner=false;
    }
      
  }
  else{
    this.spinner=false;
    this.loaded=true;
    }
  }
}
