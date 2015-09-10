/** js file for define the functions.
    *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
    *VALUE (Virtual Amrita Laboratories Universalizing Education)
    *Amrita University, India
    *http://www.amrita.edu/create
    *author:Anitha;
    *Date of modified: 7-08-2015
*/
/** Variables declaration */
var circular_coil_stage, exp_canvas, stage_width, stage_height;

var radiusLabel,compassLabel,line_flag,line,wire_numbers,insert_key_flag,reverse_key_flag;

var rotate_compass_float,rotate_apparatus_float;

var no_turns_array = [];

var wires_array = []; /** Connecting wire image id's in this array */

var magneticfield_float,number_of_turns,tesla_float,radius_float,diameter_float,p,current_int,rhvalue_int,voltage_int,permeability,theta_float;

var gt; /** Object for Gettext.js */

var circular_coil_container,initial_view_container;

var progressText = new createjs.Text("", "2em Tahoma, Geneva, sans-serif", "#000000");
/** Variable declaration ends */

/** Start controls for Circular coil apparatus */
$(document).ready(function() {
    gt = new Gettext({
        'domain': 'messages'
    });
    no_turns_array = [10,15,20,25,35,45]; /** Items for the drop down */
    $("#expName").html(_("Circular coil apparatus")); /** Experiment name */
    exp_canvas = document.getElementById("experimentCanvas");
    exp_canvas.width = $("#canvasBox").width();
    exp_canvas.height = $("#canvasBox").height();
    stage_width = exp_canvas.width; /** Set stage width and height as canvas width and height */
    stage_height = exp_canvas.height;
    circular_coil_stage = new createjs.Stage(exp_canvas); /** Initialize createjs stage */
    createjs.Touch.enable(circular_coil_stage);
    /** Createjs cannot trigger mouse evnt automatically. Enabled mouse over / out events */
    circular_coil_stage.enableMouseOver(10);
    circular_coil_stage.mouseMoveOutside = true; /** Keep tracking the mouse even when it leaves the canvas */
    progressText.x = stage_width / 2.4 - progressText.getMeasuredWidth() / 2; /** Adding the Loading percentage text */
    progressText.y = stage_width / 2.4;
    circular_coil_stage.addChild(progressText); /** Add text to progress bar */
    
    circular_coil_container=new createjs.Container(); /** Creating the circular coil container */
    circular_coil_container.name="circular_coil_container";
    circular_coil_stage.addChild(circular_coil_container); /** Append it in the stage */
    
    compassbox_move_container=new createjs.Container(); /** Creating the compass box move container */
    compassbox_move_container.name="compassbox_move_container";
    circular_coil_stage.addChild(compassbox_move_container); /** Append it in the stage */
    
    initial_view_container=new createjs.Container(); /** Creating the initial view container */
    initial_view_container.name="initial_view_container";
    circular_coil_stage.addChild(initial_view_container); /** Append it in the stage */
    initial_view_container.alpha=0;
   
    circleDeclaration(); /** Circle declaration for connect the wires is created in this function */
    line = new createjs.Shape(); /** Line is created for connect the wires */
    
    queue = new createjs.LoadQueue(true); /** Initialize the queue */
    queue.on("progress", handleProgress); /** Loading progress bar */
    queue.on("complete", handleComplete, this);
    queue.loadManifest([{
	/** adding images into the queue */
        id: "background",
        src: simPath + "/images/background.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "clock_to_move",
        src: simPath + "/images/clock_to_move.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "needle",
        src: simPath + "/images/needle.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "black_needle_knob",
        src: simPath + "/images/black_needle_knob.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "clock_glacing",
        src: simPath + "/images/clock_glacing.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "upper_round_clock",
        src: simPath + "/images/upper_round_clock.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "rheostat_top_move",
        src: simPath + "/images/rheostat_top_move.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "main_key",
        src: simPath + "/images/main_key.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "main_key_top",
        src: simPath + "/images/main_key_top.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "round_key1",
        src: simPath + "/images/round_key1.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "round_key2",
        src: simPath + "/images/round_key2.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "round_key3",
        src: simPath + "/images/round_key3.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "round_key4",
        src: simPath + "/images/round_key4.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "battery_to_voltmeter",
        src: simPath + "/images/battery_to_voltmeter.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "battery_to_keyport",
        src: simPath + "/images/battery_to_keyport.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "keyport_to_rheostat",
        src: simPath + "/images/keyport_to_rheostat.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "rheostat_to_round_keybox",
        src: simPath + "/images/rheostat_to_round_keybox.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "round_keybox_to_voltmeter",
        src: simPath + "/images/round_keybox_to_voltmeter.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "white_keybox_to_key1",
        src: simPath + "/images/white_keybox_to_key1.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "white_keybox_to_key2",
        src: simPath + "/images/white_keybox_to_key2.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "white_keybox_to_key3",
        src: simPath + "/images/white_keybox_to_key3.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "white_keybox_to_key4",
        src: simPath + "/images/white_keybox_to_key4.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "black_keybox_to_key1",
        src: simPath + "/images/black_keybox_to_key1.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "black_keybox_to_key2",
        src: simPath + "/images/black_keybox_to_key2.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "black_keybox_to_key3",
        src: simPath + "/images/black_keybox_to_key3.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "black_keybox_to_key4",
        src: simPath + "/images/black_keybox_to_key4.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "ciruit_diagram",
        src: simPath + "/images/ciruit_diagram.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "zoomed_background",
        src: simPath + "/images/zoomed_background.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "zoomed_black_round",
        src: simPath + "/images/zoomed_black_round.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "zoomed_measures",
        src: simPath + "/images/zoomed_measures.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "zoomed_black_needle_base",
        src: simPath + "/images/zoomed_black_needle_base.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "zoomed_needle",
        src: simPath + "/images/zoomed_needle.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "zoomed_needle_top",
        src: simPath + "/images/zoomed_needle_top.svg",
        type: createjs.LoadQueue.IMAGE
    }, {
        id: "zoomed_glacing",
        src: simPath + "/images/zoomed_glacing.svg",
        type: createjs.LoadQueue.IMAGE
    }]);
    tick = setInterval(updateTimer, 100); /** Stage update function in a timer */
});

/** Initialize gettext function. Translate the string can be done by adding _ before the text */
var _ = function(msgid) {
    return gt.gettext(msgid);
};

/** Createjs stage updation happens in every interval */
function updateTimer() {
    circular_coil_stage.update();
}

/** Function for display the progress of loading */
function handleProgress(event) {
    progressText.text = (queue.progress * 100 | 0) + " % Loaded";
}

/** All variables initialising in this function */
function initialisationOfVariables() {
    wire_numbers=0; /** Count of wires */
    magneticfield_float=0.0001256; /** Variables for calculation */
    number_of_turns=10;
    tesla_float=0.000035;
    radius_float=0.05;
    permeability_const=0.000001256;
    current_int=1;
    rhvalue_int=5;
    voltage_int=5;
    permeability=0;
    diameter_float=0;
    theta_float=0;  
    circular_coil_container.alpha=1; /** Initially displayed the circular coil container and compass box move container */
    compassbox_move_container.alpha=1;
    initial_view_container.alpha=0; /** Initial view container is not displayed initially */
    line_flag=false; /** Draw line flag for connect wires */
    insert_key_flag=false; /** Insert key and reverse key flag */
    reverse_key_flag=false; 
    $("#rotateCompass,#rotateApparatus").html("");
    $("#showNormal,#zoomCompass,#rotateCompassSlider,#rotateApparatusSlider").css("display", "none"); 
    $("#checkBox").prop("checked", false); /** Resetting the check box */
    $("#radiusSlider").val(5); /** Slider values */
    $("#compassBoxSlider").val(0);
    $("#rheostatSlider").val(0);
    $("#rotateCompassSlider").val(0);
    $("#rotateApparatusSlider").val(61);
	radiusLabel=_("Radius of the coil");
	compassLabel=_("Compass box position");   
	$("#radiusOfCoil").html(radiusLabel+" "+5+_("cm")); 
    $("#compassBoxPos").html(compassLabel+" "+0+_("cm"));
    $("#adjustRheostat").html(_("Adjust rheostat"));
    initial_view_container.getChildByName("zoomed_background").rotation=0; /** Set rotation 0 */
    initial_view_container.getChildByName("zoomed_black_round").rotation=0;
    initial_view_container.getChildByName("zoomed_measures").rotation=0;
    circular_coil_container.getChildByName("voltmeterTxt").text=0;
    /** Following buttons and sliders are disabled first except initial adjustment button */
    $("#dropdown,#insertKey,#reverseCurrent,#radiusSlider,#compassBoxSlider,#rheostatSlider,#rotateApparatusSlider,#checkBox").attr('disabled', 'disabled').css({
        "opacity": 0.5,
        "cursor": "default"
    });
    $("#initialAdjustment").attr('disabled', false).css({
        "opacity":1,
        "cursor":"pointer"
    });
}

/** Set the initial status of the bitmap and text depends on its visibility and initial values */
function initializeImages() {
    circular_coil_container.getChildByName("battery_to_voltmeter").visible=false;
    circular_coil_container.getChildByName("battery_to_keyport").visible=false;
    circular_coil_container.getChildByName("keyport_to_rheostat").visible=false;
    circular_coil_container.getChildByName("rheostat_to_round_keybox").visible=false;
    circular_coil_container.getChildByName("round_keybox_to_voltmeter").visible=false;
    circular_coil_container.getChildByName("white_keybox_to_key1").visible=false;
    circular_coil_container.getChildByName("white_keybox_to_key2").visible=false;
    circular_coil_container.getChildByName("white_keybox_to_key3").visible=false;
    circular_coil_container.getChildByName("white_keybox_to_key4").visible=false;
    circular_coil_container.getChildByName("black_keybox_to_key1").visible=false;
    circular_coil_container.getChildByName("black_keybox_to_key2").visible=false;
    circular_coil_container.getChildByName("black_keybox_to_key3").visible=false;
    circular_coil_container.getChildByName("black_keybox_to_key4").visible=false;
    circular_coil_container.getChildByName("round_key2").visible=false;
    circular_coil_container.getChildByName("round_key4").visible=false;
    circular_coil_container.getChildByName("main_key").visible=false;
}

/** Loading the images and initialize the html control events */
function handleComplete(event) {    
	loadImagesTexts(); /** Images loading in the canvas from load_images_texts.js */
    getWiresName(); /** Get the names of the connection wires in variables from load_images_texts.js */
	initialisationOfVariables(); /** Initialize each variable with the initial value */
    addintoDropDown($('#dropdown'), no_turns_array); /** Adding elements in drop down */
    controlsHandle(); /** All controls are handle by this function */
    initializeImages(); /** Function call for images used in the apparatus visibility */
}

/** All controls are handle by this function */
function controlsHandle() {
    /** Translate the stings used in the experiment by adding '_' before it. This is done for language translation. */
    $("#variables").html(_("Variables"));
    $("#measurements").html(_("Result"));
    $("#noOfTurnsCoils").html(_("Number of turns of the coil"));
    $("#initialAdjustment").val(_("Initial Adjustment"));
    $("#insertKey").val(_("Insert Key"));
    $("#reverseCurrent").val(_("Reverse Current"));
    $("#rotateCompassSlider").css("display", "none");
    $("#rotateApparatusSlider").css("display", "none");       
	$("#radiusOfCoil").html(radiusLabel+" "+5+_("cm")); 
    $("#compassBoxPos").html(compassLabel+" "+0+_("cm"));
    $("#adjustRheostat").html(_("Adjust rheostat"));
    $("#showResult").html(_("Show Result"));
    $("#resetBtn").val(_("Reset"));
    $("#showNormal").val(_("Show Normal"));
    $("#zoomCompass").val(_("Zoom compass box"));
    
    $("#initialAdjustment").on("click", function() { /** While clicking on initial adjustment button */
        zoomCompassBox(); /** The compass box zoomed in this function */
    });
    
    $("#showNormal").on("click", function() { /** While clicking on show normal button */
        $("#rotateCompass,#rotateApparatus").html("");
        $("#rotateCompassSlider,#rotateApparatusSlider").css("display", "none");
        circular_coil_container.alpha=1; /** Set alpha 1 of circular coil and compass box move containers */
        compassbox_move_container.alpha=1;
        initial_view_container.alpha=0; /** Initial view container not displayed */
        circular_coil_stage.getChildByName("upper_round_clock").visible=true;
        $("#showNormal").css("display","none");
        if ( $("#rotateApparatusSlider").val() == 81 ) {
            createCircleForConnection(); /** Ready for wire connection */
            $("#initialAdjustment,#rotateCompassSlider,#rotateApparatusSlider").attr('disabled', true).css({
                "opacity":0.5,
                "cursor":"default"
            });
            $("#zoomCompass").css("display", "block");
        }
    });
    
    $("#zoomCompass").on("click", function() { /** While clicking on zoom compass box button */
        zoomCompassBox(); /** The compass box zoomed in this function */
    });
    
    $("#checkBox").click(function() { /** Show result check box function */
        if ($("#checkBox").attr('checked')) {
            $("#resultText").html(_("Magnetic field at x,B(T)"));
            showresultFN(); /** Function for display the result */
        } else {
            $("#resultText,#resultValue").html("");
        }
    });
    
    $("#insertKey").on("click", function() { /** Insert key button click event */
        if ( !insert_key_flag ) {
            circular_coil_container.getChildByName("main_key").visible=true;
            circular_coil_container.getChildByName("voltmeterTxt").text=1;
            $("#insertKey").val(_("Remove Key")); /** Button value changed as Remove key */
            $("#dropdown,#reverseCurrent,#radiusSlider,#compassBoxSlider,#rheostatSlider,#checkBox").attr('disabled',false).css({
                "opacity":1,
                "cursor":"pointer"
            }); /** Enabled the sliders and buttons */
            insert_key_flag=true; /** Set insert key flag as true */
        } else {
            circular_coil_container.getChildByName("main_key").visible=false;
            circular_coil_container.getChildByName("voltmeterTxt").text=0;
            $("#insertKey").val(_("Insert Key")); /** Button value changed as Insert key */
            $("#dropdown,#reverseCurrent,#radiusSlider,#compassBoxSlider,#rheostatSlider,#checkBox").attr('disabled',true).css({
                "opacity":0.5,
                "cursor":"default"
            }); /** Disabled the sliders and buttons */
            insert_key_flag=false; /** Set insert key flag as false */
        }        
    });
    
    $("#reverseCurrent").on("click", function() { /** Reverse current button click event */
        if ( !reverse_key_flag ) {
            circular_coil_container.getChildByName("round_key1").visible=false;
            circular_coil_container.getChildByName("round_key3").visible=false;
            circular_coil_container.getChildByName("round_key2").visible=true;
            circular_coil_container.getChildByName("round_key4").visible=true;
            reverse_key_flag=true; /** Set reverse key flag as true */
        } else {
            circular_coil_container.getChildByName("round_key1").visible=true;
            circular_coil_container.getChildByName("round_key3").visible=true;
            circular_coil_container.getChildByName("round_key2").visible=false;
            circular_coil_container.getChildByName("round_key4").visible=false;
            reverse_key_flag=false; /** Set reverse key flag as false */
        }
    });
    
    $("#rotateCompassSlider").change(function() { /** Rotate compass slider change */
        rotateCompassSliderFN(); /** Rotate compass slider change function */
    });
    
    $("#rotateApparatusSlider").change(function() { /** Rotate apparatus slider change */
        rotateApparatusSliderFN(); /** Rotate apparatus slider change function */
    });
    
    $("#radiusSlider").change(function() { /** Radius slider change */
        $("#radiusOfCoil").html(radiusLabel+" "+$("#radiusSlider").val()+_("cm")); 
        radius_float=$("#radiusSlider").val()/100;
        magneticFieldCalculation(); /** Finding the magnetic field in this function */
    });
    
    $("#compassBoxSlider").change(function() { /** Compass box slider change */
        compassBoxSliderFN(); /** Compass box slider change function */
    });
    
    $("#rheostatSlider").change(function() { /** Adjust rheostat slider change */
        rhvalue_int=$("#rheostatSlider").val(); 
        var _rotation_count=stage_width/3.196+(Number(rhvalue_int)*2.4);
        circular_coil_container.getChildByName("rheostat_top_move").x=_rotation_count; /** Changing the position of rheostat switch */ magneticFieldCalculation(); /** Finding the magnetic field in this function */     
    });
    
    $("#resetBtn").on("click", function(){ /** Reset button click event */
        resetExperiment(); /** Function for reset the experiment */
    });
    
    $("#dropdown").change(function() { /** Drop down change */
        for ( i=0; i<wires_array.length; i++ ) {
            wires_array[i][0].visible=false;        
            wires_array[i][1].visible=false;
        }
        wires_array[this.selectedIndex][0].visible=true;        
        wires_array[this.selectedIndex][1].visible=true; 
        number_of_turns = $(this).find('option:selected').text();
	});
}

/** All the images loading and added to the stage */
function loadImages(image, name, xPos, yPos, sFactor, cursor, rotationX, container){
    var bitmap = new createjs.Bitmap(image).set({});
    getBoundFn(name, bitmap, sFactor);
    bitmap.x = xPos;
    bitmap.y = yPos;
    bitmap.name = name;
    bitmap.alpha = 1;
    if ( name == "zoomed_measures" || name == "zoomed_background" || name == "zoomed_black_round" || name == "zoomed_measures" || name == "zoomed_needle" || name == "zoomed_black_needle_base" || name == "black_needle_knob" || name == "needle" ) {
		bitmap.regX = bitmap.image.width/2;
		bitmap.regY = bitmap.image.height/2;
	}
    bitmap.rotation = rotationX;
    bitmap.cursor = cursor;
    container.addChild(bitmap); /** Adding bitmap to the container */
}

/** All the texts loading and added to the stage */
function setText(name, textX, textY, value, color, fontSize, container){
    var text = new createjs.Text(value, "bold " + fontSize + "em Tahoma, Geneva, sans-serif", color);
    text.x = textX;
    text.y = textY;
    text.textBaseline = "alphabetic";
    text.name = name;
    text.text = value;
    text.color = color;
    container.addChild(text); /** Adding text to the container */
}

/** Image scaling function. Scale the bitmap depend upon the scaling factor. */
function getBoundFn(name, bitmap, sFactor){
    var bounds = bitmap.getBounds();
    scaleFactor = Math.min(stage_width / bounds.width, stage_height / bounds.height);
    bitmap.scaleX = bitmap.scaleY = sFactor * scaleFactor;
    console.log(name,bitmap.scaleX,bitmap.scaleY )
}

/** The compass box zoomed and some more sliders displayed in this function */
function zoomCompassBox(){
    $("#rotateCompass").html(_("Rotate compass box"));
    $("#rotateApparatus").html(_("Rotate apparatus"));
    $("#rotateCompassSlider,#rotateApparatusSlider").css("display", "block");
    circular_coil_container.alpha=0; /** Circular coin container and compass box container alpha set as 0 */
    compassbox_move_container.alpha=0;
    initial_view_container.alpha=1; /** Initial view container displayed */
    circular_coil_stage.getChildByName("upper_round_clock").visible=false;
    $("#showNormal").css("display","block");
    $("#zoomCompass").css("display","none");
}

/** Adding items to the drop down box */
function addintoDropDown(getId, valueSet){
	var selected = getId;
	$.each(valueSet, function(val, text) {
		selected.append(
		$('<option></option>').val(val).html(text));
	});
}

/** Circle declarations for connect the wires is created in this function */
function circleDeclaration(){
	voltmeter_circle1=new createjs.Shape();
	voltmeter_circle2=new createjs.Shape();
	battery_circle1=new createjs.Shape();
	battery_circle2=new createjs.Shape();
	key_circle1=new createjs.Shape();
	key_circle2=new createjs.Shape();
	rheostat_circle1=new createjs.Shape();
	rheostat_circle2=new createjs.Shape();
	keybox_circle1=new createjs.Shape();
	keybox_circle2=new createjs.Shape();
	keybox_circle3=new createjs.Shape();
	keybox_circle4=new createjs.Shape();
	compassbox_circle1=new createjs.Shape();
	compassbox_circle2=new createjs.Shape();
}

/** Create circle functions */
function createCircleForConnection(){
	drawShapeArc(voltmeter_circle1,"voltmeter_circle1",stage_width/2.5,stage_height/3.05,"red",20,circular_coil_container);
	drawShapeArc(voltmeter_circle2,"voltmeter_circle2",stage_width/1.975,stage_height/3.05,"#025782",20,circular_coil_container);
	drawShapeArc(battery_circle1,"battery_circle1",stage_width/5.2,stage_height/3.09,"red",20,circular_coil_container);
	drawShapeArc(battery_circle2,"battery_circle2",stage_width/13.5,stage_height/3.09,"black",20,circular_coil_container);
	drawShapeArc(key_circle1,"key_circle1",stage_width/11.5,stage_height/1.62,"black",20,circular_coil_container);
	drawShapeArc(key_circle2,"key_circle2",stage_width/6.8,stage_height/1.62,"white",20,circular_coil_container);
	drawShapeArc(rheostat_circle1,"rheostat_circle1",stage_width/2.82,stage_height/1.215,"white",20,circular_coil_container);
	drawShapeArc(rheostat_circle2,"rheostat_circle2",stage_width/1.338,stage_height/1.45,"#869218",20,circular_coil_container);
	drawShapeArc(keybox_circle2,"keybox_circle2",stage_width/2.03,stage_height/1.95,"#869218",20,circular_coil_container);
	drawShapeArc(keybox_circle4,"keybox_circle4",stage_width/2.48,stage_height/1.95,"#025782",20,circular_coil_container);
	drawShapeArc(keybox_circle1,"keybox_circle1",stage_width/2.24,stage_height/2.03,"white",20,circular_coil_container);
	drawShapeArc(keybox_circle3,"keybox_circle3",stage_width/2.21,stage_height/1.87,"black",20,circular_coil_container);
	drawShapeArc(compassbox_circle1,"compassbox_circle1",stage_width/1.49,stage_height/2.27,"black",20,circular_coil_container);
	drawShapeArc(compassbox_circle2,"compassbox_circle2",stage_width/1.49,stage_height/2.4,"white",20,circular_coil_container);
}

/** Create circle shape here */
function drawShapeArc(shapeName,name,xPos,yPos,color,radius,container){
	container.addChild(shapeName);		
	shapeName.name=name;
	shapeName.cursor="pointer";
	shapeName.alpha = 0.01;
	initialX=xPos;
	initialY=yPos;
	shapeName.graphics.setStrokeStyle(2);
	shapeName.graphics.beginFill(color).drawCircle(0, 0, radius);	
	shapeName.x=xPos;
	shapeName.y=yPos;	
	shapeName.on("mousedown", function(evt) {
		shapeName.alpha=0.1;
		this.parent.addChild(this);
		this.offset = {x:this.x-evt.stageX/circular_coil_stage.scaleX, y:this.y-evt.stageY/circular_coil_stage.scaleY};
	});
	shapeName.on("pressmove", function(evt) {
		shapeName.alpha=0.01;
		this.x = (evt.stageX/circular_coil_stage.scaleX)+ this.offset.x;
		this.y = (evt.stageY/circular_coil_stage.scaleY)+ this.offset.y;
		shapeName.x=this.x;
		shapeName.y=this.y;
		line.graphics.clear();
		if ( line_flag == false ) {
            line.graphics.moveTo(xPos,yPos).setStrokeStyle(3).beginStroke(color).lineTo(this.x,this.y);
            container.addChild(line);
		}
		shapeName.on("pressup", function(evt){
			line.graphics.clear();
			shapeName.alpha=0.01;
			shapeName.x=xPos;
			shapeName.y=yPos;
			line.graphics.clear();
			if ( line_flag ) {
                wire_numbers++;
                checkConnectionComplete(); /** Check the connection complete or not */
                line_flag=false; /** Set line flag as false */
            }
		});		
		shapeName.on("mouseup", function(evt){	
            shapeName.alpha=0.01;		
			shapeName.x=xPos;
			shapeName.y=yPos;			
			line.graphics.clear();
			line.graphics.clear();
		});
		checkHitLead(name); /** Check hit occur in lead with wires */
	});
}

/** Lead hit with wires */
function checkHitLead(name){ 
	switch ( name ) { /** Hit check with one spot to other */
		case "voltmeter_circle1":checkHit(circular_coil_container.getChildByName("battery_circle1"),"battery_to_voltmeter",name);
	    break;
        case "battery_circle1":checkHit(circular_coil_container.getChildByName("voltmeter_circle1"),"battery_to_voltmeter",name);
	    break;
        case "battery_circle2":checkHit(circular_coil_container.getChildByName("key_circle1"),"battery_to_keyport",name);
	    break;
        case "key_circle1":checkHit(circular_coil_container.getChildByName("battery_circle2"),"battery_to_keyport",name);
	    break;
        case "key_circle2":checkHit(circular_coil_container.getChildByName("rheostat_circle1"),"keyport_to_rheostat",name);
	    break;
        case "rheostat_circle1":checkHit(circular_coil_container.getChildByName("key_circle2"),"keyport_to_rheostat",name);
	    break;
        case "rheostat_circle2":checkHit(circular_coil_container.getChildByName("keybox_circle2"),"rheostat_to_round_keybox",name);    
        break;
        case "keybox_circle2":checkHit(circular_coil_container.getChildByName("rheostat_circle2"),"rheostat_to_round_keybox",name);
	    break;
        case "keybox_circle4":checkHit(circular_coil_container.getChildByName("voltmeter_circle2"),"round_keybox_to_voltmeter",name);    
        break;
        case "voltmeter_circle2":checkHit(circular_coil_container.getChildByName("keybox_circle4"),"round_keybox_to_voltmeter",name);
	    break;
        case "keybox_circle1":checkHit(circular_coil_container.getChildByName("compassbox_circle2"),"white_keybox_to_key2",name);    
        break;
        case "compassbox_circle2":checkHit(circular_coil_container.getChildByName("keybox_circle1"),"white_keybox_to_key2",name);
	    break;
        case "keybox_circle3":checkHit(circular_coil_container.getChildByName("compassbox_circle1"),"black_keybox_to_key1",name);    
        break;
        case "compassbox_circle1":checkHit(circular_coil_container.getChildByName("keybox_circle3"),"black_keybox_to_key1",name);
	    break;
    }
}

/** Hit check function */
function checkHit(spot,wire,name){
	var ptL = spot.globalToLocal(circular_coil_stage.mouseX,circular_coil_stage.mouseY);
	if (spot.hitTest(ptL.x, ptL.y)){
		line_flag=true;
		line.graphics.clear();
		circular_coil_container.removeChild(line);	
		circular_coil_container.getChildByName(wire).visible=true;	
		spot.mouseEnabled = false;
		circular_coil_container.getChildByName(name).mouseEnabled = false;	
	}	
}

/** Check the connection complete or not */
function checkConnectionComplete(){
    if ( wire_numbers == 7 ) {
        $("#insertKey").attr('disabled',false).css({
            "opacity":1,
            "cursor":"pointer"
        });
    }
}

/** Resetting the experiment */
function resetExperiment(){
    window.location.reload();
}

/** Rotate compass slider changing function */
function rotateCompassSliderFN(){
    rotate_compass_float = $("#rotateCompassSlider").val();
	if ( rotate_compass_float == 61 ){ /** If compass rotation 61 or measurement 20 */  
		$("#rotateApparatusSlider").attr('disabled', false).css({
            "opacity": 1,
            "cursor": "pointer"
        });
	} else {
		$("#rotateApparatusSlider").attr('disabled', 'disabled').css({
            "opacity": 0.5,
            "cursor": "default"
        });
	}
    initial_view_container.getChildByName("zoomed_measures").rotation=rotate_compass_float; /** Measure change */
}

/** Rotate apparatus slider changing function */
function rotateApparatusSliderFN(){
    rotate_apparatus_float = $("#rotateApparatusSlider").val();
    initial_view_container.getChildByName("zoomed_background").rotation=rotate_apparatus_float-61; /** Rotation of full apparatus */
    initial_view_container.getChildByName("zoomed_black_round").rotation=rotate_apparatus_float-61;
    initial_view_container.getChildByName("zoomed_measures").rotation=rotate_apparatus_float;
}

/** Compass box move slider */
function compassBoxSliderFN(){
    diameter_float=$("#compassBoxSlider").val()/100;
    $("#compassBoxPos").html(compassLabel+" "+$("#compassBoxSlider").val()+_("cm")); 
    var _scalex = 0.995-($("#compassBoxSlider").val()/650);
    var _scaley = 1.04-($("#compassBoxSlider").val()/70);
    compassbox_move_container.scaleX = _scalex; /** Scaling the compass box move container */
    compassbox_move_container.scaleY = _scaley;
    magneticFieldCalculation(); /** Finding the magnetic field in this function */ 
    initial_view_container.getChildByName("zoomed_needle").rotation=$("#compassBoxSlider").val();
    initial_view_container.getChildByName("zoomed_black_needle_base").rotation=$("#compassBoxSlider").val();
    compassbox_move_container.getChildByName("black_needle_knob").rotation=$("#compassBoxSlider").val();
    compassbox_move_container.getChildByName("needle").rotation=$("#compassBoxSlider").val();
}

/** Calculations starts here */
/** Function for display the result */
function showresultFN(){
    if ( insert_key_flag == true ) {     
        var magneticfield_exponent=magneticfield_float.toExponential(2); /** Calculated value set to exponent */
        if (magneticfield_exponent.indexOf("e")!=-1) {
            var magneticfieldSplitedArr=magneticfield_exponent.split("e"); /** Splitting of the value and 'e' */       
            var magneticfield_value=magneticfieldSplitedArr[0];        
            var exponent_value=magneticfieldSplitedArr[1];        
            var result_value=magneticfield_value+" x 10 "+ exponent_value;
        }    
        $("#resultValue").html(result_value); /** Display the result */
    }
}
	
/** Finding the magnetic field in this function */ 	
function magneticFieldCalculation(){        
    current_int=voltage_int/rhvalue_int; 
    circular_coil_container.getChildByName("voltmeterTxt").text=current_int.toFixed(3); /** Voltmeter reading */    
    permeability=permeability_const*Math.pow(radius_float,2)*number_of_turns*current_int; /** Permeability calculation */    
    var _rX_calc=Math.pow(Math.pow(radius_float,2)+Math.pow(diameter_float,2),3/2);    
    var _theta_calc=(permeability_const*Math.pow(radius_float,2)*number_of_turns*current_int)/(2*tesla_float*_rX_calc);    
    theta_float=180*(Math.atan(_theta_calc))/3.14; /** Theta calculation */
    magneticfield_float=(tesla_float*_theta_calc);   
}

/** Calculation ends here */