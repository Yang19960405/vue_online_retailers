/**
 * Created by maoyonghong on 2019/11/7.
 */
function photoPlay (vv) {
  // 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function (constraints) {
      // 首先，如果有getUserMedia的话，就获得它
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

      // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }

      // 否则，为老的navigator.getUserMedia方法包裹一个Promise
      return new Promise(function (resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }
  const constraints = {
    video: true,
    audio: false
  };
  let videoPlaying = false;
  let v =vv ;
  let promise = navigator.mediaDevices.getUserMedia(constraints);
  promise.then(stream => {
    // 旧的浏览器可能没有srcObject
    if ("srcObject" in v) {
      v.srcObject = stream;
    } else {
      // 防止再新的浏览器里使用它，应为它已经不再支持了
      v.src = window.URL.createObjectURL(stream);
    }
    v.onloadedmetadata = function (e) {
      v.play();
      videoPlaying = true;
    };
  }).catch(err => {
    console.log(err)
    console.error(err.name + ": " + err.message);
  })
  setTimeout(function () {
    if (videoPlaying) {
      let canvas = document.getElementById('canvas');
      canvas.width = v.videoWidth;
      canvas.height = v.videoHeight;
      canvas.getContext('2d').drawImage(v, 0, 0);
      let data = canvas.toDataURL('image/webp');
      document.getElementById('photo').setAttribute('src', data);
      v.pause()
    }
  },5000);
};

export {
  photoPlay
}
