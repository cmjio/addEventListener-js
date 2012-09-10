/**
 * Edge.js
 */
function $(elm){

	var about = {
		version: '0.1a',
		author: 'Chris Johnson'
	};

	this.vendorPrefixes = ['-webkit-','-moz-','-ms-','-o-'];

	if(typeof elm == 'string'){

		if (window === this) {
			return new $(elm);
		}

		if(elm instanceof HTMLElement){
			this.e = elm
			return this;
		}else{
			if(elm.charAt(0) === '#'){
				elm = elm.substr(1);
				this.e = document.getElementById(elm);
			}
			else if(elm.charAt(0) === '.'){
				elm = elm.substr(1);
				this.e = document.getElementsByClassName(elm);
			}
			else if(elm.charAt(0) === '['){
				console.log(elm)
			}
		}
		return this;

	}else{
		return about;
	}
}	

$.prototype = {

	hide: function(){
		this.e.style.display = 'none';
		return this;
	},

	show: function(){
		this.e.style.display = '';
		return this;
	},

	bind: function(type, callback){
		switch(type){
			case 'click':
				this.e.addEventListener('click', callback);
				return this;
				break;
			case 'mousedown':
				this.e.addEventListener('mousedown', callback);
				return this;
				break;
			case 'mouseup':
				this.e.addEventListener('mouseup', callback);
				return this;
				break;
			case 'mousemove':
				this.e.addEventListener('mousemove', callback);
				return this;
				break;
			case 'mouseover':
				this.e.addEventListener('mouseover', callback);
				return this;
				break;
			case 'mouseout':
				this.e.addEventListener('mouseout', callback);
				return this;
				break;
			case 'keydown':
				this.e.addEventListener('keydown', callback);
				return this;
				break;
			case 'keyup':
				this.e.addEventListener('keyup', callback);
				return this;
				break;
			case 'keypress':
				this.e.addEventListener('keypress', callback);
				return this;
				break;
			case 'abort':
				this.e.addEventListener('abort', callback);
				return this;
				break;
			case 'change':
				this.e.addEventListener('change', callback);
				return this;
				break;
			case 'error':
				this.e.addEventListener('error', callback);
				return this;
				break;
			case 'load':
				this.e.addEventListener('load', callback);
				return this;
				break;
			case 'reset':
				this.e.addEventListener('reset', callback);
				return this;
				break;
			case 'resize':
				this.e.addEventListener('resize', callback);
				return this;
				break;
			case 'scroll':
				this.e.addEventListener('scroll', callback);
				return this;
				break;
			case 'submit':
				this.e.addEventListener('submit', callback);
				return this;
				break;
			case 'unload':
				this.e.addEventListener('unload', callback);
				return this;
				break;
		}
	},

	touch: function(type, callback){
		switch(type){
			case 'touchstart':
				this.e.addEventListener('touchstart', callback, false);
				return this;
				break;
			case 'touchend':
				this.e.addEventListener('touchend', callback, false);
				return this;
				break;
			case 'touchcancel':
				this.e.addEventListener('touchcancel', callback, false);
				return this;
				break;
			case 'touchleave':
				this.e.addEventListener('touchleave', callback, false);
				return this;
				break;
			case 'touchmove':
				this.e.addEventListener('touchmove', callback, false);
				return this;
				break;
		}
	},

	gesture: function(type, callback){
		if(typeof type == 'string'){

			var  startX, startY, lastX, lastY, target, lastEvt;

			function resetXY(){
				startX = null,
				startY = null,
				lastX = null,
				lastY = null,
				target = null,
				lastEvt = null;
			}

			switch(type){
				case 'swipeLeft':
					this.e.addEventListener('touchstart', sltouchStart, false);
					this.e.addEventListener('touchmove', sltouchMove, false);
					this.e.addEventListener('touchend', sltouchEnd, false);
					function sltouchStart(evt){
						startX = evt.targetTouches[0].clientX;
						startY = evt.targetTouches[0].clientY;
						target = evt.target;
					}
					function sltouchMove(evt){
						lastX = evt.targetTouches[0].clientX;
						lastY = evt.targetTouches[0].clientY;
						lastEvt = evt;	
					}
					function sltouchEnd(evt){					
						if(lastX !== null){
							if(lastX < startX && target == evt.target){
								callback(lastEvt);
								resetXY();
							}
						}
					}
					break;
				case 'swipeRight':
					this.e.addEventListener('touchstart', srtouchStart, false);
					this.e.addEventListener('touchmove', srtouchMove, false);
					this.e.addEventListener('touchend', srtouchEnd, false);
					function srtouchStart(evt){
						startX = evt.targetTouches[0].clientX;
						startY = evt.targetTouches[0].clientY;
						target = evt.target;
					}
					function srtouchMove(evt){
						lastX = evt.targetTouches[0].clientX;
						lastY = evt.targetTouches[0].clientY;
						lastEvt = evt;
					}
					function srtouchEnd(evt){							
						if(lastX !== null){
							if(lastX > startX && target == evt.target){
								callback(lastEvt);
								resetXY();
								return this;
							}
						}
					}
					break;
				case 'swipeUp':
					this.e.addEventListener('touchstart', sutouchStart, false);
					this.e.addEventListener('touchmove', sutouchMove, false);
					this.e.addEventListener('touchend', sutouchEnd, false);
					function sutouchStart(evt){
						startX = evt.targetTouches[0].clientX;
						startY = evt.targetTouches[0].clientY;
						target = evt.target;
					}
					function sutouchMove(evt){
						lastX = evt.targetTouches[0].clientX;
						lastY = evt.targetTouches[0].clientY;
						lastEvt = evt;
					}
					function sutouchEnd(evt){						
						if(lastY !== null){
							if(lastY < startY && target == evt.target){
								callback(lastEvt);
								resetXY();
							}
						}
					}
					break;
				case 'swipeDown':
					this.e.addEventListener('touchstart', sdtouchStart, false);
					this.e.addEventListener('touchmove', sdtouchMove, false);
					this.e.addEventListener('touchend', sdtouchEnd, false);
					function sdtouchStart(evt){
						console.log(evt);
						startX = evt.targetTouches[0].clientX;
						startY = evt.targetTouches[0].clientY;
						target = evt.target;
					}
					function sdtouchMove(evt){
						lastX = evt.targetTouches[0].clientX;
						lastY = evt.targetTouches[0].clientY;
						lastEvt = evt;
					}
					function sdtouchEnd(evt){							
						if(lastY !== null){
							if(lastY > startY && target == evt.target){
								callback(lastEvt);
								resetXY();
							}
						}
					}
					break;
				case 'pinch':
					this.e.addEventListener('touchmove', callback, false);
					break;
				case 'multi':
					this.e.addEventListener('touchmove', callback, false);
					break;
				case 'shake':
					this.hasDeviceMotion = 'ondevicemotion' in window;

					this.event = document.createEvent('Event');
					this.event.initEvent('shake', true, true);

					if(this.hasDeviceMotion){
						window.addEventListener('devicemotion', shake, false);
					}
					function shake(evt){
						//alert(evt.rotationRate[0]);
					}
					break;
				case 'rotate':
					this.e.addEventListener('touchmove', callback, false);
					break;
			}
		}
	},

	css: function(obj){
		if (typeof obj =="object"){
			for(var prop in obj){						
				try{
					this.e.style[prop] = obj[prop];
				}
				catch(err){
					throw new Error(err.name+' '+err.message);
				}
			}
		}
	},

	addClass: function(str){
		if(typeof str == 'string'){
			this.e.className = str;
		}
	},

	imageFilter: function(obj){	
		if(typeof obj == 'object'){
			for(var filter in obj){
				for(var vendor in this.vendorPrefixes){		
					this.e.style[this.vendorPrefixes[vendor]+'filter'] = filter+'('+obj[filter]+')';							
				}
				this.e.style['filter'] = filter+'('+obj[filter]+')';
			}
		}
	},

	animate: function(obj, duration, callback){

	},

};