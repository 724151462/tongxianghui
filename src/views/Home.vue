<template>
  <div>
    <img width="100%" src="../assets/images/banner.jpg" alt />
    <Gongge :menuList="menuList"></Gongge>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Gongge from "@/components/Gongge.vue";
import {
  login
} from '@/api/api'

export default {
  name: "home",
  data() {
    return {
      menuList: [
        {
          img: require('@/assets/images/active.png'),
          name: "活 动",
          path: "/active/list"
        },
        {
          img: require('@/assets/images/jlzx.png'),
          name: "交流中心",
          path: "/com/index"
        },
        {
          img: require('@/assets/images/txdr.png'),
          name: "同乡达人",
          path: '/com/txdr'
        },
        {
          img: require('@/assets/images/grxx.png'),
          name: "个人中心",
          path: '/center/info'
        },
        {
          img: require('@/assets/images/zjjl.png'),
          name: "中奖记录",
          path: "/active/zzjl"
        }

      ],
      uuid: ''
    };
  },
  created() {
    this.uuid = this.$router.currentRoute.query.uuid
    console.log(this.uuid)
    this.login(this.uuid)
  },

  methods: {
    login(unionId) {
      login({unionId}).then(res => {
        alert(res.data)
        if(!window.localStorage){
            alert("浏览器不支持localstorage");
            return false;
        }
        if(res.msg === 'Auth failed' || res.msg === '已存在该记录'){
          console.log(123)
          localStorage.setItem('uuid', this.uuid)
        }else if(res.code === 200) {
          localStorage.setItem('token', res.data.token)
        }
      })
    }
  },
  
  components: {
    HelloWorld,
    Gongge
  }
};
</script>
<style lang="stylus" scope>
.test {
  height: 10vh;
  width: 200px;
  background: red;
}
</style>
