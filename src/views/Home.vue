<template>
  <div class="home">
    <qrcode-stream @init="onInit" @decode="onDecode" :camera="cameraSettings" :track="false" :paused="paused"></qrcode-stream>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      cameraSettings: {
        audio: false,
        video: {
          facingMode: { ideal: "environment" }
        }
      },
      paused: false
    };
  },
  methods: {
    onDecode(decodedString) {
      alert(decodedString)
    },
    async onInit (promise) {
    // show loading indicator

    try {
      await promise

      // successfully initialized
    } catch (error) {
      if (error.name === 'NotAllowedError') {
        // user denied camera access permisson
      } else if (error.name === 'NotFoundError') {
        // no suitable camera device installed
      } else if (error.name === 'NotSupportedError') {
        // page is not served over HTTPS (or localhost)
      } else if (error.name === 'NotReadableError') {
        // maybe camera is already in use
      } else if (error.name === 'OverconstrainedError') {
        // did you requested the front camera although there is none?
      } else if (error.name === 'StreamApiNotSupportedError') {
        // browser seems to be lacking features
      }
    } finally {
      // hide loading indicator
    }
  }
  }
};
</script>
