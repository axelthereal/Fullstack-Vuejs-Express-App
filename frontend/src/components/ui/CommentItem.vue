<template>
    <div class="list-group-item cursor-p d-flex align-items-center my-3" :id="'cmt_'+comment.id">
         <div class="img p-3 bg-light border border-1 rounded rounded-3">
            <img src="../../assets/logo.png" alt="" class="cmment-img rounded rounded-3" width="35" height="35" />
         </div> 
         <div class="commentinfo d-flex flex-column w-100 ps-3">
           <span class="small opacity-50">{{ comment.dmsg }}</span>
           <span class="commenttext">{{ comment.content }}</span>
         </div>
    </div>
</template>


<script>
export default {
    name: "CommentItem",
    props: {
      comment: {
        type: Object,
        default: {
          id: 1,
          content: "The comment text...",
          dmsg: "since 12 hours 07 minutes"
        }
      }
    }
}
</script>