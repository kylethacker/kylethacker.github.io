$(function(){
  
  var trigger = [
    { value: 'Sunny', data: 'ACT' },
    { value: 'Raining', data: 'ACT' },
    { value: 'Snowing', data: 'ACT' },
    { value: 'Motion Detected', data: 'ACT' }, 
    { value: 'Temperature', data: 'ACT' },
    { value: 'Moisture Detected', data: 'ACT' },
    { value: 'Light Detected', data: 'ACT' },
    { value: 'Smoke Detected', data: 'ACT' },
    { value: 'Humidity', data: 'ACT' },
    { value: 'When someone arrives home', data: 'ACT' },
    { value: 'When someone leaves home', data: 'ACT' },
    { value: 'Monday', data: 'ACT' },
    { value: 'Tuesday', data: 'ACT' },
    { value: 'Wednesday', data: 'ACT' },    
    { value: 'Thursday', data: 'ACT' },
    { value: 'Friday', data: 'ACT' },
    { value: 'Saturday', data: 'ACT' },
    { value: 'Sunday', data: 'ACT' },
    { value: 'Sunset', data: 'ACT' },
    { value: 'Sunrise', data: 'ACT' },

  ];
  
  var action = [
    { value: 'Turn off lights', data: 'ACT' },
    { value: 'Turn on lights', data: 'ACT' },
    { value: 'Dim lights to', data: 'ACT' },   
    { value: 'Turn thermostat to', data: 'ACT' }, 
    { value: 'Turn off thermostat', data: 'ACT' },
    { value: 'Lock doors', data: 'ACT' },
    { value: 'Unlock doors', data: 'ACT' },
    { value: 'Notify', data: 'ACT' },
  ];

  var location = [
    { value: 'Downstairs', data: 'ACT' },
    { value: 'Upstairs', data: 'ACT' },
    { value: 'Outside', data: 'ACT' },
    { value: 'Master Bedroom', data: 'ACT' },
    { value: 'Master Bathroom', data: 'ACT' },
    { value: 'Garage', data: 'ACT' },
    { value: 'Kyles Bedroom', data: 'ACT' },
    { value: 'Basement', data: 'ACT' },
    { value: 'Entrance', data: 'ACT' },
    { value: 'Kitchen', data: 'ACT' },
    { value: '50%', data: 'ACT' },
    { value: '25%', data: 'ACT' },
    { value: '75%', data: 'ACT' },

  ];  

  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: trigger,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Trigger</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });

    // setup autocomplete function pulling from currencies[] array
  $('#autocomplete2').autocomplete({
    lookup: action,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Action</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });

    // setup autocomplete function pulling from currencies[] array
  $('#autocomplete3').autocomplete({
    lookup: location,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Action</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });

});