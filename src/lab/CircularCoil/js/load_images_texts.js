/** This file will call functions to load all the images and texts in the experiment */
function loadImagesTexts(){
	/** Images loading in the canvas */
	loadImages(queue.getResult("background"),"background",stage_width/-15,0,1.148,"",0,circular_coil_container);    
	loadImages(queue.getResult("clock_to_move"),"clock_to_move",stage_width/1.46,stage_height/3.4,0.235,"",0,compassbox_move_container);  
	loadImages(queue.getResult("needle"),"needle",stage_width/1.25,stage_height/3.05,0.054,"",0,compassbox_move_container);  
	loadImages(queue.getResult("black_needle_knob"),"black_needle_knob",stage_width/1.25,stage_height/3,0.022,"",0,compassbox_move_container);  
	loadImages(queue.getResult("clock_glacing"),"clock_glacing",stage_width/1.382,stage_height/3.4,0.158,"",0,compassbox_move_container);  
	loadImages(queue.getResult("upper_round_clock"),"upper_round_clock",stage_width/1.538,stage_height/4.8,0.288,"",0,circular_coil_stage); 
	loadImages(queue.getResult("rheostat_top_move"),"rheostat_top_move",stage_width/3.1,stage_height/1.52,0.105,"",0,circular_coil_container); 
	loadImages(queue.getResult("main_key"),"main_key",stage_width/10,stage_height/1.66,0.0315,"",0,circular_coil_container); 
	loadImages(queue.getResult("main_key_top"),"main_key_top",stage_width/15,stage_height/1.595,0.096,"",0,circular_coil_container); 
	loadImages(queue.getResult("round_key1"),"round_key1",stage_width/2.47,stage_height/2.1,0.0278,"",0,circular_coil_container); 
	loadImages(queue.getResult("round_key2"),"round_key2",stage_width/2.2,stage_height/2.1,0.0255,"",0,circular_coil_container); 
	loadImages(queue.getResult("round_key3"),"round_key3",stage_width/2.17,stage_height/1.98,0.0318,"",0,circular_coil_container); 
	loadImages(queue.getResult("round_key4"),"round_key4",stage_width/2.43,stage_height/1.97,0.0305,"",0,circular_coil_container); 
	loadImages(queue.getResult("battery_to_voltmeter"),"battery_to_voltmeter",stage_width/5.5,stage_height/3.28,0.232,"",0,circular_coil_container); 
	loadImages(queue.getResult("battery_to_keyport"),"battery_to_keyport",stage_width/125.1,stage_height/3.25,0.345,"",0,circular_coil_container); 
	loadImages(queue.getResult("keyport_to_rheostat"),"keyport_to_rheostat",stage_width/7.22,stage_height/1.65,0.28,"",0,circular_coil_container); 
	loadImages(queue.getResult("rheostat_to_round_keybox"),"rheostat_to_round_keybox",stage_width/2.07,stage_height/1.99,0.382,"",0,circular_coil_container); 
	loadImages(queue.getResult("round_keybox_to_voltmeter"),"round_keybox_to_voltmeter",stage_width/2.84,stage_height/3.2,0.25,"",0,circular_coil_container); 
	loadImages(queue.getResult("white_keybox_to_key1"),"white_keybox_to_key1",stage_width/2.3,stage_height/2.32,0.245,"",0,circular_coil_container); 
	loadImages(queue.getResult("white_keybox_to_key2"),"white_keybox_to_key2",stage_width/2.32,stage_height/2.42,0.25,"",0,circular_coil_container); 
	loadImages(queue.getResult("white_keybox_to_key3"),"white_keybox_to_key3",stage_width/2.3,stage_height/2.58,0.24,"",0,circular_coil_container); 
	loadImages(queue.getResult("white_keybox_to_key4"),"white_keybox_to_key4",stage_width/2.29,stage_height/2.73,0.225,"",0,circular_coil_container); 
	loadImages(queue.getResult("black_keybox_to_key1"),"black_keybox_to_key1",stage_width/2.26,stage_height/2.29,0.24,"",0,circular_coil_container); 
	loadImages(queue.getResult("black_keybox_to_key2"),"black_keybox_to_key2",stage_width/2.26,stage_height/2.45,0.237,"",0,circular_coil_container); 
	loadImages(queue.getResult("black_keybox_to_key3"),"black_keybox_to_key3",stage_width/2.27,stage_height/2.6,0.235,"",0,circular_coil_container); 
	loadImages(queue.getResult("black_keybox_to_key4"),"black_keybox_to_key4",stage_width/2.27,stage_height/2.74,0.223,"",0,circular_coil_container); 
	loadImages(queue.getResult("ciruit_diagram"),"ciruit_diagram",stage_width/25,stage_height/70,0.29,"",0,circular_coil_container); 

    
	loadImages(queue.getResult("zoomed_background"),"zoomed_background",stage_width/2,stage_height/2.1,1.95,"",0,initial_view_container);
	loadImages(queue.getResult("zoomed_black_round"),"zoomed_black_round",stage_width/1.98,stage_height/1.96,0.88,"",0,initial_view_container);
	loadImages(queue.getResult("zoomed_measures"),"zoomed_measures",stage_width/2,stage_height/1.95,0.685,"",0,initial_view_container);
	loadImages(queue.getResult("zoomed_black_needle_base"),"zoomed_black_needle_base",stage_width/2,stage_height/1.98,0.209,"",200,initial_view_container);
	loadImages(queue.getResult("zoomed_needle"),"zoomed_needle",stage_width/1.975,stage_height/1.962,0.62,"",200,initial_view_container);
	loadImages(queue.getResult("zoomed_needle_top"),"zoomed_needle_top",stage_width/2.1,stage_height/2.1,0.0557,"",0,initial_view_container);
	loadImages(queue.getResult("zoomed_glacing"),"zoomed_glacing",stage_width/13.2,stage_height/12.1,0.865,"",0,initial_view_container);
    
	/** Textbox loading */
	setText("voltmeterTxt",stage_width/2.43,stage_height/3.48,"0","black",stage_width/450,circular_coil_container);
	setText("voltmeterSymbol",stage_width/2.1,stage_height/3.34,"A","black",stage_width/700,circular_coil_container);
}


/** Assigning the names for each wire */
function getWiresName(){
    white1=circular_coil_container.getChildByName("white_keybox_to_key1");
    white2=circular_coil_container.getChildByName("white_keybox_to_key2");
    white3=circular_coil_container.getChildByName("white_keybox_to_key3");
    white4=circular_coil_container.getChildByName("white_keybox_to_key4");
    black1=circular_coil_container.getChildByName("black_keybox_to_key1");
    black2=circular_coil_container.getChildByName("black_keybox_to_key2");
    black3=circular_coil_container.getChildByName("black_keybox_to_key3");
    black4=circular_coil_container.getChildByName("black_keybox_to_key4");
    wires_array = [[white2,black1],[white3,black2],[white4,black3],[white3,black1],[white4,black2],[white4,black1]];
}