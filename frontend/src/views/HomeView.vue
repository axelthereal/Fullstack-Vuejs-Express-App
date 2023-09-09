<template> 
    <Navbar />
    <br>
    <div class="container mt-5 col-md-7">
        <!-- Notification notificationtype="error" content="Cannot send message !" / --> 
        <MessageForm />
        <div class="commentlist mt-2 py-3">
           <h2>Comments</h2>
           <hr>
           <div class="list-group" v-for="item in comments">
             <CommentItem :comment="item.comment" />
           </div>
        </div>
    </div>
</template>


<script>
import Navbar from "@/components/headers/navbar.vue";
import MessageForm from "@/components/ui/messageForm.vue";
import CommentItem from "@/components/ui/CommentItem.vue";
import Notification from "@/components/ui/Notification.vue";


export default {
    name: "HomeView",
    data(){
        return {
            comments: []
        }
    },
    components: {
        Navbar,
        MessageForm,
        CommentItem,
        Notification
    },
    methods: {
         async fetchComments(){
             let req = await fetch("http://localhost:3030/comments/all/"); 
             let res = await req.json();
             if(res.status === 200){
                 this.comments = [...res.comments]; 
             } 
         } 
    },
    mounted(){
        document.title = "XpressChat | Home";
    },
    created(){
        this.fetchComments();
    }
}
</script>