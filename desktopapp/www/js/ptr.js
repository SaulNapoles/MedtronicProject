var PullToReload=function(optsUser){var self=this;this.opts={"refresh-element":"ptr","content-element":"content","border-height":1,height:80,"font-size":"30px",threshold:20,"pre-content":"...","loading-content":"Loading...","callback-loading":function(){setTimeout(function(){self.loadingEnd()},1e3)}};for(var prop in self.opts){if(optsUser[prop]!==undefined){self.opts[prop]=optsUser[prop]}}this.ptr=document.querySelector("#"+self.opts["refresh-element"]);this.content=document.querySelector("#"+self.opts["content-element"]);this.ptr.style.padding="0px";this.ptr.style.margin="0px";this.ptr.style.display="block";this.ptr.style.height=self.opts.height+"px";this.ptr.style.border=self.opts["border-height"]+"px solid #000";this.ptr.style.borderTop="0px";this.ptr.style.borderLeft="0px";this.ptr.style.borderRight="0px";this.ptr.style.textAlign="center";this.ptr.style.lineHeight=self.opts.height+"px";this.ptr.style.fontSize=self.opts["font-size"];this.ptr.style.marginTop="-"+(self.opts["border-height"]+self.opts.height)+"px";this.loadingStart=function(){this.ptr.innerHTML=self.opts["loading-content"];self.opts["callback-loading"]()};this.loadingEnd=function(){this.ptr.innerHTML=self.opts["pre-content"];this.ptr.style.marginTop="-"+(self.opts["border-height"]+self.opts.height+"px")};this.getPageY=function(event){if(event.pageY===undefined&&event.touches!==undefined){if(event.touches.length<=0){return false}event.pageY=event.touches[event.touches.length-1].pageY}return event.pageY};this.isDragging=false;this.isThresholdReached=false;this.posStart=0;self.content.addEventListener("touchstart",function(event){self.mouseStart(event)});self.content.addEventListener("mousedown",function(event){self.mouseStart(event)});this.mouseStart=function(event){if(document.body.scrollTop>=self.content.getBoundingClientRect().top){return}self.isDragging=true;self.isThresholdReached=false;self.posStart=self.getPageY(event)};document.addEventListener("touchmove",function(event){self.mouseMove(event)});document.addEventListener("mousemove",function(event){self.mouseMove(event)});this.mouseMove=function(event){if(document.body.scrollTop>=self.content.getBoundingClientRect().top){return}if(!self.isDragging){return}event.pageY=self.getPageY(event);if(event.pageY===false){return}var dragDistance=event.pageY-self.posStart;if(dragDistance<=0){return}event.preventDefault();event.stopImmediatePropagation();var newMargin=self.opts["border-height"]+(self.opts.height-dragDistance);if(newMargin<=0){return}if(newMargin<=self.opts.threshold){self.isThresholdReached=true}self.ptr.style.marginTop="-"+(newMargin+"px")};document.addEventListener("touchend",function(event){self.mouseEnd(event)});document.addEventListener("mouseup",function(event){self.mouseEnd(event)});this.mouseEnd=function(event){if(document.body.scrollTop>=self.content.getBoundingClientRect().top){return}if(!self.isDragging){return}event.preventDefault();event.stopImmediatePropagation();if(self.isThresholdReached){self.ptr.style.marginTop="0px";self.isDragging=false;self.isThresholdReached=false;self.loadingStart();return}self.ptr.style.marginTop="-"+(self.opts["border-height"]+self.opts.height+"px");self.isDragging=false;self.isThresholdReached=false}};
