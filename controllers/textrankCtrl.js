angular.module("summary")
    .constant("textranksummaryUrl", "http://localhost:5800/textrank/summary")
    .constant("textranksummaryhistoryUrl", "http://localhost:5800/textrank/history")
    .constant("pagesize", 1)
    .controller("textrankCtrl", function($scope, $compile,$http, textranksummaryUrl, pagesize, textranksummaryhistoryUrl){

        var pagecount = 1;
        $scope.pagecount = pagecount;
        // $http.get(textranksummaryhistoryUrl, { withCredentials: true })
        //     .then(function(data){
                
        //         $scope.history = data.data.data.history;
        //         $scope.split_document_history = [];
        //         $scope.split_summary_history = [];
        //         for(let i=0;i <$scope.history.length; i++){
        //             document_text = $scope.history[i].document;
        //             summary_text = $scope.history[i].summary;
                    
        //             var split_document = document_text.split(/[,，。！；“”!?]/);
        //             var split_summary = summary_text.split(/[,，。！；“”!?]/);
        //             $scope.split_document_history.push(split_document);
        //             $scope.split_summary_history.push(split_summary);

        //             modify_document = "";
        //             for (let j=0; j< split_document.length; j++){
        //                 if (j < split_document.length-1){
        //                     modify_each_sentence = "<span class=\"document" + i + "-" + j + "\" ng-mouseenter=\"documentEnter('" + i + "-" + j + "');\" ng-mouseleave= \"documentLeave('" + i + "-" + j + "');\" >" + split_document[j] + ",</span>";
        //                 }else{
        //                     modify_each_sentence = "<span class=\"document" + i + j + "\" ng-mouseenter=\"documentEnter('" + i + j + "');\" ng-mouseleave= \"documentLeave('" + i + "-" + j + "');\" >" + split_document[j] + "。</span>";
        //                 }
        //                 modify_document += modify_each_sentence;
        //             }
                    

        //             $scope.history[i].document = modify_document; 


        //             modify_summary = "";
        //             for (let j=0; j< split_summary.length; j++){
        //                 if (j < split_summary.length-1){
        //                     modify_each_sentence = "<span class=\"summary" + i + "-" + j + "\" ng-mouseenter=\"summaryEnter('" + i + "-" + j + "');\" ng-mouseleave= \"summaryLeave('" + i + "-" + j + "');\" >" + split_summary[j] + ",</span>";
        //                 }else{
        //                     modify_each_sentence = "<span class=\"summary" + i + "-" + j + "\" ng-mouseenter=\"summaryEnter('" + i + "-" + j + "');\" ng-mouseleave= \"summaryLeave('" + i + "-" + j + "');\" >" + split_summary[j] + "。</span>";
        //                 }
        //                 modify_summary += modify_each_sentence;
        //             }
        //             $scope.history[i].summary = modify_summary; 
        //         }
                


        //     }).catch(function(error){
        //         $scope.historyError = error;
        //     });
        
        $scope.selectPage = function(page){
            $http.post(textranksummaryhistoryUrl,{
                data:{
                    page: page,
                    count: pagesize
                }
            },{withCredentials: true})
                .then(function(data){
                    $scope.pagecount = data.data.data.history.sum;
                    $scope.history = data.data.data.history.data;
                $scope.split_document_history = [];
                $scope.split_summary_history = [];
                for(let i=0;i <$scope.history.length; i++){
                    document_text = $scope.history[i].document;
                    summary_text = $scope.history[i].summary;
                    
                    var split_document = document_text.split(/[,，。！；“”!?]/);
                    var split_summary = summary_text.split(/[,，。！；“”!?]/);
                    $scope.split_document_history.push(split_document);
                    $scope.split_summary_history.push(split_summary);

                    modify_document = "";
                    for (let j=0; j< split_document.length; j++){
                        if (j < split_document.length-1){
                            modify_each_sentence = "<span class=\"document" + i + "-" + j + "\" ng-mouseenter=\"documentEnter('" + i + "-" + j + "');\" ng-mouseleave= \"documentLeave('" + i + "-" + j + "');\" >" + split_document[j] + ",</span>";
                        }else{
                            modify_each_sentence = "<span class=\"document" + i + j + "\" ng-mouseenter=\"documentEnter('" + i + j + "');\" ng-mouseleave= \"documentLeave('" + i + "-" + j + "');\" >" + split_document[j] + "。</span>";
                        }
                        modify_document += modify_each_sentence;
                    }
                    

                    $scope.history[i].document = modify_document; 


                    modify_summary = "";
                    for (let j=0; j< split_summary.length; j++){
                        if (j < split_summary.length-1){
                            modify_each_sentence = "<span class=\"summary" + i + "-" + j + "\" ng-mouseenter=\"summaryEnter('" + i + "-" + j + "');\" ng-mouseleave= \"summaryLeave('" + i + "-" + j + "');\" >" + split_summary[j] + ",</span>";
                        }else{
                            modify_each_sentence = "<span class=\"summary" + i + "-" + j + "\" ng-mouseenter=\"summaryEnter('" + i + "-" + j + "');\" ng-mouseleave= \"summaryLeave('" + i + "-" + j + "');\" >" + split_summary[j] + "。</span>";
                        }
                        modify_summary += modify_each_sentence;
                    }
                    $scope.history[i].summary = modify_summary; 
                }

                }).catch(function(error){
                    $scope.historyError = error;
                });
        }


        
        $scope.documentEnter = function(num){
            let historyNumber_number = num.split("-");
            let documentS = document.getElementsByClassName("document" + num);
            angular.element(documentS).addClass("hoveryellow");
            historyNumber = Number(historyNumber_number[0]);
            number = Number(historyNumber_number[1])
            let documentText = $scope.split_document_history[historyNumber][number];

            for(var j=0;j <$scope.split_summary_history[historyNumber].length; j++){
                
                if($scope.split_summary_history[historyNumber][j] == documentText){
                    let summaryNumber = "summary" + historyNumber[0] + "-" + j;
                    let summaryS = document.getElementsByClassName("summary" + historyNumber_number[0] + "-" + j);
                    angular.element(summaryS).addClass("hoveryellow");
                    break;
                }
            }
            
        }

        $scope.summaryEnter = function(num){
            let historyNumber_number = num.split("-");
            let summaryS = document.getElementsByClassName("summary" + num);
            angular.element(summaryS).addClass("hoveryellow");
            historyNumber = Number(historyNumber_number[0]);
            number = Number(historyNumber_number[1])
            let summaryText = $scope.split_summary_history[historyNumber][number];
            for(var j=0;j <$scope.split_document_history[historyNumber].length; j++){
                
                if($scope.split_document_history[historyNumber][j] == summaryText){
                    
                    let documentNumber = "summary" + historyNumber[0] + "-" + j;
                    let documentS = document.getElementsByClassName("document" + historyNumber_number[0] + "-" + j);
                    angular.element(documentS).addClass("hoveryellow");
                    break;
                }
            }
        }

        $scope.summaryLeave = function(num){
            let historyNumber_number = num.split("-");
            let summaryS = document.getElementsByClassName("summary" + num);
            angular.element(summaryS).removeClass("hoveryellow");
            historyNumber = Number(historyNumber_number[0]);
            number = Number(historyNumber_number[1]);
            let summaryText = $scope.split_summary_history[historyNumber][number];

            for(var j=0;j <$scope.split_document_history[historyNumber].length; j++){
                
                if($scope.split_document_history[historyNumber][j] == summaryText){
                    let documentNumber = "summary" + historyNumber[0] + "-" + j;
                    let documentS = document.getElementsByClassName("document" + historyNumber_number[0] + "-" + j);
                    angular.element(documentS).removeClass("hoveryellow");
                    break;
                }
            }
        }

        $scope.documentLeave = function(num){
            let historyNumber_number = num.split("-");
            let documentS = document.getElementsByClassName("document" + num);
            angular.element(documentS).removeClass("hoveryellow");
            historyNumber = Number(historyNumber_number[0]);
            number = Number(historyNumber_number[1])
            let documentText = $scope.split_document_history[historyNumber][number];
            for(var j=0;j <$scope.split_summary_history[historyNumber].length; j++){

                if($scope.split_summary_history[historyNumber][j] == documentText){
                    let summaryNumber = "summary" + historyNumber[0] + "-" + j;
                    let summaryS = document.getElementsByClassName("summary" + historyNumber_number[0] + "-" + j);
                    angular.element(summaryS).removeClass("hoveryellow");
                    break;
                }
            }
            
        };
        
        $scope.range = function(n){
            let range_ans = [];
            for(let i=0; i<n; i++){
                range_ans.push(i);
            }
            return range_ans;
        };

        $scope.load = function(){
           $scope.$emit("dl","");
           $scope.selectPage(1);

        };
        $scope.$on("dlans", function(event, msg){
            $scope.user = msg;
        });

        $scope.getSummary = function(document){
            
            $scope.user.document = document;
            $http.post(textranksummaryUrl,{
                data:{
                    data: $scope.user
                }
            },{
                withCredentials:true
            }).then(function(data){
                // TODO THINGS
            
                $scope.res = data.data.data;
                $scope.summary = data.data.data.summary;
                let record = {
                    "document": document,
                    "summary": $scope.summary
                }
                $scope.history.push(record);

            }).catch(function(error){
                $scope.textrankError = error;
            })
        }

    })