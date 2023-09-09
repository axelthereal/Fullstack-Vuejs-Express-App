<template> 
  <div class="pt-3" align="left">
  <h4>Message </h4> 
    <div class="form-group">
      <textarea rows="5" cols="" v-model="msg" class="form-control shadow-none" placeholder="Enter your message..."></textarea>
    </div> 
    <br>
    <button type="button" class="btn btn-primary px-3 py-2 rounded-2 d-flex justify-content-evenly" @click="postComment()" :disabled="msg.length < 2">
      <span class="bi bi-pencil-square"></span>
      <span class="text w-100 px-2">Send Message</span>
    </button>
  </div>
</template>

<script>
export default {
    name: "MessageForm",
    data(){
      return {
          msg: ""
      }
    },
    methods: {
        async postComment(){
            // post msg
         let req = await fetch("http://localhost:3030/comments/new/", {
         method: 'POST',
         headers: {
          'Content-type':'application/json', 
         },
         body: JSON.stringify({
         msg: this.msg
         }),
       });
       
        // refresh form
        if(req.status === 200){
           this.msg = "";
           window.location.reload();
        }
               
        }
    },
}
</script>