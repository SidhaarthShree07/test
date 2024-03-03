/**Function for selecting material - Drop-down */
function select_Material_Fn(scope){
	
	if(scope.select_Material_mdl == 0){
		joules_item=eg_Joules[0]
		
	}else{
		joules_item=eg_Joules[1];
	}
	claculationFn()
	convertDecemelVolt_display()
	resistivity_by_Four_Probe_Method_stage.update();
}

/**Cross Section toggle*/
function showCrossSectionFn(scope){
	scope.CrossSection ? showHideCrossSection(1,scope) :  showHideCrossSection(0,scope);
	resistivity_by_Four_Probe_Method_stage.update();
}
function showHideCrossSection(showHide_value){
	getChild("probe_one").alpha = showHide_value;
	getChild("probe_two").alpha = showHide_value;
	getChild("probe_three").alpha = showHide_value;
	getChild("probe_four").alpha = showHide_value;
	getChild("cross_section").alpha = showHide_value;
	resistivity_by_Four_Probe_Method_stage.update();
}
/**Function for select range of Current*/
function select_range_of_currentFn(scope){
	if(range_of_current_flag){
		scope.curren_mA_steps=1;
		getChild("small_switch_on").alpha = 1;
		getChild("small_switch_off").alpha = 0;
		scope.final_mA=201;
		scope.curren_mA_max=101;
		range_of_current_flag=false
		scope.range_of_current=1;
		scope.current_value = "20 mA";
		current=1;
		scope.curren_mAValue=1;
		getChild("display_one").text="1.00"
		scope.curren_mAValue_lbl=1;
		resistivity_by_Four_Probe_Method_stage.update();
	}
	else{
		scope.curren_mA_steps=0.2;
		getChild("small_switch_on").alpha = 0;
		getChild("small_switch_off").alpha = 1;
		scope.final_mA=20;
		scope.curren_mA_max=20;
		range_of_current_flag=true
		scope.range_of_current=0;
		scope.current_value = "200 mA";
		current=1;
		scope.curren_mAValue=1;
		getChild("display_one").text="1.00"
		scope.curren_mAValue_lbl=1;
		resistivity_by_Four_Probe_Method_stage.update();
	}
	resistivity_by_Four_Probe_Method_stage.update();
}
/**Function for select current form constant current source*/
function change_mAFn(scope){
	if(scope.range_of_current==0){
		getChild("display_one").text = scope.curren_mAValue.toFixed(2);
		current=scope.curren_mAValue.toFixed(2)	;
		scope.curren_mAValue_lbl=scope.curren_mAValue.toFixed(1);
		
	}else{
		getChild("display_one").text = parseInt(scope.curren_mAValue.toFixed(1)*2)-1;
		current=parseInt(scope.curren_mAValue.toFixed(1)*2)-1;
		scope.curren_mAValue_lbl=parseInt(scope.curren_mAValue.toFixed(1)*2)-1;
	}
	claculationFn()
	convertDecemelVolt_display()
	resistivity_by_Four_Probe_Method_stage.update();
}
/**Function for changing the range of Oven*/
function change_rangeOf_ovenFn(scope){

	if(scope.change_rangeOf_ovenMdl==0){
	scope.curren_temperature_mdl="25.0";
		getChild("big_switch_off_one").alpha = 1;
		getChild("big_switch_on_one").alpha = 0;
		getChild("display_three").text=25.0;
        getChild("display_four").text=25.0;
		scope.curren_temperature=25.0;
		scope.initial_temperature=25;
		scope.final_temperature=95;
		scope.curren_temperature_steps=5;
		temperature_K=298;
	}
	else{
	scope.curren_temperature_mdl="2.5";
		getChild("big_switch_off_one").alpha = 0;
		getChild("big_switch_on_one").alpha = 1;
		getChild("display_three").text=2.5;
		getChild("display_four").text=2.5;
		scope.curren_temperature=25;
		scope.initial_temperature=2.5;
		scope.final_temperature=20;
		scope.curren_temperature_steps=0.5;
		temperature_K=298;
	}
	
	resistivity_by_Four_Probe_Method_stage.update();
}
/** Function for changing temperature   */
function changeTemperature_Fn(scope){

	if(scope.change_rangeOf_ovenMdl==0){
		scope.curren_temperature = scope.curren_temperature_mdl;
		temperature_K=parseInt(scope.curren_temperature_mdl.toFixed(1))+273;
		console.log("test_one" +scope.curren_temperature)
	}else{
		scope.curren_temperature = scope.curren_temperature_mdl*10;
		temperature_K=parseInt(scope.curren_temperature_mdl.toFixed(1)*10)+273;
		console.log("test_two"+scope.curren_temperature)
	}
	
	//getChild("display_three").text=scope.curren_temperature_mdl.toFixed(1);
	getChild("display_four").text=scope.curren_temperature_mdl.toFixed(1);
	resistivity_by_Four_Probe_Method_stage.update();
}
/** Function for selecting range of voltmeter  */
function changeRangeof_voltmeter_Fn(scope){
	switch (scope.range_ofVoltmeter_mdl) {
			case "0": 
				getChild("digital_microvoltmeter_turner").x=489;
				getChild("digital_microvoltmeter_turner").y=260;
				getChild("digital_microvoltmeter_turner").rotation=-50;
				rangeof_voltmeterFlag=0;
			break;
			case "1": 
				getChild("digital_microvoltmeter_turner").x=487;
				getChild("digital_microvoltmeter_turner").y=256;
				getChild("digital_microvoltmeter_turner").rotation=-30;
				rangeof_voltmeterFlag=1;
			break;
			case "2": 
				getChild("digital_microvoltmeter_turner").x=487;
				getChild("digital_microvoltmeter_turner").y=244;
				getChild("digital_microvoltmeter_turner").rotation=0;
				rangeof_voltmeterFlag=2;
			break;
			case "3": 
				getChild("digital_microvoltmeter_turner").x=490;
				getChild("digital_microvoltmeter_turner").y=235;
				getChild("digital_microvoltmeter_turner").rotation=23;
				rangeof_voltmeterFlag=3;
			break;
			case "4": 
				getChild("digital_microvoltmeter_turner").x=500;
				getChild("digital_microvoltmeter_turner").y=230;
				getChild("digital_microvoltmeter_turner").rotation=58;
				rangeof_voltmeterFlag=4;
			break;
		}
		getChild("display_two").text ="00.00"
		claculationFn()
		convertDecemelVolt_display()
		resistivity_by_Four_Probe_Method_stage.update();
}
/** Function set button functionality  */
function set_Btn_Fn(scope){
	//window.clearInterval(run_Interval);
	scope.set_btn_disable=true;
	//scope.run_btn_disable=false;
	scope.curren_temperatureSlider_disable=false;
	scope.change_rangeOf_disable=true;
	claculationFn()
	temperature_setFlag=true;
	scope.measure_btn_disable=false;
	scope.showResult_btn_disable=true ;
	document.getElementById("resultSection").style.display = "none"
	scope.showResult_mdl=false;
	getChild("big_switch_on_three").alpha = 0;
	getChild("big_switch_off_three").alpha = 1;
	getChild("big_switch_off_two").alpha =1;
	getChild("big_switch_on_two").alpha = 0;
 //  scope.curren_temperature_mdl=scope.curren_temperature

       getChild("display_three").alpha = 0;
       getChild("display_four").alpha = 1;
    console.log("clear "+scope.curren_temperature_mdl)
       getChild("display_four").text=scope.curren_temperature_mdl;
    
	resistivity_by_Four_Probe_Method_stage.update();
}
/** Function for small switch functionality  */
function small_switch_Fn(scope, evt,section_flag){
	range_of_current_flag=section_flag
	select_range_of_currentFn(scope)
	scope.$apply();
	resistivity_by_Four_Probe_Method_stage.update();
}

/** Function for big switch functionality  */
function big_switch_Fn(scope, evt,section_value){
	scope.change_rangeOf_ovenMdl=section_value;
	change_rangeOf_ovenFn(scope)
	scope.$apply();
	resistivity_by_Four_Probe_Method_stage.update();
}

/** Function for big switch functionality  */
function big_switch_waitRun_Fn(scope, evt,section_value){
	if(section_value==0 && temperature_setFlag==true){
		run_btn_Fn(scope)
	}
	else if (section_value==1 && temperature_setFlag==false){
		wait_btn_Fn(scope)		
	}
	scope.$apply();
	resistivity_by_Four_Probe_Method_stage.update();
}

/** Function for big switch functionality  */
function big_switch_setMeasureFn(scope, evt,section_value){
	if(section_value==1){
		set_Btn_Fn(scope)
	}
	else if (section_value==0){
		measure_btn_Fn(scope)		
	}
	scope.$apply();
	resistivity_by_Four_Probe_Method_stage.update();
}

/** Function for calculating the equations  */
function claculationFn(){
	if(run_flag){
		equation_one=(joules_item*constant_c)/(2*joule_Kelvin*temperature_K_incrmnt);
	}else{
		equation_one=(joules_item*constant_c)/(2*joule_Kelvin*temperature_K);
	}
	volt_calc=(Math.exp(equation_one)*G7*current)/(2*3.14*distance_between_probes)
	resistivity_by_Four_Probe_Method_stage.update();	
} 
/** Function for selecting range of voltmeter  */
function convertDecemelVolt_display(){	
	var fixed_volt=volt_calc.toFixed(0)
	var fixed_length=fixed_volt.toString().length;	
		if(fixed_length>=2 && rangeof_voltmeterFlag >=2 ){
			if(fixed_length==2 && rangeof_voltmeterFlag ==2){
				getChild("display_two").text =volt_calc.toFixed(2);;
			}else if(fixed_length<=3 && rangeof_voltmeterFlag ==3){
				getChild("display_two").text =(volt_calc/1000).toFixed(4);
			}else if(fixed_length<=4 && rangeof_voltmeterFlag ==4){
				getChild("display_two").text =(volt_calc/1000).toFixed(4);
			}else{
				getChild("display_two").text ="00.00";
			}
		}else{
			getChild("display_two").text ="00.00";
		}
	resistivity_by_Four_Probe_Method_stage.update();
}
/** Function for Run button functionality  */
function run_btn_Fn(scope){
     getChild("display_four").alpha = 0;
        getChild("display_three").alpha = 1;
	run_flag=true;
	scope.curren_temperatureSlider_disable=true;
	scope.showResult_btn_disable=false;
	scope.wait_btn_disable=false;
	scope.run_btn_disable=true;
	document.getElementById("resultSection").style.display = "none"
	scope.showResult_mdl=false;
	getChild("big_switch_off_two").alpha = 0;
	getChild("big_switch_on_two").alpha = 1;
	temperature_setFlag=false;
	
	/** Statement - checking the wait button is clicked or not  */
	
	if(wait_flag){
		
		curren_Initial_temperature=298;
		selected_temperature=temperature_K
	}
	else{
		selected_temperature=temperature_K
	}
	
	
	
	/** Statement - checking whether the selected temperature is higher than normal temperature  */
	if(curren_Initial_temperature<selected_temperature){
	 run_Interval = window.setInterval(function test(){
			if(scope.change_rangeOf_ovenMdl==0)	 {
				curren_Initial_temperature++
				getChild("display_three").text=(parseInt(curren_Initial_temperature)-273).toFixed(1);
				temperature_K_incrmnt=curren_Initial_temperature;
				claculationFn()
				convertDecemelVolt_display()
				if(selected_temperature==curren_Initial_temperature){
					clearInterval(run_Interval);
					scope.run_btn_disable=false;
					scope.wait_btn_disable=true;
					temperature_setFlag=true;
					wait_flag=false;
					scope.$apply();
				}
			}else{
				curren_Initial_temperature+=0.5;
				getChild("display_three").text=(parseFloat(	curren_Initial_temperature-273)).toFixed(1);
				temperature_K_incrmnt=curren_Initial_temperature;
				claculationFn()
				convertDecemelVolt_display()
				if(selected_temperature==curren_Initial_temperature){
					clearInterval(run_Interval);
					scope.run_btn_disable=false;
					scope.wait_btn_disable=true;
					temperature_setFlag=true;
					wait_flag=false;
					scope.$apply();
				}
			}
		
		
		scope.resistivity_result=Math.exp(equation_one).toFixed(4)
		scope.$apply();

	 }, 1000);
	 }
	 	resistivity_by_Four_Probe_Method_stage.update();
}
/** Function for wait button functionality  */
function wait_btn_Fn(scope){
	getChild("big_switch_off_two").alpha =1;
	getChild("big_switch_on_two").alpha = 0;
	wait_flag=false;
	clearInterval(run_Interval);
	claculationFn()
	scope.wait_btn_disable=true;
//	scope.measure_btn_disable=true;
	scope.run_btn_disable=false;
	resistivity_by_Four_Probe_Method_stage.update();
	temperature_setFlag=true;
	first_runFlag=true
}
/** Function for measure button functionality  */
function measure_btn_Fn(scope){
	scope.measure_btn_disable=true;
	scope.showResult_btn_disable=false;
	scope.set_btn_disable=false;
	scope.curren_temperatureSlider_disable=true;
	getChild("big_switch_on_three").alpha = 1;
	getChild("big_switch_off_three").alpha = 0;
	scope.change_rangeOf_disable=false;
    //console.log(curren_Initial_temperature)
    //id = window.setInterval(<code>)
  
    if(run_flag==true){
        
        window.run_Interval
          console.log("testing_one")
         getChild("display_four").alpha = 0;
         getChild("display_three").alpha = 1;
        
    }else{
         getChild("display_four").text=(parseInt(curren_Initial_temperature)-273).toFixed(1);        
    }
	resistivity_by_Four_Probe_Method_stage.update();
}
/**Result toggle*/
function showResultFn(scope){
	scope.showResult_mdl ? document.getElementById("resultSection").style.display = "block" :document.getElementById("resultSection").style.display = "none";
	if(first_runFlag==false){
		scope.resistivity_result=6.2011;	
	}else{
		scope.resistivity_result=Math.exp(equation_one).toFixed(4);	
	}
	resistivity_by_Four_Probe_Method_stage.update();
}
/**Function for experiment reset*/
function resetExperiment_fn(scope){
	scope.curren_temperature_mdl=0
	change_rangeOf_ovenFn(scope);
	scope.select_Material_mdl=0;
	joules_item=eg_Joules[0];
	scope.range_of_current=0;
	current=1;
	scope.curren_mAValue=1;
	getChild("display_one").text="1.00"
	scope.CrossSection=false;
	showCrossSectionFn(scope)
	initialisationOfImages(scope); 
	initialisationOfControls(scope);
	scope.range_ofVoltmeter_mdl="4";
	changeRangeof_voltmeter_Fn(scope);
	getChild("display_two").text ="0.0291"
	range_of_current_flag=0
	select_range_of_currentFn(scope)
	document.getElementById("resultSection").style.display = "none"
	getChild("display_three").text="25.0";
	scope.showResult_mdl=false;
	scope.showResult_btn_disable=true;
	clearInterval(run_Interval);
	temperature_setFlag=false;
	getChild("big_switch_off_two").alpha =1;
	getChild("big_switch_on_two").alpha = 0;
	scope.change_rangeOf_disable=false;
	scope.curren_temperatureSlider_disable=false;
	scope.change_rangeOf_ovenMdl=0;
	scope.final_temperature=95;
	scope.initial_temperature=25;
	scope.curren_temperature=25.0;
	scope.curren_temperature_steps=5;
	temperature_K=298;
	scope.curren_temperature_mdl="25";
	scope.curren_temperatureSlider_disable=true;
	getChild("big_switch_off_one").alpha = 1;
	getChild("big_switch_on_one").alpha = 0;
	scope.curren_mA_steps=0.2;
	scope.range_of_current=0;
	resistivity_by_Four_Probe_Method_stage.update();
	selected_temperature="";
	run_flag=false;
	temperature_K_incrmnt ="";
	scope.resistivity_result=6.2011;	
	first_runFlag=false;
    getChild("display_four").alpha = 0;
    getChild("display_three").alpha = 1;
}