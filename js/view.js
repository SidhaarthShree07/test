(function() {
	angular.module('users')
		.directive("experiment", directiveFunction)
})();

var resistivity_by_Four_Probe_Method_stage, exp_canvas, tick;
var initial_mA,final_mA;
var range_of_current_flag=true;
var range_of_Oven_flag,wait_flag=true;
var	volt_calc,resistivity;
var joule_Kelvin,temperature_K,constant_c,distance_between_probes,twoPi_s,thickness_of_the_sample,w_by_s,G7,current;
var eg_Joules=[];
var joules_item,rangeof_voltmeterFlag,run_Interval,curren_Initial_temperature,selected_temperature,equation_one;
var temperature_setFlag,run_flag,first_runFlag=false;
function directiveFunction() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			/** Variable that decides if something should be drawn on mouse move */
			var experiment = true;
			if (element[0].width > element[0].height) {
				element[0].width = element[0].height;
				element[0].height = element[0].height;
			} else {
				element[0].width = element[0].width;
				element[0].height = element[0].width;
			}
			if (element[0].offsetWidth > element[0].offsetHeight) {
				element[0].offsetWidth = element[0].offsetHeight;
			} else {
				element[0].offsetWidth = element[0].offsetWidth;
				element[0].offsetHeight = element[0].offsetWidth;
			}
			exp_canvas = document.getElementById("demoCanvas");
			exp_canvas.width = element[0].width;
			exp_canvas.height = element[0].height;
			resistivity_by_Four_Probe_Method_stage = new createjs.Stage("demoCanvas");
			queue = new createjs.LoadQueue(true);
			queue.loadManifest([{
				id: "background",
				src: "././images/background.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "constant_Current_Source",
				src: "././images/constant_Current_Source.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "digital_Micro_Voltmeter",
				src: "././images/digital_Micro_Voltmeter.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "pid_controlled_Oven",
				src: "././images/pid_controlled_Oven.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "cylinder_top",
				src: "././images/cylinder_top.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "top_object",
				src: "././images/top_object.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "wires",
				src: "././images/wires.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "cross_section",
				src: "././images/cross_section.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "small_switch_off",
				src: "././images/small_switch_off.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "small_switch_on",
				src: "././images/small_switch_on.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "big_switch_off",
				src: "././images/big_switch_off.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "big_switch_on",
				src: "././images/big_switch_on.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "digital_microvoltmeter_turner",
				src: "././images/digital_microvoltmeter_turner.svg",
				type: createjs.LoadQueue.IMAGE
			},{
				id: "digital_microvoltmeter_top",
				src: "././images/digital_microvoltmeter_top.svg",
				type: createjs.LoadQueue.IMAGE
			}]);
			loadingProgress(queue, resistivity_by_Four_Probe_Method_stage, exp_canvas.width);			
			resistivity_by_Four_Probe_Method_stage.enableDOMEvents(true);
			resistivity_by_Four_Probe_Method_stage.enableMouseOver();
			createjs.Touch.enable(resistivity_by_Four_Probe_Method_stage);
			queue.on("complete", handleComplete, this);
			tick = setInterval(updateTimer, 5); /** Stage update function in a timer */
			function handleComplete() {				
				loadImages(queue.getResult("background"), "background", 0, 0, 1, "", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("constant_Current_Source"), "constant_Current_Source", 0, 0, 1, "", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("digital_Micro_Voltmeter"), "digital_Micro_Voltmeter", 0, 0, 1, "", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("pid_controlled_Oven"), "pid_controlled_Oven", 0, 0, 1, "", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("cylinder_top"), "cylinder_top", 0, 0, 1, "", 0, resistivity_by_Four_Probe_Method_stage);
				
				loadImages(queue.getResult("cross_section"), "cross_section", 0, 0, 1, "", 0, resistivity_by_Four_Probe_Method_stage);
				
				loadImages(queue.getResult("top_object"), "top_object", 0, 0, 1, "", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("wires"), "wires", 0, 0, 1, "", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("small_switch_off"), "small_switch_off", 0, 0, 1, "pointer", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("small_switch_on"), "small_switch_on", 0, 0, 1, "pointer", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("big_switch_off"), "big_switch_off_one", 0, 0, 1, "pointer", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("big_switch_off"), "big_switch_off_two", 103, 0, 1, "pointer", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("big_switch_off"), "big_switch_off_three", 210, 0, 1, "pointer", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("big_switch_on"), "big_switch_on_one", 0, 0, 1, "pointer", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("big_switch_on"), "big_switch_on_two", 102, 0, 1, "pointer", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("big_switch_on"), "big_switch_on_three", 210, 0, 1, "pointer", 0, resistivity_by_Four_Probe_Method_stage);
				loadImages(queue.getResult("digital_microvoltmeter_turner"), "digital_microvoltmeter_turner",489, 260, 1, "pointer", -50, resistivity_by_Four_Probe_Method_stage);
				
				loadImages(queue.getResult("digital_microvoltmeter_top"), "digital_microvoltmeter_top",0, 0, 1, "pointer", 0, resistivity_by_Four_Probe_Method_stage);
				
				setText("display_one", 58, 260, "1.00", "#F30000",0, resistivity_by_Four_Probe_Method_stage,"1.6em digiface")
				setText("display_two", 578, 258, "00.00", "#F30000",0, resistivity_by_Four_Probe_Method_stage,"1.6em digiface")
				setText("display_three", 202,525, "25.0", "#F30000",0, resistivity_by_Four_Probe_Method_stage,"2.1em digiface")
				setText("display_four", 202,525, "25.0", "#F30000",0, resistivity_by_Four_Probe_Method_stage,"2.1em digiface")
				
				setText("probe_one",70,395, "Probe 1", "#020202",1, resistivity_by_Four_Probe_Method_stage,"em Tahoma, Geneva, sans-serif")
				
				setText("probe_two",58,428, "Probe 2", "#020202",1, resistivity_by_Four_Probe_Method_stage,"em Tahoma, Geneva, sans-serif")
				
				setText("probe_three",590,428, "Probe 3", "#020202",1, resistivity_by_Four_Probe_Method_stage,"em Tahoma, Geneva, sans-serif")
				
				setText("probe_four",580,395, "Probe 4", "#020202",1, resistivity_by_Four_Probe_Method_stage,"em Tahoma, Geneva, sans-serif")
				
				getChild("small_switch_off").addEventListener("click", function(evt){small_switch_Fn(scope, evt,true)});
				getChild("small_switch_on").addEventListener("click", function(evt){small_switch_Fn(scope, evt,false)});
				
				getChild("big_switch_off_one").addEventListener("click", function(evt){big_switch_Fn(scope, evt,1)});
				getChild("big_switch_on_one").addEventListener("click", function(evt){big_switch_Fn(scope, evt,0)});
				
				getChild("big_switch_off_two").addEventListener("click", function(evt){big_switch_waitRun_Fn(scope, evt,0)});
				getChild("big_switch_on_two").addEventListener("click", function(evt){big_switch_waitRun_Fn(scope, evt,1)});
				
				getChild("big_switch_on_three").addEventListener("click", function(evt){big_switch_setMeasureFn(scope, evt,1)});
				
				getChild("big_switch_off_three").addEventListener("click", function(evt){big_switch_setMeasureFn(scope, evt,0)});
				
				
				
				initialisationOfVariables(); /** Initializing the variables */	
				translationLabels(); /** Translation of strings using gettext */				
				initialisationOfControls(scope); /** Initializing the controls */
				initialisationOfImages(scope); /** Function call for images used in the apparatus visibility */
				resistivity_by_Four_Probe_Method_stage.update();
			}


			/** Add all the strings used for the language translation here. '_' is the short cut for calling the gettext function defined in the gettext-definition.js */
			function translationLabels() {
				/** This help array shows the hints for this experiment */
				help_array = [_("help1"), _("help2"), _("help3"), _("help4"), _("help5"), _("help6"), _("help7"), _("help8"), _("help9"), _("Next"), _("Close")];
				scope.heading = _("Resistivity by Four Probe Method");
				scope.variables = _("Variables");
				scope.g_unit = _("g");
				scope.kg_unit = _("kg");
				scope.cm_unit = _("cm");
				scope.select_material_lbl = _("Select Material :");
				scope.range_of_current_lbl = _("Range of Current :");
				scope.germanium = _("Germanium");
				scope.current_value = _("20 mA");
				scope.range_ofVoltmeter=_("10 V");
				scope.current_am_value = _("Current (mA) :");
				scope.initial_range_of_Oven=_("x1");
				scope.oven = _("Oven");
				scope.cross_section_lbl = _("Cross Section");
				scope.range_of_Oven_lbl = _("Range of Oven :");
				scope.result = _("Measurements");
				scope.stop = _("Stop");
				scope.set_lb = _("Set");
				scope.run_lbl = _("Run");
				scope.wait_lbl = _("Wait");
				scope.reset_labl = _("RESET");
				scope.showresult_lbl = _("Show result");
				scope.resistivity_ohm_lbl = _("Resistivity (ohm cm) :");
				scope.measure_lbl = _("Measure");
				scope.string_length_lbl = _("String Length(m):");
				scope.string_radius_lbl = _("String Radius(m):");
				scope.moment_inertia_lbl = _("Moment of Inertia:");
				scope.temperature_lbl = _("Temperature:");
				scope.range_ofVoltmeter_lbl = _("Range of Voltmeter :");
				scope.copyright = _("copyright");
				
				/** Select Material dropdown */
				scope.meterial_array = [{
					Material: _("Germanium"),
					index: 0
				}, {
					Material: _("Silicon"),
					index: 1
				}];
				/** Range of Current dropdown */
				scope.range_of_current_array = [{
					Current: _("20 mA"),
					index: 0
				}, {
					Current: _("200 mA"),
					index: 1
				}];
				/** Range of Voltmeter Drop down */
				scope.rangeof_Voltmeter_array = [{
					Range: _("x1"),
					index: 0
				}, {
					Range: _("x10"),
					index: 1
				}];
				/** Range of Voltmeter : dropdown */
				scope.range_ofVoltmeter_array = [{
					Range_Voltmeter: _("1 mV"),
					index: 0
				}, {
					Range_Voltmeter: _("10 mV"),
					index: 1
				}, {
					Range_Voltmeter: _("100 mV"),
					index: 2
				}, {
					Range_Voltmeter: _("1 V"),
					index: 3
				}, {
					Range_Voltmeter: _("10 V"),
					index: 4
				}];
				scope.$apply();
				resistivity_by_Four_Probe_Method_stage.update();
			}			
		}
	}

}
/** Createjs stage updation happens in every interval */
function updateTimer() {
    resistivity_by_Four_Probe_Method_stage.update();
}
/** Function to return child element of stage */
function getChild(child_name) {
    return resistivity_by_Four_Probe_Method_stage.getChildByName(child_name); /** Returns the child element of stage */
}
/** All the images loading and added to the stage */
function loadImages(image, name, xPos, yPos, scale, cursor, rot, container) {
	var _bitmap = new createjs.Bitmap(image).set({});    
	_bitmap.x = xPos;
	_bitmap.y = yPos;
	_bitmap.scaleX = _bitmap.scaleY = scale;
	_bitmap.name = name;
	_bitmap.alpha = 1;
	if ( name == "small_weight_left" || name == "small_weight_right" ) {
		_bitmap.regX = _bitmap.image.width / 2;
		_bitmap.regY = _bitmap.image.height / 2;
	}
	_bitmap.rotation = rot;
	_bitmap.cursor = cursor;
	container.addChild(_bitmap); /** Adding bitmap to the container */
}
/** All variables initialising in this function */
function initialisationOfVariables() {
	eg_Joules=[1.072E-19,1.936E-19];  /** Band gap of germanium and silicon respectively.  */
	joule_Kelvin=1.38E-23;
	temperature_K=298;
	constant_c=0.14;
	distance_between_probes=0.2
	twoPi_s=1.256;
	thickness_of_the_sample=0.05;
	w_by_s=thickness_of_the_sample/distance_between_probes;
	G7=5.89;
	current=1;
	joules_item=eg_Joules[0];
	rangeof_voltmeterFlag=0;
	temperature_K_incrmnt=298;
    curren_Initial_temperature=298;
}
/** Set the initial status of the bitmap and text depends on its visibility and initial values */
function initialisationOfImages(scope) {
	getChild("probe_one").alpha = 0;
	getChild("probe_two").alpha = 0;
	getChild("probe_three").alpha = 0;
	getChild("probe_four").alpha = 0;
	getChild("probe_four").alpha = 0;
	getChild("cross_section").alpha = 0;
	getChild("small_switch_on").alpha = 0;
	getChild("big_switch_on_one").alpha = 0;
	getChild("big_switch_on_two").alpha = 0;
	getChild("big_switch_on_three").alpha = 1;
	getChild("big_switch_off_three").alpha = 0;
	getChild("display_four").alpha = 0;
}

/** All controls initialising in this function */
function initialisationOfControls(scope) {
	scope.initial_mA=1
	scope.final_mA=20
	scope.curren_mA_steps=0.2;
	scope.curren_mA_min=1;
	scope.curren_mA_max=20;
	scope.curren_mAValue=1;
	scope.curren_mAValue_lbl=1;
	scope.curren_temperature=25.0;
	scope.initial_temperature=25;
	scope.final_temperature=95;
	scope.curren_temperature_steps=5;
	scope.set_btn_disable=false;
	scope.run_btn_disable=false;
	scope.wait_btn_disable=true;
	scope.measure_btn_disable=true;
	scope.curren_temperatureSlider_disable=true;
	scope.showResult_btn_disable=false;
	scope.change_rangeOf_ovenMdl=0;
	scope.range_of_current=0;
	scope.range_ofVoltmeter_mdl="4";
    scope.curren_temperature_mdl="25.0";
	changeRangeof_voltmeter_Fn(scope);
}
/** All the texts loading and added to the stage */
function setText(name, textX, textY, value, color, fontSize, container,font){
    var text = new createjs.Text(value, "bold " + fontSize + font, color);
    text.x = textX;
    text.y = textY;
    text.textBaseline = "alphabetic";
    text.name = name;
    text.text = value;
    text.color = color;
    container.addChild(text); /** Adding text to the container */
    resistivity_by_Four_Probe_Method_stage.update();
}