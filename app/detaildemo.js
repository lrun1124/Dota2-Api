  const Dota2Api = require('dota2-api');

  const da = Dota2Api.create('FCD753F867E177AE92B6654FB139F5CD');

  const options = {match_id: 3446763080};
  da.getMatchDetails(options).then((result) => {
  	  debugger;
      console.log(result);
  }, (errorResponseStatusText) => {
  	  debugger;
      console.log(errorResponseStatusText);
  });