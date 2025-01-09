<script setup>
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import HomeCard from './components/HomeCard.vue';
import JobListings from './components/JobListings.vue';
</script>

<template>
  <Navbar />
  <Hero title="Test Title" subtitle = "Test Subtitle"/>
  <HomeCard />
  <JobListings />
</template>