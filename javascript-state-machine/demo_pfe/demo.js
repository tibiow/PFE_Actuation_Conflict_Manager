//'use strict' 
//var visualize = require('./lib/visualize');
Demo = function() {

  var output = document.getElementById('output'),
      demo   = document.getElementById('demo'),
      turbine  = document.getElementById('panic'),
      climatiseur   = document.getElementById('warn'),
     // calm   = document.getElementById('calm'),
      clear  = document.getElementById('clear'),
      count  = 0;

  var log = function(msg, separate) {
    count = count + (separate ? 1 : 0);
    output.value = count + ": " + msg + "\n" + (separate ? "\n" : "") + output.value;
    refreshUI();
  };

  var refreshUI = function() {
    setTimeout(function() {
      demo.className = fsm.state;
      turbine.disabled = fsm.cannot('turbine', true);
      climatiseur.disabled  = fsm.cannot('climatiseur',  true);
      //calm.disabled  = fsm.cannot('calm',  true);
      clear.disabled = fsm.cannot('clear', true);
    }, 0); // defer until end of current tick to allow fsm to complete transaction
  };

  var fsm = new StateMachine({
        transitions: [
      { name: 'start', from: 'none',   to: 'stop'  },
      { name: 'turbineON',  from: 'stop',  to: 'turbine' },
      { name: 'turbineOFF', from: 'turbine',  to: 'stop'    },
      { name: 'climatiseurON', from: 'stop', to: 'climatiseur'    },
      { name: 'climatiseurOFF',  from: 'climatiseur',    to: 'stop' },
    ],

    methods: {

      onBeforeTransition: function(lifecycle) {
        log("BEFORE: " + lifecycle.transition, true);
      },

      onLeaveState: function(lifecycle) {
        log("LEAVE: " + lifecycle.from);
      },

      onEnterState: function(lifecycle) {
        log("ENTER: " + lifecycle.to);
      },

      onAfterTransition: function(lifecycle) {
        log("AFTER: " + lifecycle.transition);
      },

      onTransition: function(lifecycle) {
        log("DURING: " + lifecycle.transition + " (from " + lifecycle.from + " to " + lifecycle.to + ")");
      },

      onLeaveRed: function(lifecycle) {
        return new Promise(function(resolve, reject) {
          var msg = lifecycle.transition + ' to ' + lifecycle.to;
          log("PENDING " + msg + " in ...3");
          setTimeout(function() {
            log("PENDING " + msg + " in ...2");
            setTimeout(function() {
              log("PENDING " + msg + " in ...1");
              setTimeout(function() {
                resolve();
              }, 1000);
            }, 1000);
          }, 1000);
        });
      }

    }
  });

  fsm.start();

    console.log(fsm.state +'\n'+'    '+'the trasaction are\n'+fsm.allTransitions()+'    '+'\nthe states are\n'+fsm.allStates());
  return fsm;

}();

