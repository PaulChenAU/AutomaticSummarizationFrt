var connect = require('connect');

connect.createServer(
    connect.static("../AutomaticSummarizationFrt")
    
).listen(5300);