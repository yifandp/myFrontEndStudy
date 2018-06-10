/**
 *  轮播图设置
 */
$(function(){
   $(window).on("resize",function(){
     // 获取窗口宽度
     let viewW = $(window).width();
     // 判断是否显示大图
     let isShowBigImg = viewW >= 768;
     // 获取所有轮播图中的每一项
     let $allItems = $("#lk-carousel .item");
     // 遍历每一项
     $allItems.each(function(index,ele){
         // 获取到对应尺寸下的图片路径
         let src = isShowBigImg ? $(ele).data("lg-img") : $(ele).data("sm-img");
         let imgUrl = 'url("'+ src +'")';
         // 为每一项设置背景图片
         $(ele).css({
             "background-image": imgUrl
         });

         if(!isShowBigImg){
             let $img = $('<img src="'+ src +'">');
             $(ele).empty();
             $(ele).append($img);
         }else{
             $(ele).empty();
         }
     })

   });

    // 设置提示控件
    $("[data-toggle='tooltip']").tooltip();

    $(window).on("resize",function(){
        let $navViewW = $("#lk-product .view-nav").width();
        let $navWarp = $("#lk-product .nav");
        let $navList = $("[role='presentation']",$navWarp);


        let totalW = 0;
        $navList.each(function (index,ele) {
            totalW += $(ele).width();
        })

        if(totalW > $navViewW){
            $navWarp.css({'width': totalW})
        }else{
            // $navWarp.css({'width': '100%'});
            $navWarp.removeAttr('style');
        }
    })

    // 触发resiz事件的函数
    $(window).trigger("resize");

    // 设置导航滚动
    let $navAll = $("#lk-header .all_nav li");
    $navAll.eq(2).on("click", function(){
        $('html,body').animate({"scrollTop":$("#lk-hot").offset().top},1000);
    })
});
