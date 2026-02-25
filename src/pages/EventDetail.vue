<template>
  <div class="container" v-if="event">

    <div class="header-plate">
      <button class="back-btn" @click="$emit('back')">←</button>
      <div class="header-title">{{event.title}}</div>
    </div>

    <div class="detail-card">
      <img :src="event.image" class="detail-image"/>

      <div class="detail-content">
        <div class="meta">
          <div class="meta-item">📅 {{event.date}}</div>
          <div class="meta-item">📍 {{event.location}}</div>
          <div class="meta-item">👤 {{event.organizer}}</div>
        </div>

        <p class="detail-description">{{event.fullDescription}}</p>

        <button class="register-btn">Зарегистрироваться</button>
      </div>
    </div>

    <div class="info-grid">
      <div class="info-card participants">
        <div class="participants-count">{{event.participants}}</div>
        <div class="participants-label">уже записалось</div>
      </div>

      <div class="info-card">
        <h3>Требования к участию</h3>
        <p class="info-text">{{event.requirements}}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({event:Object})
defineEmits(['back'])
</script>

<style scoped>

.header-plate{
  display:flex;
  align-items:center;
  gap:14px;
  background:white;
  padding:14px 18px;
  border-radius:14px;
  box-shadow:0 8px 18px rgba(0,0,0,0.06);
  margin-bottom:24px;
}

.back-btn{
  width:36px;
  height:36px;
  border:none;
  border-radius:8px;
  background:#ececf1;
  cursor:pointer;
  font-size:18px;
}

.header-title{
  font-size:20px;
  font-weight:600;
}

.detail-card{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:30px;
  background:white;
  padding:24px;
  border-radius:18px;
  box-shadow:0 10px 24px rgba(0,0,0,0.08);
  margin-bottom:24px;
}

.detail-image{
  width:100%;
  border-radius:14px;
}

.detail-content{
  display:flex;
  flex-direction:column;
  gap:14px;
}

.register-btn{
  margin-top:auto;
  background:#6366f1;
  color:white;
  border:none;
  padding:14px;
  border-radius:10px;
  cursor:pointer;
  font-weight:500;
  font-size:15px;
}

.register-btn:hover{
  background:#5558e6;
}

.meta{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}

.meta-item{
  background:#f4f4f7;
  padding:6px 10px;
  border-radius:8px;
  font-size:13px;
}

.detail-description{
  color:#666;
  line-height:1.5;
}

.info-grid{
  display:grid;
  grid-template-columns: 280px 1fr;
  gap:20px;
}

.info-card{
  background:white;
  padding:20px;
  border-radius:16px;
  box-shadow:0 8px 18px rgba(0,0,0,0.06);
}

.participants{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
}

.participants-count{
  font-size:32px;
  font-weight:700;
  color:#6366f1;
}

.participants-label{
  font-size:13px;
  color:#666;
}

.requirements h3{
  margin-top:0;
  margin-bottom:10px;
}

.info-text{
  color:#666;
  line-height:1.5;
}

</style>
