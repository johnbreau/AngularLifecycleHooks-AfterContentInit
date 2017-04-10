webpackJsonp([0,3],{

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teams_routing__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_list_team_list_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_edit_team_edit_component__ = __webpack_require__(685);
/* harmony export (binding) */ __webpack_require__.d(exports, "TeamsModule", function() { return TeamsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TeamsModule = (function () {
    function TeamsModule() {
    }
    TeamsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__team_list_team_list_component__["a" /* TeamListComponent */], __WEBPACK_IMPORTED_MODULE_6__team_edit_team_edit_component__["a" /* TeamEditComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_4__teams_routing__["a" /* TeamsRoutingModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamsModule);
    return TeamsModule;
}());


/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_restapi_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TeamListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamListComponent = (function () {
    function TeamListComponent(apiService) {
        this.apiService = apiService;
    }
    TeamListComponent.prototype.ngOnInit = function () {
        this.listOfTeams = this.apiService.getListOfTeams();
    };
    TeamListComponent.prototype.selectTeam = function (selectedTeam) {
        this.selectedTeam = selectedTeam;
    };
    TeamListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-team-list',
            template: __webpack_require__(690),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_restapi_service__["a" /* RestApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_restapi_service__["a" /* RestApiService */]) === 'function' && _a) || Object])
    ], TeamListComponent);
    return TeamListComponent;
    var _a;
}());


/***/ },

/***/ 685:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_teams_team__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_fields_form_fields_service__ = __webpack_require__(364);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TeamEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamEditComponent = (function () {
    function TeamEditComponent(formFieldsService) {
        this.formFieldsService = formFieldsService;
    }
    TeamEditComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.selectedTeam) {
            this.formFields = this.formFieldsService.getFieldsForForm();
            if (this.formFields && this.selectedTeam) {
                var controls_1 = {};
                this.formFields.forEach(function (field) {
                    controls_1[field.key] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](_this.selectedTeam[field.key]);
                });
                this.teamEditForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](controls_1);
            }
            else {
                this.teamEditForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({});
            }
        }
        else {
            this.teamEditForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({});
        }
    };
    TeamEditComponent.prototype.saveTeam = function () {
        // Save to the bound team so the table updates
        this.selectedTeam.teamName = this.teamEditForm.value.teamName;
        this.selectedTeam.numberOfWins = this.teamEditForm.value.numberOfWins;
        this.selectedTeam.numberOfLosses = this.teamEditForm.value.numberOfLosses;
        this.selectedTeam = null;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_teams_team__["a" /* Team */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_teams_team__["a" /* Team */]) === 'function' && _a) || Object)
    ], TeamEditComponent.prototype, "selectedTeam", void 0);
    TeamEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
            selector: 'app-team-edit',
            template: __webpack_require__(689),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_forms_fields_form_fields_service__["a" /* FormFieldsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_forms_fields_form_fields_service__["a" /* FormFieldsService */]) === 'function' && _b) || Object])
    ], TeamEditComponent);
    return TeamEditComponent;
    var _a, _b;
}());


/***/ },

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_list_team_list_component__ = __webpack_require__(684);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TeamsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__team_list_team_list_component__["a" /* TeamListComponent */]
    },
];
var TeamsRoutingModule = (function () {
    function TeamsRoutingModule() {
    }
    TeamsRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamsRoutingModule);
    return TeamsRoutingModule;
}());


/***/ },

/***/ 687:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 688:
/***/ function(module, exports) {

module.exports = ".table-striped thead tr {\n    background: #232;\n    color: #FFF;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n    background: #006BB6;\n    color: #FFF;\n}\n\n.table-striped tbody tr:nth-of-type(odd):hover {\n    background: #0069EE;\n}\n\n.table-striped tbody tr {\n    cursor: pointer;\n}\n\n.table-striped tbody tr:nth-of-type(odd) a {\n    color: #FFF;\n}\n\n.table-striped tbody tr:nth-of-type(even) a {\n    color: #006BB6;\n}"

/***/ },

/***/ 689:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"teamEditForm\" *ngIf=\"selectedTeam\">\n  <h2>Edit Team</h2>\n  <div class=\"form-group\" *ngFor=\"let field of formFields\">\n    <label [for]=\"field.key\">Team Name</label>    \n    \n    <div [ngSwitch]=\"field.fieldType\">\n        <input *ngSwitchCase=\"0\" [type]=\"field.textTypeName\" class=\"form-control\" [formControlName]=\"field.key\" [name]=\"field.key\" [id]=\"field.key\" [placeholder]=\"field.placeholder\" />\n\n        <select *ngSwitchCase=\"1\">\n        </select>\n    </div>\n  </div>\n  <!--<div class=\"form-group\">\n    <label for=\"wins\">Wins</label>\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"selectedTeam.numberOfWins\" name=\"wins\" id=\"wins\" placeholder=\"Enter number of wins\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"losses\">Losses</label>\n    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"selectedTeam.numberOfLosses\" name=\"losses\" id=\"losses\" placeholder=\"Enter number of losses\" />\n  </div>-->\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveTeam()\">Submit</button>\n</form>"

/***/ },

/***/ 690:
/***/ function(module, exports) {

module.exports = "<h2>Teams</h2>\n\n<table class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th>Team Name</th>\n      <th>Wins</th>\n      <th>Losses</th>\n      <th>Winning %</th>\n      <th>Games Behind</th>\n      <th>&nbsp;</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let team of listOfTeams\">\n      <td>{{team.teamName}}</td>\n      <td>{{team.numberOfWins}}</td>\n      <td>{{team.numberOfLosses}}</td>\n      <td>{{team.winPercentage}}</td>\n      <td>{{team.gamesBehind}}</td>\n      <td>\n        <a (click)=\"selectTeam(team)\">\n          <i class=\"fa fa-edit\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<app-team-edit [selectedTeam]=\"selectedTeam\"></app-team-edit>"

/***/ }

});
//# sourceMappingURL=0.bundle.map