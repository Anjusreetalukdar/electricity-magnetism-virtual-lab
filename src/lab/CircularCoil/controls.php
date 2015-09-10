<!--
  *Developed by Amrita CREATE (Center for Research in Advanced Technologies for Education),
  *VALUE (Virtual Amrita Laboratories Universalizing Education)
  *Amrita University, India
  *http://www.amrita.edu/create
  *author:Anitha;
  *Date of modified: 7-08-2015
-->
<ul>
<li><h1 id="variables">Variables<span></span></h1>
<div class="varBox">
    <p class="sliderText textIndend" id="noOfTurnsCoils"></p>
    <span class="selectContainer">
    <select class="comboBoxClass" id="dropdown">
    </select>
    </span>
    
    <input class="submitBtns" type="button" value="" id="initialAdjustment">
    <input class="submitBtns" type="button" value="" id="insertKey">
    <input class="submitBtns" type="button" value="" id="reverseCurrent">
    
	<p class="sliderText textIndend" id="radiusOfCoil"></p>
        <input id="radiusSlider" class="sliderClass" type="range" min="5" max="10" step="0.1" value=""/>   
    <div class="rangeVals">
        <span class="minrange" id="minimumRange">5</span><span class="maxrange" id="maximumRange">10</span>
    </div>
    
    <p class="sliderText textIndend" id="compassBoxPos"></p>
        <input id="compassBoxSlider" class="sliderClass" type="range" min="-25" max="25" step="1" value=""/>   
    <div class="rangeVals">
        <span class="minrange" id="minimumRange">-25</span><span class="maxrange" id="maximumRange">25</span>
    </div>
    
    <p class="sliderText textIndend" id="adjustRheostat"></p>
        <input id="rheostatSlider" class="sliderClass" type="range" min="5" max="100" step="1" value=""/>   
    <div class="rangeVals">
        <span class="minrange" id="minimumRange">min</span><span class="maxrange" id="maximumRange">max</span>
    </div>
    
    <p class="sliderText textIndend" id="rotateCompass"></p>
    <input id="rotateCompassSlider" class="sliderClass" type="range" min="0" max="360" step="1" value=""/>   
    
    <p class="sliderText textIndend" id="rotateApparatus"></p>
    <input id="rotateApparatusSlider" class="sliderClass" type="range" min="0" max="360" step="1" value=""/>
    
    <input type="checkbox"  id="checkBox" class="nrmlChkBox" name="testOne">
    <p class="chkBoxText menuContainer" id="showResult"></p>
    
	<input class="submitBtns" type="button" value="" id="resetBtn">
    
</div>  
<br/>
</li>
<li style="overflow:visible;"><h1 id="measurements">Measurements</h1>
<div class="varBox">
   <p class="sliderText textIndend" id="resultText"></p>
   <p class="sliderText textIndend" id="resultValue"></p>
</div>
</li>
</ul>