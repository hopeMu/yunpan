/*
* 标记当前显示的左侧菜单
* */
function markSideMenu(menuList,currName){

    var currDom = null;

    for(var i=0;i<menuList.length;i++){
        // console.log(menuList[i].getAttribute('mark'));
        if(menuList[i].getAttribute('mark')==currName){

            //检测是否存在className,存在就增加，不存在就添加
            if(menuList[i].className){
                menuList[i].className += ' active';
            }else{
                menuList[i].className = 'active';
            }

            currDom = menuList[i];

            break;

        }
    }

    return currDom; //返回被标记的元素

}

/*
* 根据url中的dir路由地址找到对应的内容
* */
function getRouteContent(route,data){


    //rount ->  zj_0
    var routeArr = route.split('_');


    var listContent = data[routeArr[0]];

    for(var i=1;i<routeArr.length;i++){
        listContent = listContent[routeArr[i]].child;
    }


    //data['zj']

    // listContent = listContent[routeArr[1]].child;
    //listContent.child['0']


    return listContent;


}

/*
* 生成面包屑
* */
function createBreadCrumb(route,data){

    var breadCrumb = '<a href="javascript:;" mark="0">全部</a> &gt; ';



    //route  zj_0
    var routeArr = route.split('_');
    //['zj','0']

    var listContent = data[routeArr[0]];

    for(var i=1;i<routeArr.length;i++){


         var title = listContent[routeArr[i]].title;
        //listContent[0].title

        listContent = listContent[routeArr[i]].child;

        if(i==routeArr.length-1){
            breadCrumb += '<span >'+title+'</span>';
            break;
        }

        breadCrumb += '<a href="javascript:;" mark="'+i+'">'+title+'</a> &gt; ';

    }

    return breadCrumb;


}

/*
* 搜索框 获取焦点变长  失去焦点恢复
* */
function searchBox(obj){

    var dur = 200;//动画持续时间

    var start = parseFloat(getStyle(obj,'width'));

    var f = 50;//变化值

    var onoff = true;//可以开始动画


    //是谁？ obj
    //什么时候： onfocus
    //做什么事情： width: +50
    obj.onfocus = function(){

        if(!onoff) return;
        onoff = false;
        // this.style.width = parseFloat(getStyle(this,'width'))+50+'px';
        MTween({
            obj:obj,
            attrs:{
                width:start+f+'px'
            },
            duration:dur,
            callBack:function () {
                onoff = true;
            }
        })
    };
    obj.onblur = function(){
        if(!onoff) return;
        onoff = false;
        // this.style.width = parseFloat(getStyle(this,'width'))-50+'px';
        MTween({
            obj:obj,
            attrs:{
                width:start+'px'
            },
            duration:dur,
            callBack:function () {
                onoff = true;
            }
        })
    };
}

/*
*  200  10 40 -->  250
*
*  this.clientWidth+50 -> 300 + 50
*
*  this.clientWidth(350)-50 -> 300 +50  350
*
*
*
*
* */

