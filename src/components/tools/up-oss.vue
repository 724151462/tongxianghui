<!--
  接收参数：
  btnText 按钮的文字
    接收 String 默认：'上传'
  
  inputs 页面有多个上传按钮时做区分

  size 文件可上传的最大字节大小 (目前未实现上传文件的大小限制功能)
    接收 Number
      示例：2255650
  
  upDir  文件要上传的路径  
    接收 String
      示例：'teskedu/avatar',
      如果传'resource',则根据文件类型自动判定，'tskedu/resource/*'
      如果不传则上传到'other目录'

-->
<template>
  <div class="row ju-center">
    <img v-if="plus" width="50" @click="goUp" :src="require('../../assets/images/plus.jpg')" alt="">
    <mt-button size="small" v-else type="primary" @click="goUp" id="male"><img src="../../assets/images/photo.png" height="20" width="20" slot="icon"></mt-button>
    <!-- <div>{{schedule}}</div> -->
    <input type="file" :id="inputs" @change="upInput">
  </div>
</template>

<script>
import oss from "ali-oss";
import axios from "axios";
import { webUpload } from "../../api/oss";
import Cookie from 'js-cookie'

export default {
  name: "up-oss",
  props: {
    size: {
      default: 2 * 1024 * 1024 * 1024
    },
    btnText: {
      default: "上传"
    },
    inputs: {
      default: "inputs"
    },
    fileType: {
      default: ""
    },
    upDir: {
      default: ""
    },
    plus: {
      default: false
    }
  },
  data() {
    return {
      schedule: 0, //上传进度
      ossData: null,
      fileData: null,
      imageData: {
        accessid: "",
        dir: "",
        expire: "",
        host: "",
        policy: "",
        signature: ""
      },
      isError: 3,
      //需要返回的文件信息
      fileName: "",
      fileSize: "",
    };
  },
  components: {
    
  },
  methods: {
    //触发上传按钮
    goUp() {
      document.getElementById(this.inputs).click();
    },
    //清空输入框
    inputNull(event) {
      let dom = document.getElementById(this.inputs);
      dom.value = "";
      // dom.outerHTML = dom.outerHTML;
      this.fileData = null;
    },
    //捕获到文件
    upInput(event) {
      if (event) {
        this.fileData = event;
        this.fileName = new Date().getTime() + event.target.files[0].name;
        this.fileSize = event.target.files[0].size;
      }
      //这里加一个获取验签信息的错误处理
      if (Number(this.isError) === 0) {
        this.errors();
        return false;
      }
      if (this.ossData === null && Number(this.isError) !== 0) {
        this.ossCheck();
        return false;
      }
      // if (this.fileType !== "") {
      //   let chekcType = this.fileType.split(",").some(element => {
      //     return file.type === element;
      //   });
      //   if (!chekcType) {
      //     this.$message({
      //       message: "文件格式错误",
      //       type: "error"
      //     });
      //     this.inputNull();
      //     return false;
      //   }
      // }
      if (file.size > this.size) {
        this.$message({
          message: "上传文件超出可上传范围，请重新选择文件上传",
          type: "error"
        });
        this.inputNull();
        return false;
      }
    },
    //获取签证
    ossCheck(name) {
      let dir = this.getDir();
      webUpload({ ossPath: dir })
        .then(res => {
          if (Number(res.code) === 200) {
            let request = new FormData();
            this.imageData = res.data;
            this.imageData.key = res.data.dir + "/" + this.fileName;
            request.append("key", res.data.dir + "/" + this.fileName);
            request.append("policy", res.data.policy);
            request.append("OSSAccessKeyId", res.data.accessid);
            request.append("success_action_status", "200");
            request.append("Signature", res.data.signature);
            request.append("file", this.fileData.target.files[0]);
            this.inputNull();
            this.startUp(request);
          } else {
            this.inputNull();
            this.closeLoading()
            this.$message.error("获取验签失败，请重试");
          }
        })
        .catch(err => {
          this.inputNull();
          console.log("获取验签失败",err);
          this.closeLoading()
          this.$message.error("获取验签失败，请重试");
        });
    },
    //上传文件到OSS
    startUp(request) {
      // this.$store.commit("SET_LOADING_TEXT", "正在上传...");
      console.log(request)
      axios({
        method: "post",
        url: this.imageData.host,
        data: request,
        headers: { "Content-Type": "multipart/form-data", token: Cookie.get('token') }
      })
        .then(res => {
          console.log(res)
          let url = this.imageData.host + "/" + this.imageData.key;
          this.$emit("ossUp", url, this.fileName, this.fileSize);
        })
        .catch(function(error) {
          this.closeLoading()
          console.log("error", error);
        });
    },
    //生成文件要上传到的路径
    getDir() {
      let dir = "";
      if (this.upDir) {
        if (this.upDir == "resource") {
         dir =  this.resType(this.fileName);
        } else {
          dir = this.upDir;
        }
      } else {
        dir = "other";
      }
      return dir
    },
    //检验文件类型，生成dir
    resType(name) {
      let dir = "";
      let index = name.lastIndexOf("."),
        imgArr = ["jpeg", "jpg", "png"],
        audioArr = ["mp3", "wav"],
        videoArr = ["mp4", "avi", "rmvb", "wmv", "mkv"],
        docArr = ["pdf", "txt", "doc", "docx", "xls", "xlsx", "ppt", "pptx"];
      let curType = name.substring(index + 1, name.length).toLowerCase();

      if (
        imgArr.find(item => {
          return curType == item;
        })
      ) {
        dir = "teskedu/resource/img";
      } else if (
        videoArr.find(item => {
          return curType == item;
        })
      ) {
        dir = "teskedu/resource/video";
      } else if (
        docArr.find(item => {
          return curType == item;
        })
      ) {
        dir = "teskedu/resource/doc";
      } else if (
        audioArr.find(item => {
          return curType == item;
        })
      ) {
        dir = "teskedu/resource/audio";
      } else {
        this.$message.error("请上传受支持的文件类型");
        return false;
      }
      return dir;
    },
    //关闭loading
    closeLoading(){
      this.$store.commit("SET_LOADING_TEXT", "正在加载");
      this.$store.commit("HIDELOADING");
    }
  }
};
</script>

<style scoped lang="stylus" type="text/stylus">
#logo {
  display: none;
}

#pic {
  display: none;
}

#inputs {
  display: none;
}

#creImg {
  display: none;
}
</style>
