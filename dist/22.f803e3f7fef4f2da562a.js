(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{jlNZ:function(e,t,b){"use strict";b.r(t);var a=b("Valr"),i=b("oW1M"),o=b("89/Q"),n=b("QJY3"),c=b("X2FZ"),r=b("R/Hu"),l=b("DUip"),d=b("cclQ"),s=b("xJfa"),u=b("TYT/");function V(e,t){if(1&e){var b=u.Wb();u.Vb(0,"div",48),u.Vb(1,"h6",49),u.Hc(2," Consumed API "),u.Ub(),u.Vb(3,"button",50),u.dc("click",(function(e){return u.yc(b),u.hc().closeModal()})),u.Vb(4,"span",51),u.Hc(5," \xd7 "),u.Ub(),u.Ub(),u.Ub(),u.Vb(6,"div",52),u.Vb(7,"form"),u.Vb(8,"div",53),u.Vb(9,"label",54),u.Hc(10,"URL"),u.Ub(),u.Qb(11,"input",55),u.Ub(),u.Vb(12,"div",53),u.Vb(13,"label",54),u.Hc(14,"Version"),u.Ub(),u.Qb(15,"input",56),u.Ub(),u.Ub(),u.Ub(),u.Vb(16,"div",57),u.Vb(17,"button",58),u.dc("click",(function(e){return u.yc(b),u.hc().closeModal()})),u.Hc(18," Close "),u.Ub(),u.Ub()}}function U(e,t){if(1&e){var b=u.Wb();u.Vb(0,"div",48),u.Vb(1,"h6",49),u.Hc(2," New Released API "),u.Ub(),u.Vb(3,"button",50),u.dc("click",(function(e){return u.yc(b),u.hc().closeModal()})),u.Vb(4,"span",51),u.Hc(5," \xd7 "),u.Ub(),u.Ub(),u.Ub(),u.Vb(6,"div",52),u.Vb(7,"form"),u.Vb(8,"div",53),u.Vb(9,"label",54),u.Hc(10,"URL"),u.Ub(),u.Qb(11,"input",55),u.Ub(),u.Vb(12,"div",53),u.Vb(13,"label",54),u.Hc(14,"Version"),u.Ub(),u.Qb(15,"input",56),u.Ub(),u.Ub(),u.Ub(),u.Vb(16,"div",57),u.Vb(17,"button",58),u.dc("click",(function(e){return u.yc(b),u.hc().closeModal()})),u.Hc(18," Close "),u.Ub(),u.Ub()}}function v(e,t){if(1&e){var b=u.Wb();u.Vb(0,"div",33),u.Vb(1,"h6",34),u.Hc(2," Make Payment "),u.Ub(),u.Vb(3,"button",35),u.dc("click",(function(e){return u.yc(b),u.hc().closeModal()})),u.Vb(4,"span",36),u.Hc(5," \xd7 "),u.Ub(),u.Ub(),u.Ub(),u.Vb(6,"div",37),u.Vb(7,"form"),u.Vb(8,"div",38),u.Vb(9,"label",39),u.Hc(10,"Total"),u.Ub(),u.Qb(11,"input",40),u.Ub(),u.Ub(),u.Ub(),u.Vb(12,"div",41),u.Vb(13,"button",42),u.dc("click",(function(e){return u.yc(b),u.hc().closeModal()})),u.Hc(14," Make payment "),u.Ub(),u.Vb(15,"button",43),u.dc("click",(function(e){return u.yc(b),u.hc().closeModal()})),u.Hc(16," Close "),u.Ub(),u.Ub()}}function m(e,t){if(1&e){var b=u.Wb();u.Vb(0,"div",31),u.Vb(1,"h6",32),u.Hc(2," Generated Token "),u.Ub(),u.Vb(3,"button",33),u.dc("click",(function(e){return u.yc(b),u.hc().closeModal()})),u.Vb(4,"span",34),u.Hc(5," \xd7 "),u.Ub(),u.Ub(),u.Ub(),u.Vb(6,"div",35),u.Vb(7,"form"),u.Vb(8,"div",25),u.Vb(9,"label",26),u.Hc(10,"Access Token"),u.Ub(),u.Qb(11,"input",36),u.Ub(),u.Vb(12,"div",25),u.Vb(13,"label",26),u.Hc(14,"Refresh Token"),u.Ub(),u.Qb(15,"input",37),u.Ub(),u.Ub(),u.Ub(),u.Vb(16,"div",38),u.Vb(17,"button",39),u.dc("click",(function(e){return u.yc(b),u.hc().closeModal()})),u.Hc(18," Close "),u.Ub(),u.Ub()}}var p=[{path:"",children:[{path:"dashboard",component:function(){function e(e,t){this.zone=e,this.modalService=t,this.clicked=!0,this.clicked1=!1,this.modalConfig={keyboard:!0,class:"modal-dialog-centered"}}return e.prototype.ngOnInit=function(){this.getCharts()},e.prototype.ngOnDestroy=function(){var e=this;this.zone.runOutsideAngular((function(){e.chart&&(console.log("Chart disposed"),e.chart.dispose()),e.chart1&&(console.log("Chart disposed"),e.chart1.dispose())}))},e.prototype.getCharts=function(){var e=this;this.zone.runOutsideAngular((function(){e.getChart(),e.getChart1()}))},e.prototype.getChart=function(){var e=d.h("chartuserdash",s.m);e.hiddenState.properties.opacity=0,e.data=[{category:"Mon",value1:1,value2:5,value3:3},{category:"Tue",value1:2,value2:5,value3:3},{category:"Wed",value1:3,value2:5,value3:4},{category:"Thu",value1:4,value2:5,value3:6},{category:"Fri",value1:3,value2:5,value3:4},{category:"Sat",value1:2,value2:13,value3:1},{category:"Sun",value1:2,value2:13,value3:1}],e.colors.step=2,e.padding(30,30,10,30),e.legend=new s.g;var t=e.xAxes.push(new s.b);t.dataFields.category="category",t.renderer.grid.template.location=0;var b=e.yAxes.push(new s.l);b.min=0,b.max=100,b.strictMinMax=!0,b.calculateTotals=!0,b.renderer.minWidth=50;var a=e.series.push(new s.d);a.columns.template.width=d.k(80),a.columns.template.tooltipText="{name}: {valueY.totalPercent.formatNumber('#.00')}%",a.name="Alert",a.dataFields.categoryX="category",a.dataFields.valueY="value1",a.dataFields.valueYShow="totalPercent",a.dataItems.template.locations.categoryX=.5,a.stacked=!0,a.tooltip.pointerOrientation="vertical";var i=a.bullets.push(new s.f);i.interactionsEnabled=!1,i.label.text="{valueY.totalPercent.formatNumber('#.00')}%",i.label.fill=d.g("#ffffff"),i.locationY=.5;var o=e.series.push(new s.d);o.columns.template.width=d.k(80),o.columns.template.tooltipText="{name}: {valueY.totalPercent.formatNumber('#.00')}%",o.name="Financial",o.dataFields.categoryX="category",o.dataFields.valueY="value2",o.dataFields.valueYShow="totalPercent",o.dataItems.template.locations.categoryX=.5,o.stacked=!0,o.tooltip.pointerOrientation="vertical";var n=o.bullets.push(new s.f);n.interactionsEnabled=!1,n.label.text="{valueY.totalPercent.formatNumber('#.00')}%",n.locationY=.5,n.label.fill=d.g("#ffffff");var c=e.series.push(new s.d);c.columns.template.width=d.k(80),c.columns.template.tooltipText="{name}: {valueY.totalPercent.formatNumber('#.00')}%",c.name="Management",c.dataFields.categoryX="category",c.dataFields.valueY="value3",c.dataFields.valueYShow="totalPercent",c.dataItems.template.locations.categoryX=.5,c.stacked=!0,c.tooltip.pointerOrientation="vertical";var r=c.bullets.push(new s.f);r.interactionsEnabled=!1,r.label.text="{valueY.totalPercent.formatNumber('#.00')}%",r.locationY=.5,r.label.fill=d.g("#ffffff"),e.scrollbarX=new d.e},e.prototype.getChart1=function(){for(var e=d.h("chartuserdash1",s.m),t=[],b=50,a=0;a<300;a++){var i=new Date;i.setHours(0,0,0,0),i.setDate(a),b-=Math.round((Math.random()<.5?1:-1)*Math.random()*10),t.push({date:i,value:b})}e.data=t;var o=e.xAxes.push(new s.e);o.renderer.minGridDistance=60,e.yAxes.push(new s.l);var n=e.series.push(new s.h);n.dataFields.valueY="value",n.dataFields.dateX="date",n.tooltipText="{value}",n.tooltip.pointerOrientation="vertical",e.cursor=new s.o,e.cursor.snapToSeries=n,e.cursor.xAxis=o,e.scrollbarX=new d.e},e.prototype.openModal=function(e){this.modal=this.modalService.show(e,this.modalConfig)},e.prototype.closeModal=function(){this.modal.hide()},e.\u0275fac=function(t){return new(t||e)(u.Pb(u.z),u.Pb(i.f))},e.\u0275cmp=u.Jb({type:e,selectors:[["app-dashboard"]],decls:178,vars:0,consts:[[1,"header","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-dark","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-home","text-dark"],[1,"row"],[1,"col-xl-4","col-md-12"],[1,"card","card-stats"],[1,"card-body"],[1,"col"],[1,"card-title","text-uppercase","text-muted","mb-0"],[1,"h2","font-weight-bold","mb-0"],[1,"col-auto"],[1,"icon","icon-shape","bg-gradient-red","text-white","rounded-circle","shadow"],[1,"ni","ni-active-40"],[1,"icon","icon-shape","bg-gradient-orange","text-white","rounded-circle","shadow"],[1,"ni","ni-chart-pie-35"],[1,"icon","icon-shape","bg-gradient-info","text-white","rounded-circle","shadow"],[1,"ni","ni-chart-bar-32"],[1,"container-fluid","mt--6"],[1,"col-xl-7"],[1,"card"],[1,"card-header"],[1,"row","align-items-center"],[1,"m-0"],[1,"chart"],["id","chartuserdash",1,"amchart"],[1,"col-xl-5"],["id","chartuserdash1",1,"amchart"],[1,"card-body","p-0"],["data-toggle","checklist",1,"list-group","list-group-flush"],[1,"checklist-entry","list-group-item","flex-column","align-items-start","py-4","px-4"],[1,"checklist-item","checklist-item-success"],[1,"checklist-info"],[1,"checklist-title","mb-0"],[1,"badge","badge-default"],[1,"btn","btn-sm","btn-default",3,"click"],[1,"checklist-item","checklist-item-warning"],[1,"checklist-item","checklist-item-info"],[1,"checklist-item","checklist-item-danger"],["viewConsumed",""],["viewReleased",""],[1,"modal-header","bg-default"],["id","modal-title-default",1,"modal-title","text-white","my-auto"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true",1,"text-white","my-auto"],[1,"modal-body"],[1,"form-group"],[1,"form-control-label"],["value","/exchange-rate/currency-code/year/","type","text","disabled","",1,"form-control"],["value","1.0.2","type","text","disabled","",1,"form-control"],[1,"modal-footer","mt--3"],["data-dismiss","modal","type","button",1,"btn","btn-outline-danger","ml-auto",3,"click"]],template:function(e,t){if(1&e){var b=u.Wb();u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"div",2),u.Vb(3,"div",3),u.Vb(4,"div",4),u.Vb(5,"h6",5),u.Hc(6,"Dashboard"),u.Ub(),u.Vb(7,"nav",6),u.Vb(8,"ol",7),u.Vb(9,"li",8),u.Vb(10,"a",9),u.Qb(11,"i",10),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(12,"div",11),u.Vb(13,"div",12),u.Vb(14,"div",13),u.Vb(15,"div",14),u.Vb(16,"div",11),u.Vb(17,"div",15),u.Vb(18,"h5",16),u.Hc(19," Total traffic "),u.Ub(),u.Vb(20,"span",17),u.Hc(21," 350,897 "),u.Ub(),u.Ub(),u.Vb(22,"div",18),u.Vb(23,"div",19),u.Qb(24,"i",20),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(25,"div",12),u.Vb(26,"div",13),u.Vb(27,"div",14),u.Vb(28,"div",11),u.Vb(29,"div",15),u.Vb(30,"h5",16),u.Hc(31," Accessible API "),u.Ub(),u.Vb(32,"span",17),u.Hc(33," 356 "),u.Ub(),u.Ub(),u.Vb(34,"div",18),u.Vb(35,"div",21),u.Qb(36,"i",22),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(37,"div",12),u.Vb(38,"div",13),u.Vb(39,"div",14),u.Vb(40,"div",11),u.Vb(41,"div",15),u.Vb(42,"h5",16),u.Hc(43," Consumed API "),u.Ub(),u.Vb(44,"span",17),u.Hc(45," 65 "),u.Ub(),u.Ub(),u.Vb(46,"div",18),u.Vb(47,"div",23),u.Qb(48,"i",24),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(49,"div",25),u.Vb(50,"div",11),u.Vb(51,"div",26),u.Vb(52,"div",27),u.Vb(53,"div",28),u.Vb(54,"div",29),u.Vb(55,"div",15),u.Vb(56,"h3",30),u.Hc(57,"API Call Daily Analysis"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(58,"div",14),u.Vb(59,"div",31),u.Qb(60,"div",32),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(61,"div",33),u.Vb(62,"div",27),u.Vb(63,"div",28),u.Vb(64,"div",29),u.Vb(65,"div",15),u.Vb(66,"h3",30),u.Hc(67,"API Consumption by Month"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(68,"div",14),u.Vb(69,"div",31),u.Qb(70,"div",34),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(71,"div",11),u.Vb(72,"div",15),u.Vb(73,"div",27),u.Vb(74,"div",28),u.Vb(75,"h3",30),u.Hc(76,"Recently Consumed API"),u.Ub(),u.Ub(),u.Vb(77,"div",35),u.Vb(78,"ul",36),u.Vb(79,"li",37),u.Vb(80,"div",38),u.Vb(81,"div",39),u.Vb(82,"h5",40),u.Vb(83,"span",41),u.Hc(84,"GET"),u.Ub(),u.Hc(85," /exchange-rate/currency-code/year/"),u.Ub(),u.Vb(86,"small"),u.Hc(87," Version 1.0.2 "),u.Ub(),u.Ub(),u.Vb(88,"div"),u.Vb(89,"button",42),u.dc("click",(function(e){u.yc(b);var a=u.wc(175);return t.openModal(a)})),u.Hc(90,"View"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(91,"li",37),u.Vb(92,"div",43),u.Vb(93,"div",39),u.Vb(94,"h5",40),u.Vb(95,"span",41),u.Hc(96,"GET"),u.Ub(),u.Hc(97," /consumer-alert"),u.Ub(),u.Vb(98,"small"),u.Hc(99," Version 1.0.2 "),u.Ub(),u.Ub(),u.Vb(100,"div"),u.Vb(101,"button",42),u.dc("click",(function(e){u.yc(b);var a=u.wc(175);return t.openModal(a)})),u.Hc(102,"View"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(103,"li",37),u.Vb(104,"div",44),u.Vb(105,"div",39),u.Vb(106,"h5",40),u.Vb(107,"span",41),u.Hc(108,"GET"),u.Ub(),u.Hc(109," /consumer-alert/(str)"),u.Ub(),u.Vb(110,"small"),u.Hc(111," Version 1.0.3 "),u.Ub(),u.Ub(),u.Vb(112,"div"),u.Vb(113,"button",42),u.dc("click",(function(e){u.yc(b);var a=u.wc(175);return t.openModal(a)})),u.Hc(114,"View"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(115,"li",37),u.Vb(116,"div",45),u.Vb(117,"div",39),u.Vb(118,"h5",40),u.Vb(119,"span",41),u.Hc(120,"GET"),u.Ub(),u.Hc(121," /exchange-rate/currency-code"),u.Ub(),u.Vb(122,"small"),u.Hc(123," Version 2.0.1 "),u.Ub(),u.Ub(),u.Vb(124,"div"),u.Vb(125,"button",42),u.dc("click",(function(e){u.yc(b);var a=u.wc(175);return t.openModal(a)})),u.Hc(126,"View"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(127,"div",15),u.Vb(128,"div",27),u.Vb(129,"div",28),u.Vb(130,"h3",30),u.Hc(131,"New Released API"),u.Ub(),u.Ub(),u.Vb(132,"div",35),u.Vb(133,"ul",36),u.Vb(134,"li",37),u.Vb(135,"div",38),u.Vb(136,"div",39),u.Vb(137,"h5",40),u.Hc(138,"/base-rate/bank-code"),u.Ub(),u.Vb(139,"small"),u.Hc(140," Version 1.0.3 "),u.Ub(),u.Ub(),u.Vb(141,"div"),u.Vb(142,"button",42),u.dc("click",(function(e){u.yc(b);var a=u.wc(177);return t.openModal(a)})),u.Hc(143,"View"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(144,"li",37),u.Vb(145,"div",43),u.Vb(146,"div",39),u.Vb(147,"h5",40),u.Hc(148,"/base-rate"),u.Ub(),u.Vb(149,"small"),u.Hc(150," Version 1.1.2 "),u.Ub(),u.Ub(),u.Vb(151,"div"),u.Vb(152,"button",42),u.dc("click",(function(e){u.yc(b);var a=u.wc(177);return t.openModal(a)})),u.Hc(153,"View"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(154,"li",37),u.Vb(155,"div",44),u.Vb(156,"div",39),u.Vb(157,"h5",40),u.Hc(158,"/fx-turn-over"),u.Ub(),u.Vb(159,"small"),u.Hc(160," Version 1.3.4 "),u.Ub(),u.Ub(),u.Vb(161,"div"),u.Vb(162,"button",42),u.dc("click",(function(e){u.yc(b);var a=u.wc(177);return t.openModal(a)})),u.Hc(163,"View"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(164,"li",37),u.Vb(165,"div",45),u.Vb(166,"div",39),u.Vb(167,"h5",40),u.Hc(168,"/exchange-rate/currency-code"),u.Ub(),u.Vb(169,"small"),u.Hc(170," Version 2.4.1 "),u.Ub(),u.Ub(),u.Vb(171,"div"),u.Vb(172,"button",42),u.dc("click",(function(e){u.yc(b);var a=u.wc(177);return t.openModal(a)})),u.Hc(173,"View"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Fc(174,V,19,0,"ng-template",null,46,u.Gc),u.Fc(176,U,19,0,"ng-template",null,47,u.Gc)}},directives:[n.w,n.n,n.o],styles:[""]}),e}()},{path:"payment",component:function(){function e(e,t){this.zone=e,this.modalService=t,this.modalConfig={keyboard:!0,class:"modal-dialog-centered"}}return e.prototype.ngOnInit=function(){this.getCharts()},e.prototype.ngOnDestroy=function(){var e=this;this.zone.runOutsideAngular((function(){e.chart&&(console.log("Chart disposed"),e.chart.dispose()),e.chart1&&(console.log("Chart disposed"),e.chart1.dispose())}))},e.prototype.getCharts=function(){var e=this;this.zone.runOutsideAngular((function(){e.getChart(),e.getChart1()}))},e.prototype.getChart=function(){var e=d.h("chartuserpayment",s.m);e.exporting.menu=new d.d;var t=e.xAxes.push(new s.b);t.dataFields.category="year",t.renderer.minGridDistance=30,e.yAxes.push(new s.l);var b=e.series.push(new s.d);b.name="Income",b.dataFields.valueY="income",b.dataFields.categoryX="year",b.columns.template.tooltipText="[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]",b.columns.template.propertyFields.fillOpacity="fillOpacity",b.columns.template.propertyFields.stroke="stroke",b.columns.template.propertyFields.strokeWidth="strokeWidth",b.columns.template.propertyFields.strokeDasharray="columnDash",b.tooltip.label.textAlign="middle";var a=e.series.push(new s.h);a.name="Expenses",a.dataFields.valueY="expenses",a.dataFields.categoryX="year",a.stroke=d.g("#fdd400"),a.strokeWidth=3,a.propertyFields.strokeDasharray="lineDash",a.tooltip.label.textAlign="middle";var i=a.bullets.push(new s.a);i.fill=d.g("#fdd400"),i.tooltipText="[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]";var o=i.createChild(d.a);o.radius=4,o.fill=d.g("#fff"),o.strokeWidth=3,e.data=[{year:"Jan",income:23.5,expenses:21.1},{year:"Feb",income:26.2,expenses:30.5},{year:"Mar",income:30.1,expenses:34.9},{year:"Apr",income:29.5,expenses:31.1},{year:"May",income:30.6,expenses:28.2,lineDash:"5,5"},{year:"2020",income:34.1,expenses:32.9,strokeWidth:1,columnDash:"5,5",fillOpacity:.2,additional:"(projection)"}]},e.prototype.getChart1=function(){var e=d.h("chartuserpayment1",s.m);e.colors.step=2,e.legend=new s.g,e.legend.position="top",e.legend.paddingBottom=20,e.legend.labels.template.maxWidth=95;var t=e.xAxes.push(new s.b);function b(t,b){var i=e.series.push(new s.d);i.dataFields.valueY=t,i.dataFields.categoryX="category",i.name=b,i.events.on("hidden",a),i.events.on("shown",a);var o=i.bullets.push(new s.f);return o.interactionsEnabled=!1,o.dy=30,o.label.text="{valueY}",o.label.fill=d.g("#ffffff"),i}function a(){var b=e.series.getIndex(0),a=1-t.renderer.cellStartLocation-(1-t.renderer.cellEndLocation);if(b.dataItems.length>1){var i=t.getX(b.dataItems.getIndex(0),"categoryX"),o=(t.getX(b.dataItems.getIndex(1),"categoryX")-i)/e.series.length*a;if(d.j(o)){var n=e.series.length/2,c=0;e.series.each((function(t){t.isHidden||t.isHiding?t.dummyData=e.series.indexOf(t):(t.dummyData=c,c++)}));var r=c/2;e.series.each((function(t){var b=e.series.indexOf(t),a=(t.dummyData-b+n-r)*o;t.animate({property:"dx",to:a},t.interpolationDuration,t.interpolationEasing),t.bulletsContainer.animate({property:"dx",to:a},t.interpolationDuration,t.interpolationEasing)}))}}}t.dataFields.category="category",t.renderer.cellStartLocation=.1,t.renderer.cellEndLocation=.9,t.renderer.grid.template.location=0,e.yAxes.push(new s.l).min=0,e.data=[{category:"Jan",first:40,second:55,third:60},{category:"Feb",first:30,second:78,third:69},{category:"Mar",first:27,second:40,third:45},{category:"Apr",first:50,second:33,third:22},{category:"May",first:20,second:53,third:29}],b("first","POST"),b("second","GET"),b("third","UPDATE")},e.prototype.openModal=function(e){this.modal=this.modalService.show(e,this.modalConfig)},e.prototype.closeModal=function(){this.modal.hide()},e.\u0275fac=function(t){return new(t||e)(u.Pb(u.z),u.Pb(i.f))},e.\u0275cmp=u.Jb({type:e,selectors:[["app-payment"]],decls:103,vars:0,consts:[[1,"header","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-dark","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-file-invoice-dollar","text-dark"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col-xl-7"],[1,"card"],[1,"card-header"],[1,"row","align-items-center"],[1,"col"],[1,"m-0"],[1,"card-body"],[1,"chart"],["id","chartuserpayment",1,"amchart"],[1,"col-xl-5"],["id","chartuserpayment1",1,"amchart"],[1,"table-responsive"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col"],[1,"list"],["scope","row"],[1,"badge","badge-success"],[1,"btn","btn-default","btn-sm",3,"click"],["makePayment",""],[1,"modal-header","bg-default"],["id","modal-title-default",1,"modal-title","text-white","my-auto"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true",1,"text-white","my-auto"],[1,"modal-body"],[1,"form-group"],[1,"form-control-label"],["value","RM25.91","type","text","disabled","",1,"form-control"],[1,"modal-footer","mt--3"],["data-dismiss","modal","type","button",1,"btn","btn-success","mr-auto",3,"click"],["data-dismiss","modal","type","button",1,"btn","btn-outline-danger","ml-auto",3,"click"]],template:function(e,t){if(1&e){var b=u.Wb();u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"div",2),u.Vb(3,"div",3),u.Vb(4,"div",4),u.Vb(5,"h6",5),u.Hc(6,"Payment & Billing"),u.Ub(),u.Vb(7,"nav",6),u.Vb(8,"ol",7),u.Vb(9,"li",8),u.Vb(10,"a",9),u.Qb(11,"i",10),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(12,"div",11),u.Vb(13,"div",12),u.Vb(14,"div",13),u.Vb(15,"div",14),u.Vb(16,"div",15),u.Vb(17,"div",16),u.Vb(18,"div",17),u.Vb(19,"h3",18),u.Hc(20,"Payment Analysis"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(21,"div",19),u.Vb(22,"div",20),u.Qb(23,"div",21),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(24,"div",22),u.Vb(25,"div",14),u.Vb(26,"div",15),u.Vb(27,"div",16),u.Vb(28,"div",17),u.Vb(29,"h3",18),u.Hc(30,"Billed API Consumption"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(31,"div",19),u.Vb(32,"div",20),u.Qb(33,"div",23),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(34,"div",12),u.Vb(35,"div",17),u.Vb(36,"div",14),u.Vb(37,"div",15),u.Vb(38,"h3",18),u.Hc(39,"Subscribed API"),u.Ub(),u.Ub(),u.Vb(40,"div",24),u.Vb(41,"table",25),u.Vb(42,"thead",26),u.Vb(43,"tr"),u.Vb(44,"th",27),u.Hc(45,"API NAME"),u.Ub(),u.Vb(46,"th",27),u.Hc(47,"VERSION"),u.Ub(),u.Vb(48,"th",27),u.Hc(49,"TOTAL CALL MADE"),u.Ub(),u.Vb(50,"th",27),u.Hc(51,"STATUS"),u.Ub(),u.Vb(52,"th",27),u.Hc(53,"LAST CONSUMED"),u.Ub(),u.Qb(54,"th",27),u.Ub(),u.Ub(),u.Vb(55,"tbody",28),u.Vb(56,"tr"),u.Vb(57,"th",29),u.Hc(58,"/account_user/"),u.Ub(),u.Vb(59,"td"),u.Hc(60,"1.2.2"),u.Ub(),u.Vb(61,"td"),u.Hc(62,"241"),u.Ub(),u.Vb(63,"td"),u.Vb(64,"span",30),u.Hc(65,"Active"),u.Ub(),u.Ub(),u.Vb(66,"td"),u.Hc(67,"21/02/2020"),u.Ub(),u.Vb(68,"td"),u.Vb(69,"button",31),u.dc("click",(function(e){u.yc(b);var a=u.wc(102);return t.openModal(a)})),u.Hc(70,"Payment"),u.Ub(),u.Ub(),u.Ub(),u.Vb(71,"tr"),u.Vb(72,"th",29),u.Hc(73,"/profix_fpx/"),u.Ub(),u.Vb(74,"td"),u.Hc(75,"3.2.2"),u.Ub(),u.Vb(76,"td"),u.Hc(77,"121"),u.Ub(),u.Vb(78,"td"),u.Vb(79,"span",30),u.Hc(80,"Active"),u.Ub(),u.Ub(),u.Vb(81,"td"),u.Hc(82,"21/03/2020"),u.Ub(),u.Vb(83,"td"),u.Vb(84,"button",31),u.dc("click",(function(e){u.yc(b);var a=u.wc(102);return t.openModal(a)})),u.Hc(85,"Payment"),u.Ub(),u.Ub(),u.Ub(),u.Vb(86,"tr"),u.Vb(87,"th",29),u.Hc(88,"/exchange_rate/"),u.Ub(),u.Vb(89,"td"),u.Hc(90,"1.0.1"),u.Ub(),u.Vb(91,"td"),u.Hc(92,"23"),u.Ub(),u.Vb(93,"td"),u.Vb(94,"span",30),u.Hc(95,"Active"),u.Ub(),u.Ub(),u.Vb(96,"td"),u.Hc(97,"02/04/2020"),u.Ub(),u.Vb(98,"td"),u.Vb(99,"button",31),u.dc("click",(function(e){u.yc(b);var a=u.wc(102);return t.openModal(a)})),u.Hc(100,"Payment"),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Fc(101,v,17,0,"ng-template",null,32,u.Gc)}},directives:[n.w,n.n,n.o],styles:[""]}),e}()},{path:"discovery",component:function(){function e(e,t){this.zone=e,this.modalService=t,this.modalConfig={keyboard:!0,class:"modal-dialog-centered"}}return e.prototype.ngOnInit=function(){},e.prototype.openModal=function(e){this.modal=this.modalService.show(e,this.modalConfig)},e.prototype.closeModal=function(){this.modal.hide()},e.\u0275fac=function(t){return new(t||e)(u.Pb(u.z),u.Pb(i.f))},e.\u0275cmp=u.Jb({type:e,selectors:[["app-discovery"]],decls:82,vars:0,consts:[[1,"header","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-dark","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-compass","text-dark"],[1,"col-lg-6","col-5","text-right"],[1,"btn","btn-default","btn-sm",3,"click"],[1,"container-fluid","mt--6"],[1,"row"],[1,"col"],[1,"card"],[1,"card-body","p-0"],[1,"col-lg-3","border-right"],[1,"list-group","list-group-flush","list"],[1,"list-group-item"],[1,"row","align-items-center"],[1,"mb-0"],[1,"badge","badge-success"],[1,"col-lg-5","py-2"],[1,"form-group"],[1,"form-control-label"],["disabled","","value","/latest-turn-over/",1,"form-control"],[1,"col-lg-4","p-2","bg-default"],["src","assets/img/default/response.png",2,"width","80%"],["viewToken",""],[1,"modal-header","bg-default"],["id","modal-title-default",1,"modal-title","text-white","my-auto"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true",1,"text-white","my-auto"],[1,"modal-body"],["value","f5af9f51-07e6-4332-8f1a-c0c11c1e3728","disabled","","type","text",1,"form-control"],["value","f725f747-3a65-49f6-a231-3e8944ce464d","disabled","","type","text",1,"form-control"],[1,"modal-footer","mt--3"],["data-dismiss","modal","type","button",1,"btn","btn-outline-danger","ml-auto",3,"click"]],template:function(e,t){if(1&e){var b=u.Wb();u.Vb(0,"div",0),u.Vb(1,"div",1),u.Vb(2,"div",2),u.Vb(3,"div",3),u.Vb(4,"div",4),u.Vb(5,"h6",5),u.Hc(6," Public API Discovery"),u.Ub(),u.Vb(7,"nav",6),u.Vb(8,"ol",7),u.Vb(9,"li",8),u.Vb(10,"a",9),u.Qb(11,"i",10),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(12,"div",11),u.Vb(13,"button",12),u.dc("click",(function(e){u.yc(b);var a=u.wc(81);return t.openModal(a)})),u.Hc(14," Generate token "),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(15,"div",13),u.Vb(16,"div",14),u.Vb(17,"div",15),u.Vb(18,"div",16),u.Vb(19,"div",17),u.Vb(20,"div",14),u.Vb(21,"div",18),u.Vb(22,"ul",19),u.Vb(23,"li",20),u.Vb(24,"div",21),u.Vb(25,"div",15),u.Vb(26,"h4",22),u.Vb(27,"span",23),u.Hc(28,"GET"),u.Ub(),u.Hc(29," Latest FX Turnover "),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(30,"li",20),u.Vb(31,"div",21),u.Vb(32,"div",15),u.Vb(33,"h4",22),u.Vb(34,"span",23),u.Hc(35,"GET"),u.Ub(),u.Hc(36," Latest Exchange Rate "),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(37,"li",20),u.Vb(38,"div",21),u.Vb(39,"div",15),u.Vb(40,"h4",22),u.Vb(41,"span",23),u.Hc(42,"GET"),u.Ub(),u.Hc(43," Consumer Alert "),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(44,"li",20),u.Vb(45,"div",21),u.Vb(46,"div",15),u.Vb(47,"h4",22),u.Vb(48,"span",23),u.Hc(49,"GET"),u.Ub(),u.Hc(50," Interest Rate "),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(51,"li",20),u.Vb(52,"div",21),u.Vb(53,"div",15),u.Vb(54,"h4",22),u.Vb(55,"span",23),u.Hc(56,"GET"),u.Ub(),u.Hc(57," Interbank Swap "),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(58,"li",20),u.Vb(59,"div",21),u.Vb(60,"div",15),u.Vb(61,"h4",22),u.Vb(62,"span",23),u.Hc(63,"GET"),u.Ub(),u.Hc(64," Interest Rate "),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(65,"li",20),u.Vb(66,"div",21),u.Vb(67,"div",15),u.Vb(68,"h4",22),u.Vb(69,"span",23),u.Hc(70,"GET"),u.Ub(),u.Hc(71," Interest Volume "),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Vb(72,"div",24),u.Vb(73,"div",25),u.Vb(74,"label",26),u.Hc(75,"URL"),u.Ub(),u.Qb(76,"input",27),u.Ub(),u.Ub(),u.Vb(77,"div",28),u.Vb(78,"div"),u.Qb(79,"img",29),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Ub(),u.Fc(80,m,19,0,"ng-template",null,30,u.Gc)}},directives:[n.w,n.n,n.o],styles:[""]}),e}()}]}];b.d(t,"UserModule",(function(){return h}));var h=function(){function e(){}return e.\u0275mod=u.Nb({type:e}),e.\u0275inj=u.Mb({factory:function(t){return new(t||e)},imports:[[a.c,i.a.forRoot(),o.c.forRoot(),i.d.forRoot(),i.g.forRoot(),i.i.forRoot(),i.j.forRoot(),i.k.forRoot(),n.h,n.s,r.b,c.e,l.g.forChild(p)]]}),e}()}}]);