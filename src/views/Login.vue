<template>
  <div class="login">
    <div class="top">
      <div class="toppic"></div>
    </div>
    <div class="loginform">
      <van-tabs>
        <van-tab title="账号登录" name="a">
          <van-form @submit="dologin">
            <van-field
            v-model="account"
              left-icon="graphic"
              name="account"
              placeholder="请输入手机号码"
              :rules="[{ required: true, message: '请输入手机号码' }]"
            />
            <van-field
            v-model="password"
              left-icon="lock"
              type="password"
              name="password"
              placeholder="填写登录密码"
              :rules="[{ required: true, message: '填写登录密码' }]"
            />
            <div style="margin: 16px">
              <van-button
                color="linear-gradient(90deg,#f35447 0,#ff8e3c)"
                round
                block
                type="info"
                native-type="submit"
                >登录</van-button
              >
            </div>
            <div class="tip">没有账号?<span>立即注册</span></div>
          </van-form>
        </van-tab>
        <van-tab title="快速登录" name="b">
          <van-form @submit="doSmsLogin">
            <van-field
              left-icon="graphic"
              name="用户名"
              placeholder="请输入手机号码"
               v-model="mobile"
            />
            <van-field
              left-icon="lock"
              type="password"
              name="密码"
              placeholder="填写验证码"
              v-model="sms"
            >
              <template #button>
                <van-button size="small" @click.stop.prevent="getSms" :disabled="countdown<60" type="warning">{{countdown>=60?"获取验证码":`${countdown}秒`}}</van-button>
              </template>
            </van-field>
            <div style="margin: 16px">
              <van-button
                color="linear-gradient(90deg,#f35447 0,#ff8e3c)"
                round
                block
                type="info"
                native-type="submit"
                >登录</van-button
              >
            </div>
            <div class="tip">没有账号?<span>立即注册</span></div>
          </van-form>
        </van-tab>
      </van-tabs>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import {mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
      account:'',
      password:'',
      mobile:'',
      sms:'',
      smskey:'',
      countdown:60
    }
  },
  created() {
     this.axios.get('/api/verify_code').then(d=>{
        console.log(d);
        this.smskey=d.data.data.key;//获取发送短信的key
      });
  },
  methods: {
    dologin(value){
      console.log(value);
      this.$axios.post('/api/login',value).then(d=>{
        console.log(d);
        if(d.data.status==200){
          this.saveToken(d.data.data.token);
          this.getLoginInfo(d.data.data.token);
          this.$toast({
            message:d.data.msg,
            onClose:()=>{
              console.log(666);
              this.$router.replace("/my")
            }
          })
        }else{
          this.$toast(d.data.msg)
        }
      })
    },
    doSmsLogin(){//验证码登录
        this.$axios.post('/api/login/mobile',{
          phone:this.mobile,
          captcha:this.sms
        }).then(d=>{
          //判断登录结果
          if(d.data.status===200){
            //登录成功
            let token=d.data.data.token;
            this.saveToken(token);
            this.getLoginInfo();
            this.$toast({
                message:"登录成功",
                icon:"passed",
                onClose:()=>{//但提示关闭时候回调函数
                    this.$router.push('/my');
                }
            });
          }else{
            this.$toast(d.data.msg);
          }
          console.log('验证码登录结果',d);
        })
      },
      getSms(){
        let mobile=this.mobile;
        //2.获取短信接口
        this.axios.post('api/register/verify',{//post数据
            key:this.smskey,//发送短信的key
            phone:mobile,//手机号
            type:'login'//短信类型为登录
        }).then(d=>{
          d=d.data;
          console.log('获取短信的结果==>',d);
          if(d.status==200){
            //如果发送成功, 发送按钮禁用. 同时有一个倒计时.60秒
            let intervalid=setInterval(()=>{
              if(this.countdown<=0){
                clearInterval(intervalid);
                this.countdown=60;
                return;
              }
              this.countdown--;
            },1000);
            this.$toast('验证码发送成功!');
          }else{
            this.$toast(d.msg);
          }
        })
      },
    ...mapMutations(['saveToken']),
    ...mapActions(['getLoginInfo'])
  },
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(180deg, #eb5447 0, #ff8e3b);
  .top {
    width: 100%;
    height: 108px;
    padding-top: 35px;
    background: url("../assets/registerw.b3c17e1c.png") no-repeat center
      center/100% 100%;
    .toppic {
      width: 82px;
      height: 82px;
      margin: 0 auto;
      background-color: red;
      border-radius: 50%;
      border: 2px solid white;
    }
  }
  .loginform {
    width: 280px;
    // height: 282.9px;
    background-color: white;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 15px;
    padding: 22.5px 15px 0 15px;
    .van-tabs__wrap {
      .van-tabs__nav {
        width: 280px;
        height: 32.5px;

        .van-tab {
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
    .van-tab__pane {
      .van-form {
        .van-cell {
          .van-field__button {
            width: 75px;
            height: 25px;
            .van-button {
              width: 75px;
              height: 25px;
              border: none;
              background-color: #f35446;
              padding: 0;
              border-radius: 15px;
              margin-left: 10px;
              .van-button__text {
                font-size: 12.5px;
                font-weight: normal;
                color: white;
              }
            }
          }
        }
      }
    }
    .van-button {
      .van-button__content {
        .van-button__text {
          font-size: 17px;
          font-weight: 700;
        }
      }
    }
    .tip {
      width: 280px;
      height: 55px;
      font-size: 15px;
      text-align: center;
      line-height: 55px;
      span {
        color: #fc4141;
      }
    }
  }
  .bottom {
    width: 310px;
    height: 18px;
    margin: 0 auto;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAAkCAYAAAA3mqpgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZDUwNjlmMy05NjI1LTRhZTItYjMwNC0yZDQ0ZTM3ZDFjNjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REE5RjQyRjk3NzgzMTFFOTg0Q0Q5ODE4RDgwOTI2MTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REE5RjQyRjg3NzgzMTFFOTg0Q0Q5ODE4RDgwOTI2MTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowYjA0NzcxMC1kNmFhLTQzOTMtYWFhMC1jNjkxMWYyZDVmZWIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxMTViODdmNi0yNWY5LTE2NGQtYjUzOC02YzViOTc2NzVjOTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UM78mAAADQ0lEQVR42uzdvYtUVxgH4DPDEGxsLAKmtFAECwvL/AFqYWmpgrWdWATsLEUwXVJtRLQNKeJnJXZuYSGoWRRR/EBhtwisG1n2eg5zLW2y98752OeB16l27p6PhZ8z95530nVdGFL3+K+l+HIoLNrml4Mhh67bFQCAuk0mG1muO/vhaYarPpkcPnFmyDecDhwm08uKXQkAUKyVPrOVGSh7j6wTAECxBs9qYwTKh7E+WysAgOJs9Fmt+EC5Huuu9QIAKM6dPqsVHyiTpVib1gwAoBgpm/0xxhuPFSjfxLph3QAAipGy2euaAmXyW/DENwBACVIm+32sNx8zUP4X60KsNWsIAJDNWp/JRjtrczryANJX3+dirVpLAICFW+2z2JsxLzJdwECexTobfP0NALBIK30Gezb2haYLGlBKxadjXQue/gYAGNNmn7lOh5E/mfxmtsDBfYn1a6w/Y52KdTSWPtgAAMNIz6/cDvOjgV4v8sKzDINNA7wU60qsn2MdiXUg1k+xdm/jd+piTewlAKAS3TZ+Nn0K+W+sd7Gex1oO8w446zkGMss4id866gzTVefTq7/jvz9mGMdBfw8AUL2nGa75Mezdf7yFyRs0UE4On8gT729dTi8vMwVKAID/40V4/0+YHDtf/UCmDS3KI/sSAKjIcisDaSlQ3ou1ZW8CABXY6rOLQFmYdFPqffsTAKjA/T67CJQFSscSrdujAEDB1vvM0ozWAuWHMD+SqLNXAYACdX1W+SBQli0dQ5TOuHQ/JQBQWpi8GoY6MlGgHN3NWOkZfF9/AwAlSJnkYqzrLQ5u2vDCPYh1sv9fgE8rAYActvoskjLJ7VYHOWt8EdP9Cb+E+Y2vqXd4avO4L9aeAceu5SMA1G3IZy9SS8TVMG+4ks6ZTEcDvW19Amc7ZKOkYLnU19BytXwEAIbxMdZx07DDA2WulkVaPgJAE17kzBMtmJqCbdPyEQDqtmwKBMrctHwEgHo11QJRoKyXlo8AUK+mWiAKlHXT8hEA6tNcC0SBsm5aPgJAXZpsgShQ1k/LRwCoJ0w22QJRoGyDlo8AULamWyAKlO3Q8hEAyrMjWiDmMjMFo1hEy0cA4Pt2ZAvEXL4KMADOrbHLPVnkIAAAAABJRU5ErkJggg==)
      no-repeat center center/100% 100%;
  }
}
</style>