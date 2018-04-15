

var menu = {
    new_list:[
        {
            icon:'<i class="fa fa-clock-o"></i>',
            title:'最近',
            name:'zj'
        }
    ],
    main_list:[
        {
            icon:'<i class="fa fa-bars"></i>',
            title:'全部',
            name:'qb'
        },
        {
            icon:'<i class="fa fa-file-o"></i>',
            title:'文档',
            name:'wd'
        },
        {
            icon:'<i class="fa fa-file-image-o"></i>',
            title:'图片',
            name:'tp'
        },
        {
            icon:'<i class="fa fa-film"></i>',
            title:'视频',
            name:'sp'
        },
        {
            icon:'<i class="fa fa-music"></i>',
            title:'音乐',
            name:'yy'
        }
    ],
    tool_list:[
        {
            icon:'<i class="fa fa-picture-o"></i>',
            title:'照片',
            name:'zp'
        },
        {
            icon:'<i class="fa fa-sticky-note-o"></i>',
            title:'笔记',
            name:'bj'
        },
        {
            icon:'<i class="fa fa-user-plus"></i>',
            title:'共享组',
            name:'gxz'
        },
        {
            icon:'<i class="fa fa-inbox"></i>',
            title:'保险箱',
            name:'bxx'
        },
        {
            icon:'<i class="fa fa-share-alt"></i>',
            title:'分享链接',
            name:'fxlj'
        },
        {
            icon:'<i class="fa fa-trash-o"></i>',
            title:'回收站',
            name:'hsz'
        }
    ]
};


//currMark = obj  当前显示的内容列表

// zj_0  = >   routeArr =['zj','0']
//content.zj  => content.zj[0].child
//listContent = content.zj;
// listContent = listContent[0].child
var content = {
    zj:[
        {
            title:'QQ',
            name:'qq',
            editTime:'2017-12-05',
            fileSize:0,
            child:[
                {
                    title:'QQ2222',
                    name:'qq2',
                    editTime:'2017-12-05',
                    fileSize:0,
                    child:[
                        {
                            title:'QQ3333',
                            name:'qq3',
                            editTime:'2017-12-05',
                            fileSize:0
                        },
                        {
                            title:'网络公司33',
                            name:'wlgs3',
                            editTime:'2017-12-05',
                            fileSize:0
                        }
                    ]
                },
                {
                    title:'网络公司22',
                    name:'wlgs2',
                    editTime:'2017-12-05',
                    fileSize:0
                },
                {
                    title:'网站制作任务222',
                    name:'wzzzrw2',
                    editTime:'2017-12-05',
                    fileSize:0
                }
            ]
        },
        {
            title:'网络公司',
            name:'wlgs',
            editTime:'2017-12-05',
            fileSize:0
        },
        {
            title:'网站制作任务',
            name:'wzzzrw',
            editTime:'2017-12-05',
            fileSize:0
        },
        {
            title:'我的腾讯文件',
            name:'wdtxwj',
            editTime:'2017-12-05',
            fileSize:0
        }
    ],
    qb:[
        {
            title:'QQ11111',
            name:'qq1',
            editTime:'2017-12-05',
            fileSize:0
        },
        {
            title:'网络公司11111',
            name:'wlgs1',
            editTime:'2017-12-05',
            fileSize:0
        },
        {
            title:'网站制作任务1111',
            name:'wzzzrw1',
            editTime:'2017-12-05',
            fileSize:0
        },
        {
            title:'我的腾讯文件1111',
            name:'wdtxwj1',
            editTime:'2017-12-05',
            fileSize:0
        }
    ]
};