angular.module("BoardsModule")
    .factory("TasksServices", [function(){
        return {
            getListCards: function(idList, success, error){
                Trello.get("/lists/"+idList+"/cards", {filter: 'open'}, success, err);
            },
            createTask: function(task, listId) {
                var newCard = {
                      name: task.name + " {{" + task.duration + "}}",
                      desc: task.description,
                      pos: "bottom",
                      due: null,
                      idList: listId
                };
                console.log('new Card ', newCard);
                // TODO: qweqweampsodmpaosmfpoam
            },
            moveTask: function(taskId, targetListId, position, success, err) {
                var params = {
                    idList: targetListId,
                    pos: position
                };
                Trello.put("/cards/" + taskId, params, success, err);
            }
        };
    }]);