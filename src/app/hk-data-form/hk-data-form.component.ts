import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class ButtonDef {
  class: string;
  id: string;
  type: string;
  text: string;
}

export class CustomButtonState {
  formState: FormGroup;
  valid: boolean;
  eventBag: any;
  buttonId: string;
}

@Component({
  selector: 'app-hk-data-form',
  templateUrl: './hk-data-form.component.html',
  styleUrls: ['./hk-data-form.component.css']
})
export class HkDataFormComponent implements OnInit, OnChanges {
  form = new FormGroup({});

  @Input() Title = 'Data Form';
  @Input() dynamicButtons: Array<ButtonDef> = [];
  @Input() fieldsConfig: Array<{rowCaption: string, fields: Array<any>}> = [];
  @Input() detailObj: any;
  @Output() doCustomButtomClick: EventEmitter<CustomButtonState> = new EventEmitter<CustomButtonState>();
  @Output() doSubmitAction: EventEmitter<CustomButtonState> = new EventEmitter<CustomButtonState>();

  constructor() {
  }

  ngOnInit() {

    this.fieldsConfig.forEach(element => {
      element.fields.forEach(field => {
        const c = new FormControl(field.fieldName, field.fieldValidators);
        c.setValue(this.detailObj[field.fieldName]);
        this.form.addControl(field.fieldName, c);
      });
    });

  }

  ngOnChanges() {
  }

  onSubmit({ value, valid }, event, buttonId) {
    const ret = new CustomButtonState();
    ret.buttonId = buttonId;
    ret.eventBag = event;
    ret.formState = this.form;
    ret.valid = valid;
    this.doCustomButtomClick.emit(ret);
  }

  doCustomButtonClick({ value, valid }, event, buttonId) {
    const ret = new CustomButtonState();
    ret.buttonId = buttonId;
    ret.eventBag = event;
    ret.formState = this.form;
    ret.valid = valid;
    this.doCustomButtomClick.emit(ret);
  }

}
