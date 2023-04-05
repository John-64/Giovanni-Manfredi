var pomodoro = {
    started : false,
    onPause : false,
    minutes : 0,
    seconds : 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,

    init : function(){
      var self = this;
      this.minutesDom = document.querySelector('#minutes');
      this.secondsDom = document.querySelector('#seconds');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);

      document.querySelector('#work').onclick = function(){
        self.startWork.apply(self);
        document.getElementById("work").style.display = "none";
        document.getElementById("pause").style.display = "inline";
      };

      document.querySelector('#pause').onclick = function(){
        self.pauseWork.apply(self);
        document.getElementById("pause").style.display = "none";
        document.getElementById("work").style.display = "inline";
      };

      document.querySelector('#break').onclick = function(){
        self.startBreak.apply(self);
      };

      document.querySelector('#stop').onclick = function(){
        self.stopTimer.apply(self);
      };
    },
    resetVariables : function(mins, secs, started){
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
    },
    startWork: function() {
        if(this.onPause == true) {
            this.resetVariables(this.minutes, this.seconds, true);
            this.onPause = false;
        } else {
            this.resetVariables(50, 0, true);
        }
    },
    pauseWork: function() {
        this.onPause = true;
        this.resetVariables(this.minutes, this.seconds, false);
      },
    startBreak : function(){
        document.getElementById("pause").style.display = "none";
        document.getElementById("work").style.display = "none";
        this.resetVariables(0, 5, true);
    },
    stopTimer : function(){
        document.getElementById("pause").style.display = "none";
        document.getElementById("work").style.display = "inline";   
        this.resetVariables(50, 0, false);
        this.onPause = false;
        this.updateDom();
    },
    pauseTimer : function(){
        this.resetVariables(this.minutes, this.seconds, false);
        this.updateDom();
      },
    toDoubleDigit : function(num){
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },
    updateDom : function(){
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
    },
    intervalCallback : function(){
      if(!this.started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateDom();
    },
    timerComplete : function(){
        this.started = false;
        document.getElementById("pause").style.display = "none";
        document.getElementById("work").style.display = "inline";   
    }
};
window.onload = function(){
  pomodoro.init();
};