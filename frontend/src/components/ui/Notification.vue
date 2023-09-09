<template>
    <div class="alert alert-dismissible fade show" role="alert" :class="[ notificationtype == 'success' ? 'alert-success' : 'alert-danger' ]">
          <span class="bi bi-bell fs-5 px-3"></span>
          <span class="fs-6 fw-medium">{{ content }}</span>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> 
</template>

<script>
export default {
     name:"Notification",
     props: {
        notificationtype: {
            type: String,
            default: "success"
        },
        content: {
            type: String,
            default: "A default notification text..."
        }
     }
}
</script>