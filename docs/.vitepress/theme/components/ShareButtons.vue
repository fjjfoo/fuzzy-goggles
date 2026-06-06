<script setup>import { ref, onMounted } from 'vue';
const isVisible = ref(false);
const pageUrl = ref('');
const pageTitle = ref('');
const showToast = ref(false);
const toastMessage = ref('');
const shareLinks = [
 { name: '微信', icon: '💬', action: 'wechat' },
 { name: '微博', icon: '📣', action: 'weibo' },
 { name: 'QQ', icon: '🐧', action: 'qq' },
 { name: '复制链接', icon: '🔗', action: 'copy' }
];
const getShareUrl = (action) => {
 const url = encodeURIComponent(pageUrl.value);
 const title = encodeURIComponent(pageTitle.value);
 switch (action) {
 case 'weibo':
 return `https://service.weibo.com/share/share.php?url=${url}&title=${title}`;
 case 'qq':
 return `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}`;
 case 'copy':
 return 'copy';
 default:
 return url;
 }
};
const showToastMessage = (message) => {
 toastMessage.value = message;
 showToast.value = true;
 setTimeout(() => {
 showToast.value = false;
 }, 2000);
};
const handleShare = (action) => {
 if (action === 'copy') {
 navigator.clipboard.writeText(pageUrl.value).then(() => {
 showToastMessage('链接已复制');
 }).catch(() => {
 showToastMessage('复制失败，请手动复制');
 });
 }
 else if (action === 'wechat') {
 showToastMessage('请在微信中打开链接分享');
 }
 else {
 window.open(getShareUrl(action), '_blank', 'width=600,height=400');
 }
};
onMounted(() => {
 pageUrl.value = window.location.href;
 pageTitle.value = document.title;
 const articleContent = document.querySelector('.VPContent');
 if (articleContent) {
 isVisible.value = true;
 }
});
</script>

<template>
  <div>
    <div v-if="isVisible" class="share-container">
      <div class="share-buttons">
        <button
          v-for="share in shareLinks"
          :key="share.name"
          class="share-btn"
          :title="share.name"
          @click="handleShare(share.action)"
        >
          <span class="share-icon">{{ share.icon }}</span>
          <span class="share-text">{{ share.name }}</span>
        </button>
      </div>
    </div>
    
    <transition name="toast">
      <div v-if="showToast" class="toast">
        {{ toastMessage }}
      </div>
    </transition>
  </div>
</template>

<style>
.share-container {
  position: fixed;
  right: 2rem;
  bottom: 4rem;
  z-index: 100;
}

.share-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.7;
}

.share-btn:hover {
  opacity: 1;
  transform: translateX(-4px);
  background-color: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.share-icon {
  font-size: 1rem;
}

.share-text {
  font-size: 0.875rem;
  white-space: nowrap;
}

.toast {
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: white;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  z-index: 1000;
  box-shadow: var(--vp-shadow-3);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

@media (max-width: 768px) {
  .share-container {
    right: 1rem;
    bottom: 2rem;
  }
  
  .share-text {
    display: none;
  }
  
  .share-btn {
    padding: 0.5rem;
  }
  
  .toast {
    bottom: 2rem;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
}
</style>
