var $v = new Vue({
    el: '#routineApp',
    data: {
      mode: 'normal',
      name: window.location.pathname.replace("/routine/", ""),
      goals:[],
      activeId: 0
    },
    methods: {
      scrollDown: function () {
        this.goals[this.activeId].isActive = false
        this.activeId = (this.activeId + 1) % this.goals.length
        this.goals[this.activeId].isActive = true
      },
      scrollUp: function () {
        this.goals[this.activeId].isActive = false
        this.activeId = (this.activeId - 1 + this.goals.length) % this.goals.length
        this.goals[this.activeId].isActive = true
      },

      newBelow: function() {
        this.goals.splice(this.activeId+1, 0, {name:"", isActive:false})
        this.scrollDown()
        this.insertMode()

      },

      insertMode: function() {
        this.mode = 'insert'
      },

      normalMode: function() {
        this.mode = 'normal'
      },

      addToName: function(key) {
        if(key == "Backspace") {
          this.goals[this.activeId].name.slice(0, goals.length-1)
        } else {
          this.goals[this.activeId].name += key
        }
      }
    }
})

axios.get(window.location.pathname + ".json")
  .then(function (response) {
    $v.goals.push.apply($v.goals, response.data.goals)
    for (goal of $v.goals) {
      $v.$set(goal, 'isActive', false) }
    if($v.goals.length > 0) $v.goals[$v.activeId].isActive = true
  })

  document.onkeydown = function (e) {
    if($v.mode == 'normal'){
      switch (e.keyCode) {
        case 38: $v.scrollUp();   break;
        case 40: $v.scrollDown(); break;
      }

      switch (e.key) {
        case 'j': $v.scrollDown(); break;
        case 'k': $v.scrollUp();   break;
        case 'o': $v.newBelow();   break;
      }
    } else if($v.mode == 'insert') {
      switch (e.keyCode) {
        case 27: $v.normalMode(); break;
        default: $v.addToName(e.key); break;
      }
    }
  };
