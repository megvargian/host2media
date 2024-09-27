<template>
    <Header />
        <slot />
        <a href="https://wa.me/96170153115" class="whatsapp-icon" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style="width:50px;">
        </a>
    <Footer />
</template>

<style>
.whatsapp-icon {
    position: fixed;
    bottom: 80px;
    right: 20px;
    z-index: 9;
}
</style>