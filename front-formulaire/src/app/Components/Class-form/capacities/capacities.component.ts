import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClassModel } from 'src/app/Models/class.model';
import { SubClassModel } from 'src/app/Models/subClass.model';
import { CapacityService } from 'src/app/Services/capacity.service';
import { ClassService } from 'src/app/Services/class.service';
import { SubClassService } from 'src/app/Services/subClass.service';

@Component({
  selector: 'app-capacities',
  templateUrl: './capacities.component.html',
  styleUrls: ['./capacities.component.scss']
})
export class CapacitiesComponent implements OnInit {
  
  
  public capacitiesForm:FormGroup;
  public classes:ClassModel[]=[];
  public subClasses:SubClassModel[]=[];

  constructor(
    private capacityService:CapacityService,
    private formBuilder:FormBuilder,
    private classService:ClassService,
    private subClassService:SubClassService
    ) { 
  
    this.capacitiesForm=formBuilder.group({
        name:formBuilder.control(''),
        description:formBuilder.control(''),
        class:formBuilder.control(''),
        type:formBuilder.control(''),
        level:formBuilder.control('')

      });



  }

    



  ngOnInit() {
    this.getAllClasses().subscribe((classes)=>{
      classes.forEach((classFound)=>{
        this.classes.push(classFound)
      })
    });
    this.getAllSubClasses().subscribe((subClasses)=>{
      subClasses.forEach((subClassFound)=>{
        this.subClasses.push(subClassFound)
      })
    })
  }

  private getAllClasses():Observable<ClassModel[]>{

    return this.classService.getAllClasses().pipe(
      map((classes:ClassModel[])=>{
        classes.forEach(()=>{
          (this.capacitiesForm.get('classes')as FormArray).controls.push(new FormControl(false))
        });
        return classes
      })
    )
    
  }

  private getAllSubClasses():Observable<SubClassModel[]>{

    return this.subClassService.getAllSubClasses().pipe(
      map((subClasses:SubClassModel[])=>{
        subClasses.forEach(()=>{
          (this.capacitiesForm.get('type')as FormArray).controls.push(new FormControl(false))
        });
        return subClasses
      })
    )
    
  }


  onSubmitForm(){
    
  }

}
