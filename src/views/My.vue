<template>
  <div class="my">
    <div class="header">
      <div class="headerbox">
        <div class="pic">
          <img :src="loginUser.avatar" alt="" />
        </div>
        <div class="text">
          <div class="name">{{ loginUser.nickname }}</div>
          <div class="vip">{{ loginUser.vip_name?loginUser.vip_name:'普通用户' }}</div>
          <div class="id">ID: {{ loginUser.uid }}</div>
        </div>
      </div>
      <div class="icon" @click="gomydetail">
        <van-icon name="setting-o" />
      </div>
    </div>
    <div class="content">
      <div class="top">
        <div class="topbox">
          <div class="textbox">
            <a href="#">
              <div class="texttop">我的余额</div>
              <div class="textbottom">{{loginUser.now_money}}</div>
            </a>
          </div>
          <div class="textbox">
            <a href="#">
              <div class="texttop">当前佣金</div>
              <div class="textbottom">{{loginUser.commissionCount}}</div>
            </a>
          </div>
          <div class="textbox">
            <a href="#">
              <div class="texttop">优惠券</div>
              <div class="textbottom">{{loginUser.couponCount}}</div>
            </a>
          </div>
        </div>
      </div>
      <div class="myOrder">
        <van-cell title="我的订单" is-link value="全部订单" to="/orderlist" />
        <van-grid class="order" :column-num="5" :border="false">
          <van-grid-item icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAqCAYAAAAajbNEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZDNUM4N0U3MjJDQTExRTk5QzQ0QjM3MjA3OUUyNEM2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZDNUM4N0U4MjJDQTExRTk5QzQ0QjM3MjA3OUUyNEM2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkM1Qzg3RTUyMkNBMTFFOTlDNDRCMzcyMDc5RTI0QzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkM1Qzg3RTYyMkNBMTFFOTlDNDRCMzcyMDc5RTI0QzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xRY3bAAAEwklEQVR42uxZTWgdRRz/z75929QkzYfQUOxBqhSEQmoPbW5e/DhUK+JBLPUL0fYgkkMLttJretGLgoh4UrEX9SB6ihS8KUghElpozqH5gDRJ89rmvbz59zcz/9md9/JW0rTsPktn+e/Mzs7Ozm/+nzOjmJn+7ymihyA9FCBieuc1IoUSU4L7KdCboAN47mMSUTOZETvFtuwk0BVc0bVLRZO1q3I3aerFVr7z32jTh3Qq/dp3zGugaZQukuavmXSdtc4B4dIToN9AB6Wn7C59K7V5ML6NxYdcMae1iji9/OAEqRsvp7ORThLbPvxvuQ/3MdSPoeY90Mug2TxxSvCFAKAZlF9HfwPk+FMeYQzsxjKD+T8Ijv2O+h15nDgpHLiGCTiCHpbNi8Ur06XKee/ukVVkv4ATl8CdvzC2UQD7EHVfduLEcRGNsygvL2DwZQMwqbYwT7cWF0xxGaM75/SMj7PoU0iGE4eszDP9EfRhWLobZMSqUvD4m6AV0ILVFKfMk2JMns0RJ06U06/VoN4AGC6JCRX5NwsQk26Ksm/SiUolhjiJ8bBfZGI00AXmf9CZYE2OG85yhVSJk5QTebNRdqqEhpwCf2QHvrOHuOmeI1uvhbow7Rx+HGNjR+Jbqr29ncIOphyOlJqGn3ra5j0A4t1o0t/fQbEDL1uYnCRJdejJfWeiOH4FocBAGoZIuGJ1wJnUjCODQ14/fOUN0PegM3EYERSVAOB0lFRPhOEGS+xkYyl24qNZlFrrzC/Y902TDyH/GO9vx1QCCnDgmP3lpxNE+59JY417cibTU1Qbf9+A+SCi0MYWhkIN2NkGgG2L5IFRxxWthyNOERSIQnOLudxu8roTp5FygaklDL9PEIhLqBRxMiCM0m4K+r76nJZeGqM7332z1Y4sVyPvQKjIDQMDQG/+352ffoTSV0n/ObllTpjJiLgEvc6Wrm1riHdPUnVkDyWvvrHFftxkxFSCUnjb35563saax9A9KTZ7j120Zrd64/thqeknMjelHRVmYbVeYd0kfXX7K8jG1GXvwZfiEqIO0o36r6Sit9bPfgTXy2Iqm+K8mukagm30CuXVLtT2dVYX0m0f/rYU67Q2N/eZ3mj8AKVcZRsfeQDBQD0Adr7A6VEGAHQD9AW6Ox9zCbGT3thorF2/jsCJJv6rXfJY79VAiVkmWnXY7eBuXU5Q/VZNQDdSQ6A6bhRwlyLw0ep6PTNGOeOMW/ZQuzLljE2pVI8jq0Cymtq1d2+491M6E9pXztxGFEWpTtSlza6gg5UuALEclPvMrCvmNeXyjMAR4+wuu2iQnudmGgqYTaulkjjSlH8vej3A9aKEW9OhR/Bk1hMX7RY6sTF3l/pG9pi9T67Nz83jeb4sNqgo8ro6COmfsNv+5qyiU9vbx57bgbZ/QylGAWQGvuQTfDCJ55su5G89FPHwWw5aODiHaCnrYBEk8+q2I915jTvYyMJysZTy1I/3LyC/gPr9aPgv3h3G83on67SOnx01ZxTstvh/VsRdYHQzv4DSFO5HOwEINs9oFqiPAPE4JuMfUC2c6RSR5wLJtqEJB9qPxAIKq7JdyIAL2dlZeK7kOW08HcbC48gNB2ZzRe/REfAjEA8u3RVgAO57hJQMe3t0AAAAAElFTkSuQmCC"
          text="待付款" to="/orderlist" :badge="orderStatusNum.unpaid_count>0?orderStatusNum.unpaid_count:''" />
          <van-grid-item icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAqCAYAAAAajbNEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVENjEyQURGMjJDQTExRTlCNDREODcyMjg3NTE5RkRCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVENjEyQUUwMjJDQTExRTlCNDREODcyMjg3NTE5RkRCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUQ2MTJBREQyMkNBMTFFOUI0NEQ4NzIyODc1MTlGREIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUQ2MTJBREUyMkNBMTFFOUI0NEQ4NzIyODc1MTlGREIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/DWOJAAAFUElEQVR42sxZzW8bRRR/48/4Kx8ORE5aBAcqc0BAOdAc4Ia4wAU40QMEIRWOvcIfwD/QCz1Eak490VO5AOoFIVFUVQRSKoiIBKilcawojj+CHe+8/ma/Mmvv2mvHtf2S592dmZ15v3kf82ZHMDOZ9NG71EWq7vki+dAP9vWNzgrj/m94T72q+mX3nu37xEvnB+qvcftHMiWUZkf4lybnvv3ZbROjfvTXH2QsP9NZ+rpfU/H3Tt/uWpt3KXruhVD9Nbd+oTAUC9Mo+vBfauVmO5QkPM/xgzKFJWP7PlFhpWd/8p+d0P3FwjaMVyvUMNi3LgX1Dkr86CG1Z9K+dZHDykB9xQZpnI4IquzvW6Zjl2Xn52lYih3V6ajZ8vSXjEaJB+wnMujAc/k8taEVxbPzC3RaSiXibn/JWHS4yfApS4A/A38AflFNdmeDxWefsyIXDzxpvpTNLzqRzK+/GngLfB38lYoN/UCcAd8Ev+J0p2QVnr7ZCp9W3CPhjM1WY7bbuL9avdDlZCdkOs92WxVCtbFQkMVlFWOt4uljFL4DfhBkTgkXANE2RnwfAWPONteJMWBCBsjCtA1Wsn2jXCdIE58qAHjpTyC/IAQdqMK937dokpRZWjrE5QaA3AL/BM29DPkuoeyKnyYuKvUJEp/j/qB0b4v27k0WgKJ6qUT1vZK6PYBpfWHb6EVfTUADrwqrwffasqNul1RQUmvemOU3wGrBKJkeZJhr0Xe2H5339wkWCfvuUKtXAPITAED2mGrsp7Wyqp2FJX1B6BGodOIHczR5MldTlobJTlQLMCfqqpyQBnxl8IgWBELwiFauJ0Tc48mjCeYphiFlIIjIiYbGDyCezqzEZlKF0/YT02PpOA0qnk6vxNOpawidmD/5odFs7va2Jw6hCS1/GQOAZbACcJYNYx/cCOUUbn4VlAA6++BxAEilN2wAm61G/ZJst6v9McggRWiOzUxiTACkNABAbh6HBNBlThzoE8PpIZmbVTsj0awe7vcFMGMBIGjguNEIDyB0iGUa2CEUgGyhsC6lxDLDn7RqVV8gmH0ASG2wAiCVCQ0GgPqIFvF1ntCbWxFlyQkkjsX04lPr8Uwm76eBWDq1IVmelQpAfQgA2ibKs5HqTgCtykHWi2alUq6Xdtcg3A4Sm2JqYWEdQud1DWAd2CDlxG3bhIwhAHSGp+AQy0PFWPhCuVEur0lDAggXk7m59djMTN7UQAoAJDQwhA90K0Kb5N4hdjiCL5RZyrVkLncNgxQTmew6FrAMyiwNHCEKGUZ1VFEu2Jyc751yOCgIl+X/DytrbLR3FBATgNEGgMZIALD2J/gJ5k7to6Nyq1azgBin9YEeKzb1MKdRULvZLCPkrsEXmqM0IV0+5hGuE4FZ8/FxmUZNrG/8RdDHM6ap3hUJTROylzlNMQhm7yeYQHMS3SiMKdhnG90+EZh2SLMSixbNnnFPhipToISDfpmRlnZQiy1j04+E1IerfXc2xq8BNfaeVpYVlsXUgszpLn5WcfsmwNzIFpap9ug/BXrX5sn5dCRi73fEW+ZiR7wVFJ2us/kJnb/Ewy2lxkwBe3jDUqBzGmpe3C8PeJZOuiLNf9b2j26eY4cT72d8tVezNmKmgGzv3ljLlbxOPG/KptoJ86zCN4u9it9NcBEN1fnqe+DcFPhEzpblNivZiH6FfFcDNEFNAHkb03kTs6DOAb4Wcgo+qHm3pZhkJSNkDUwAiR7gnQu4XoaZ3AGYOrsnQ7Yp2Wp2U2NnIKmfGNkWZB+ee75QeA7nT+qlZoKuKVlFdfAdFFxG7WvUcUqk6LEAAwB5tmf34LdbzAAAAABJRU5ErkJggg=="
          text="待发货" to="/orderlist/1" :badge="orderStatusNum.order_count>0?orderStatusNum.order_count:''"/>
          <van-grid-item icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAqCAYAAAAajbNEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEyQ0M0NDgxMjJDQjExRTk5NDk3QkIwMjI5N0VGNTg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEyQ0M0NDgyMjJDQjExRTk5NDk3QkIwMjI5N0VGNTg1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTJDQzQ0N0YyMkNCMTFFOTk0OTdCQjAyMjk3RUY1ODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTJDQzQ0ODAyMkNCMTFFOTk0OTdCQjAyMjk3RUY1ODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4RFGUQAAAEUElEQVR42txZO2gUQRieWeOZaBIfuURjDNqoIIiFWtiLRAJCVOwklVqIhRZBNAYlTUBJY6EWigpaWGghqJUQSBlESEzUgOAjijEiCObh3f7jP6/d2b3b7OzlHol/8t3s7u3d/t/8z5mjjDGy1KUqcNbZEXWfgxgmlOwg+TjjRPA/MYIcQYyA/wg1yvfBR+gcP0RA3tvFXLgapcy6weEc5eKFkqP46hOgJgGilCGCgIA88UauvEeA+fcwcA0CmrhAF35zva0lHCsKjHSr41OKQskAAANIKo0kz0ImQ/KhEBKHETsRnxB3S+nbkM1wi3Rzq6BZznHPSR4T+axAyCV13If4yw8mR4ZLE6DVNXwYRCu8QLdrQ786D+B2LdSdDiF2ISYQdwSBN8Mls0R2dkZYAwlc5C8YO6fxcvNCLCGtQJUVGJkzCLQiGorM4SPiF2SzxKmqeoUUHiOO4LULiDP2lgiGWTu+7kblv+J428hI1Yg0YlmRsUHrA26WZ68emdrIScQWexIsgB51lefrGSMOmqxTczJZiVjr6UHIKOIBIoXoKSQmDiL2Ir7jlNwS2ULKihK4kSnrvSokH3kZwXPqccT2ZCSozEjok9IKoyOltoKWmlBa/aASCo/dK0lIHMBZ2IcEJiljNwkLWCFdhlaoOaRXL59IxDGVKS1ICCuIoOjH6vnHdV3SsHWbNrVTBhJ8shqNc57ebyg3602tqs1VOdDFdnbwxkX0NwTkKI51I6evYc8TaOYCjZyr+iDVP3l9EqjvldfEc0A2jvw6DWfJiOaak1gz8JpG1wkW7EhlQIPX2BGvsQt3n2ZDpxtApaTR9HmfJaCUlM+hSQri3GxMsRP1weGJ2vven+PvU6KDlbm8PCKtwLPSmBqln9Wt5jNrl50cR+o7Nf6WKP8sHwFflpuxkaqtk9bOs4iLDNSpd2P6ME0qJ42agLH+StzFkgpZIfDswOznYWFDAipIBHIUL5BE5YVBQndajLsfpiHis9OiIdAUnFe/8FKIaTsY8z9QQdmPaIsiwUhcTKitlXlkKIEyewok0KcC+n4+F2c0hgQjFbdAnzp+EqUXjQtsKkxW9NkNr96mYwjcQ1wPb3zNl3dyl6fe+rTowit/R1ICppczZlEnogKnSPKIN6GIb4iXtgRyYqLCdeIZol2t1DYjPlsRCBdsYmOJ+TkMLSAjXUP8UHtIJ9QuRiyB3PoV18WWvj48Rzwk/r66BYFQsYtzJ1b67DSJ6Ffr5iYbArk2sWoAoRw14WlEqo33JhJrCShXyzGddP6tSfB76RL8Cc/JZwmO+pbW2CVsufWztARTaxAZF/Utm8jviS+ZCq7s3MQkBAVgASes29ji7xfpsg9y74iBJq17AvDukXtPOuOpZKE3zby9Lb+nYF5/Qbx7bCVoCdAfVg8BQxm9ocbk6orphzO/15KXwN+EM5QylfMmg/9T/31mbKglEfo//Bj/T4ABABh6EjfzHXnBAAAAAElFTkSuQmCC"
          text="待收货" to="/orderlist/2"/>
          <van-grid-item icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAqCAYAAAAajbNEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QjFEOUIzMjJDQjExRTlCRTQzOEU5NDRDQTUzMEY3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QjFEOUI0MjJDQjExRTlCRTQzOEU5NDRDQTUzMEY3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDdCMUQ5QjEyMkNCMTFFOUJFNDM4RTk0NENBNTMwRjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDdCMUQ5QjIyMkNCMTFFOUJFNDM4RTk0NENBNTMwRjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46AIPjAAAEsElEQVR42tRZz48URRR+1dMzI9O9ywos6yJ6g8SEhNVE2AsHEzWrmAjhYOBivCgnggkhi9GEA9GDCcnqRf8BOS3Zgx4MxoR48EeMQVjZ4MoFELKs0WGXhWV05/lV9evumt7poUlmZ3oq+7Z+dFXP99V7r+pVl2JmMunN/fjH+q9EpA4z8UFi3kGKfJIuJH2jMaY7S8FUKGyJ69KCuhnW8A7pUJc2qpP+YxW/D9ld/J9G/zPIP0PfGqO///X3FCaXGtOTAP0lRo6YmoqBKiuPoCkLLCoGhBDQzUoJ2AhvUDDPJI/IsJAnq3/wTE/iKPJR1N9Cw2uQP23QjlWGBjQBGsHrZlE+gPJ6odI9AQbgOQANzHKA7Su0l20SrjWv7yAbwajfMXo35qA6P/Mb5SAteENDZ5F/q5h/gOZ2QiNvo/7panNiOiSWcAJmUJ2/PB0a1GaI1kihw+BXIHcgt5fm5tgb3FwFgfcw2ZMAdag5CeLnxCi/4cjuDYENXdJAQX5bo7nNdeNv58Rlnk33CRWoz2pbnwNzGrDKi7IaNPcJewmdn7lsz0a3k8Egmmia3CSBvCa28XEaidzz4IdrIueKSHDgNHNqzTZX5pRKgjjXJGxs3NInesWx030i306hZBMLltsUc1I5J8Kcvk84tiYyesUep1w+Xxx4/Hxx46Y9HevHlAjRm4cdOCuwkVbJKZVPOesqgwXPHyxt3HSqU/1sFtxqx+YMenAqFXI9nwo+xPNVp/pxi5pjnScyLbNOwf2g4Hl/Fby+Oa7V3u9UPwn8rBNggwUFTf+98Ur4TP19dTZ8/kxO/HrGXVex1MC04btLqueWWMqyT0QH9F5IieXW7YntOrFPqNQdO/x21AuKYO5NTSg7AOxVn7DdoOVm1yuOrdLPE802dPNd0uky5vqq+ecWAaCxKIS5/VufDpsXcjDxVXvH5ibhkWOxq8nDfuv5HAVf4bphaCy/PW+1+ZLfTTsU/QJbGwXRF6GOs33DW2jx1k2typuQWxnN6jHI1hZ99ftuQJYzmpGZPMcthrP/ssRO02mh+BcS6H5I8tXNHx4mb+iJcFZWMsgS5Hpsx6tAXZc+Wd7FGrxTLIbjBzQ2MYkzTQPA5ddfKKP8I8buBGREgDyOQefgI4vxnQHHm2JDPd6Alqv/6ExHa09ZkxQSuFesePFyjnWTEz4Z3F/ElzhYivqQv4S2j2Ap29FyEY93Df505UEzTaCR92LABbxmGwZN4m0LyTPVQ2S83G8+396DXIP8K3ItJkDjj/ROg6E+qRRtB/hfgevVAGvKyY7MDQzvhnqOYvDPGLTUEMdbtz5sayH6vfpJFMbK/WZtuA/5Q+S+EBhDv5NyAxSvFlEYEe9VKq4DAwFL/SgadlHilohSHLAGmYA8L6tB1hud0xD9tXpKgy3hpFb0PCOlmMAUB1+0T1P22yJfsEwINspC4tHTir4t5GMofYJCGX40FYCO0hieT5lP8kwTIHKsnecXt73BpVG5Lh4BRk1kn7iqLmPhMLP5brv3HbftGxT8SW5HhYjxJaOBtSDQPnNKEIEhayIfo1gCAX0rq8trQmAtNGGHDMdB4HO50L66lvHJ/wIMAB4Y0KasKiV5AAAAAElFTkSuQmCC"
          text="待评价" to="/orderlist/3" />
          <van-grid-item :icon="pic"
          text="售后/退款" :badge="orderStatusNum.refund_count>0?orderStatusNum.refund_count:''"/>
        </van-grid>
      </div>
      <div class="myService">
         <van-cell title="我的服务"  />
          <van-grid class="order" :column-num="4" :border="false">
          <van-grid-item icon="http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccc9934a7c.png"
          text="会员中心"  />
          <van-grid-item icon="http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccc9918091.png"
          text="砍价记录" />
          <van-grid-item icon="http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccc9943575.png"
          text="我的推广" />
          <van-grid-item icon="http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccc992db31.png"
          text="我的余额" />
          <van-grid-item icon="http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccc99101a8.png"
          text="地址信息" to="/site" />
          <van-grid-item icon="http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccc99269d1.png"
          text="我的收藏" />
          <van-grid-item icon="http://datong.crmeb.net/public/uploads/attach/2019/03/28/5c9ccc991f394.png"
          text="优惠券" />
          <van-grid-item icon="http://kaifa.crmeb.net/uploads/attach/2019/07/20190730/0ded3d3f72d654fb33c8c9f30a268c97.png"
          text="联系客服" />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import sh from '@/assets/sh.png'
export default {
  data() {
    return {
      pic:sh,
      loginUser:{},
      orderStatusNum:{}
    }
  },
  methods: {
    gomydetail(){
      this.$router.push('/mydetails')
    }
  },
  created() {
    // console.log(this.$store.getters.loginUser);
    this.$axios.get('/api/user').then(d=>{
      console.log(d);
      this.loginUser=d.data.data;
      this.orderStatusNum=d.data.data.orderStatusNum
    })
  },
  computed: {
    // ...mapGetters(["loginUser"]),
  },
};
</script>
<style lang="less" >

.my {
  // background-color: #ddd;
  height: 80vh;
  .header {
    width: 100%;
    height: 95px;
    box-sizing: border-box;
    padding: 0 15px 0 15px;
    background-color: #e93323;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .headerbox {
      width: 294px;
      height: 60px;
      display: flex;
      align-items: center;
      .pic {
        width: 60px;
        height: 60px;
        img {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: 1px solid white;
          border-radius: 50%;
        }
      }
      .text {
        width: 217px;
        height: 36px;
        margin-left: 17.5px;
        display: flex;
        flex-wrap: wrap;
        .name {
          font-size: 16px;
          color: white;
        }
        .vip {
          font-size: 12px;
          color: white;
          width: 70px;
          height: 18px;
          background-color: rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
          margin-left: 10px;
          text-align: center;
          border-radius: 8px;
        }
        .id {
          width: 200px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
    &::after {
      content: "";
      width: 100%;
      height: 50px;
      background-color: #e93323;
      position: absolute;
      left: 0;
      bottom: -49px;
      border-radius: 0 0 50% 50%;
      z-index: -1;
    }
  }

  .content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px 0 10px;
    // background-color: #eee;
    .top {
      .topbox {
        width: 100%;
        height: 70px;
        background-color: #eee;
        display: flex;
        align-items: center;
        border-radius: 5px;
        .textbox {
          width: 33.3%;
          text-align: center;
          justify-content: space-between;
          a {
            display: block;
            width: 100%;
            .texttop {
              font-size: 13px;
              color: #aaa;
            }
            .textbottom {
              font-size: 18px;
              margin-top: 5px;
              color: #000;
            }
            
          }
          
        }
        &>:nth-child(2){
            border-right: 1px solid #ccc;
            border-left: 1px solid #ccc;
          }
      }
    }
    .myOrder{
      margin-top: 7.5px;
      
      .van-cell{
        border-radius: 5px 5px 0 0;
        border-bottom: 1px dashed #fff;
        background-color: #eee;
        .van-cell__title{
          font-size: 15px;
        }
        &::after{
          border-bottom: none;
        }
      }
      .order{
        border-radius: 0 0 5px 5px;
        overflow: hidden;
         height: auto;
          background-color: #eee;
        .van-grid-item{
         
          .van-grid-item__content{
            padding: 0;height: 80px;
            background-color: transparent;
            .van-grid-item__text{
              font-size: 13px;
            }
          }
        }
      }
    }
    .myService{
      margin-top: 7.5px;
       .van-cell{
        border-radius: 5px 5px 0 0;
        border-bottom: 1px dashed #fff;
        background-color: #eee;
        .van-cell__title{
          font-size: 15px;
        }
        &::after{
          border-bottom: none;
        }
       }
        .order{
        border-radius: 0 0 5px 5px;
        overflow: hidden;
        .van-grid-item{
          .van-grid-item__content{
            padding: 0;height: 80px;
            background-color: #eee;
            .van-grid-item__text{
              font-size: 13px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
