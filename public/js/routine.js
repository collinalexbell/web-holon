var $v = new Vue({
    el: '#routineApp',
    data: {
      name: window.location.pathname.replace("/routine/", ""),
      goals:[]
    }
})

axios.get(window.location.pathname + ".json")
  .then(function(response) {
    $v.goals.push.apply($v.goals, response.data.goals)
  })
