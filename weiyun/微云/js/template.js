/*
* createMenu(data)
* 功能：生成左侧菜单
*
* 参数：
* @data ： 菜单的数据
*
* template:
*
* <ul>
     <li>
         <a href="#"><i class="fa fa-clock-o"></i> <span>最近</span></a>
     </li>
 </ul>
*
* */

function createMenu(data,menuBox){

    /*
    * zj_
    *
    * */


    var dir = '';

    if(menuBox.nodeName.toLowerCase()=='li'){
        var a = menuBox.querySelector('a');

        if(!isNaN(a.getAttribute('dir'))){
            dir = a.getAttribute('mark')+'_';
        }else{
            dir = a.getAttribute('dir')+'_';
        }
    }


    //创建菜单结构
    var menu_html = '';
    for(var key in data){

        //生成菜单内的列表
        var list = '';
        for(var i=0;i<data[key].length;i++){
            list += '<li><a mark="'+data[key][i].name+'" href="javascript:void(0);" dir="'+dir+i+'">'+(data[key][i].icon||'')+' <span>'+data[key][i].title+'</span></a></li>';
        }

        menu_html += '<ul>'+list+'</ul>';
    }
    // console.log(menu_html);

    //把生成的菜单放到对应的页面位置
    menuBox.innerHTML += menu_html;
}


/*
* createContent(contentData)
*
* 功能： 创建右侧的内容列表
*
* 参数：
* @contentData 右侧内容列表的对应数据
*
*
* template：
* <div class="list-item list-con">
     <a href="#">
         <div class="check-box"><i class="fa fa-circle-o"></i></div>
         <div class="file"><i class="fa fa-folder"></i></div>
         <div class="name">
            <div style="">QQ网盘</div>
            <div class="edit-time">2017-12-04</div>
            <div class="file-size">-</div>
         </div>
     </a>
 </div>
*
*
* */

function createContent(contentData,listContentBox){

    // console.log(contentData);

    if(!contentData){
        console.log('内容不存在');
        listContentBox.innerHTML = '....内容不存在....';
        return;
    }

    //生成内容列表结构
    var content_html = '';
    for(var i=0;i<contentData.length;i++){
        content_html += '<div class="list-item list-con">'+
            '<a href="javascript:void(0);"  mark="'+i+'" key="'+contentData[i].name+'">'+
        '<div class="check-box"><i class="fa fa-circle-o"></i></div>'+
        '<div class="file"><i class="fa fa-folder"></i></div>'+
        '<div class="name">'+
        '<div style="">'+contentData[i].title+'</div>'+
        '<div class="edit-time">'+contentData[i].editTime+'</div>'+
        '<div class="file-size">'+(contentData[i].fileSize||'-')+'</div>'+
        '</div>'+
        '</a>'+
        '</div>';
    }

    // console.log(content_html);
    //显示内容
    listContentBox.innerHTML = content_html;
}