import { BASE_URL, METHOD, _promise } from "./config"

export default {
    signUp: function(payload) {
        return _promise(METHOD.POST, BASE_URL + `signup` , payload)
    },
    addCircle: function(payload) {
        return _promise(METHOD.POST_FILES, BASE_URL + `circles` , payload, true)
    },
    logIn: function(payload) {
        return _promise(METHOD.POST, BASE_URL + 'login' , payload)
    },
    user : function() {
        return _promise(METHOD.GET,BASE_URL+`user`,{}, true)
    },
    putUser : function(payload) {
        return _promise(METHOD.PUT,BASE_URL+`user`,payload, true)
    },
    getMain : function() {
        return _promise(METHOD.GET, BASE_URL +`main`, {}, true );
    },
    getBoards: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circles/${payload.name}/boards`, {},true)
    },
    addBoard: function(payload) {
        return _promise(METHOD.POST, BASE_URL + `circles/${payload.circle}/boards`, {name: payload.board}, true)
    },
    getNotices: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circles/${payload.name}/notices`, {}, true)
    },
    getGallery : function(payload) {
        return _promise(METHOD.GET,BASE_URL+`circles/${payload.name}/gallery`,{}, true)
    },
    getPosts : function(payload) {
        return _promise(METHOD.GET,BASE_URL+`board/${payload.id}/post`,{}, true)
    },
    circle: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circle/${payload}`)
    },
    getMembers : function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circles/${payload}/members`,{},true)
    },
    postPost: function(payload) {
        return _promise(METHOD.POST_FILES, BASE_URL + `board/${payload.id}/post`, payload.form, true)
    },
    postComment: function(payload) {
        return _promise(METHOD.POST, BASE_URL + `post/${payload.id}/comment`, {content: payload.content}, true)
    },
    getSchedule : function() {
        return _promise(METHOD.GET, BASE_URL +`schedules`,{},true)
    },
    getCircleInfo: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circleInfo/${payload.code}`, {}, true)
    },
    postRequest: function(payload) {
        return _promise(METHOD.POST, BASE_URL + `request`, payload, true)
    },
    getCircleSearch: function(payload) {
        return _promise(METHOD.GET, BASE_URL + `circlesearch/${payload.search}`, {}, true)
    },
    postSchedule : function(payload) {
        return _promise(METHOD.POST, BASE_URL + `schedules`,payload,true)
    }
    ,
    postRespond : function(payload) {
        return _promise(METHOD.POST, BASE_URL + `respond`,payload,true)
    },
    postRead : function(payload) {
        return _promise(METHOD.POST, BASE_URL + `post/${payload.id}/read`,payload,true)
    },
    getReadList : function(payload) {
        return _promise(METHOD.GET, BASE_URL + `post/${payload.id}/read`, {},true)
    },
    putMemberAdmin : function(payload) {
        return _promise(METHOD.PUT, BASE_URL + `circles/${payload.circlename}/members`,payload,true)
    }
}